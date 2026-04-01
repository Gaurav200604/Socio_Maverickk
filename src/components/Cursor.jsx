import { useEffect, useRef } from 'react';

function isDarkAt(x, y) {
  // sample the element under the cursor and check its background
  const el = document.elementFromPoint(x, y);
  if (!el) return false;

  // walk up the DOM until we find a non-transparent background
  let node = el;
  while (node && node !== document.body) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      // parse rgb values
      const m = bg.match(/\d+/g);
      if (m) {
        const [r, g, b] = m.map(Number);
        // luminance formula
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return lum < 0.45; // dark if luminance < 45%
      }
    }
    node = node.parentElement;
  }
  return false;
}

export default function Cursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const dot  = { x: W / 2, y: H / 2 };
    const ring = { x: W / 2, y: H / 2 };
    const trail = [];
    const TRAIL_LEN = 18;

    let isMoving = false;
    let moveTimer = null;
    let dark = false; // is background dark at cursor?

    const onMove = (e) => {
      dot.x = e.clientX;
      dot.y = e.clientY;
      isMoving = true;
      clearTimeout(moveTimer);
      moveTimer = setTimeout(() => { isMoving = false; }, 120);

      trail.push({ x: e.clientX, y: e.clientY });
      if (trail.length > TRAIL_LEN) trail.shift();

      // sample background every move
      dark = isDarkAt(e.clientX, e.clientY);
    };

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);

    let raf;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // colors based on background
      const ringColor  = dark ? '255,255,255' : '244,166,35'; // white on dark, saffron on light
      const dotColor   = dark ? '255,255,255' : '244,166,35';
      const trailColor = dark ? '255,255,255' : '244,166,35';

      // comet trail
      if (isMoving && trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const t = i / trail.length;
          ctx.beginPath();
          ctx.arc(trail[i].x, trail[i].y, t * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${trailColor}, ${t * 0.45})`;
          ctx.fill();
        }
      }

      // lagging ring
      ring.x += (dot.x - ring.x) * 0.12;
      ring.y += (dot.y - ring.y) * 0.12;

      ctx.beginPath();
      ctx.arc(ring.x, ring.y, 14, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${ringColor}, 0.75)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // center dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, 1)`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${dotColor}, 0.8)`;
      ctx.fill();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    />
  );
}
