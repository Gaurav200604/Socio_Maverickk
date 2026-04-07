import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const TICKER = ['REPEAT', 'DESIGN', 'STRATEGY', 'IMPACT',
                'REPEAT', 'DESIGN', 'STRATEGY', 'IMPACT',
                'REPEAT', 'DESIGN', 'STRATEGY', 'IMPACT',
                'REPEAT', 'DESIGN', 'STRATEGY', 'IMPACT'];

function Burst() {
  return (
    <svg className="ticker-burst" viewBox="0 0 40 40" fill="none">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return <line key={i} x1={20 + 6*Math.cos(a)} y1={20 + 6*Math.sin(a)}
          x2={20 + 16*Math.cos(a)} y2={20 + 16*Math.sin(a)}
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />;
      })}
      <circle cx="20" cy="20" r="3.5" fill="currentColor" />
    </svg>
  );
}

function InteractiveGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const CELL = 48;
    let W, H, cols, rows, raf;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      cols = Math.ceil(W / CELL) + 1;
      rows = Math.ceil(H / CELL) + 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const RADIUS = 140;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * CELL;
          const cy = r * CELL;
          const dist = Math.hypot(cx - mx, cy - my);
          const t = Math.max(0, 1 - dist / RADIUS); // 0 = far, 1 = close

          // base: very faint, near cursor: saffron-tinted
          const alpha = 0.04 + t * 0.22;
          const r_ = Math.round(244 * t + 200 * (1 - t));
          const g_ = Math.round(166 * t + 180 * (1 - t));
          const b_ = Math.round(35  * t + 160 * (1 - t));

          ctx.fillStyle = `rgba(${r_},${g_},${b_},${alpha})`;
          ctx.fillRect(cx + 1, cy + 1, CELL - 2, CELL - 2);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -999, y: -999 }; };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-grid-canvas" />;
}

const CYCLE_WORDS = ['Vision', 'Brand', 'Dream','Bussiness'];

export default function Hero() {
  const navigate = useNavigate();

  const preventSelectionOnMouseDown = (e) => {
    e.preventDefault();
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 92;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % CYCLE_WORDS.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">

      {/* interactive grid */}
      <InteractiveGrid />

      {/* content */}
      <div className="hero-content">
       

        <h1 className="hero-title">
          START GROWING<br />
          YOUR <span className="hero-word-group"><span
            className={`hero-accent hero-cycle-word ${visible ? 'cycle-in' : 'cycle-out'}`}
          >{CYCLE_WORDS[wordIdx]}</span><span className="hero-dot">.</span></span>
        </h1>

        <p className="hero-desc">
          At Socio Maverick, we specialize in 360-degree digital marketing strategies
          designed to catapult your brand to new heights of success.
          A full funnel approach for your business.
        </p>

        <div className="hero-cta-row">
          <button
            className="btn-primary"
            onMouseDown={preventSelectionOnMouseDown}
            onClick={() => navigate('/contact')}
          >
            Start Your Journey
          </button>
          <button
            className="btn-secondary"
            onMouseDown={preventSelectionOnMouseDown}
            onClick={() => scrollTo('services')}
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* ticker */}
      <div className="hero-ticker">
        <div className="ticker-track">
          {TICKER.map((text, i) => (
            <span key={i} className="ticker-item">{text}<span className="ticker-sep">·</span></span>
          ))}
        </div>
      </div>

    </section>
  );
}
