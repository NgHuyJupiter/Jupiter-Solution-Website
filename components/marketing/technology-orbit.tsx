'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo, useId } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  orbitDuration: number; // in seconds
  direction: 1 | -1;     // 1: CW, -1: CCW
  startAngle: number;    // degrees
  rx: number;            // semi-major axis
  ry: number;            // semi-minor axis
  tilt: number;          // tilt angle in degrees
  accentColor: string;
  nodePosition: 'top' | 'right' | 'bottom' | 'left';
}

const SERVICES_CONFIG: ServiceItem[] = [
  {
    id: 'security',
    title: 'SECURITY',
    subtitle: 'ZERO TRUST SOC',
    orbitDuration: 26,
    direction: -1,
    startAngle: 210,
    rx: 165,
    ry: 92,
    tilt: -22,
    accentColor: '#8E2938',
    nodePosition: 'right',
  },
  {
    id: 'cloud',
    title: 'CLOUD',
    subtitle: 'INFRASTRUCTURE',
    orbitDuration: 32,
    direction: 1,
    startAngle: 30,
    rx: 155,
    ry: 85,
    tilt: -12,
    accentColor: '#D46A79',
    nodePosition: 'left',
  },
  {
    id: 'devops',
    title: 'DEVOPS',
    subtitle: 'CI/CD · MONITORING',
    orbitDuration: 29,
    direction: -1,
    startAngle: 135,
    rx: 142,
    ry: 78,
    tilt: 15,
    accentColor: '#A73748',
    nodePosition: 'left',
  },
  {
    id: 'ai',
    title: 'APPLIED AI',
    subtitle: 'RAG · AGENTS',
    orbitDuration: 24,
    direction: 1,
    startAngle: 285,
    rx: 128,
    ry: 70,
    tilt: -28,
    accentColor: '#D46A79',
    nodePosition: 'top',
  },
  {
    id: 'software',
    title: 'SOFTWARE',
    subtitle: 'CORE SYSTEMS',
    orbitDuration: 35,
    direction: 1,
    startAngle: 195,
    rx: 178,
    ry: 96,
    tilt: 20,
    accentColor: '#8E2938',
    nodePosition: 'right',
  },
];

// Helper: Calculate 2D position on an elliptical orbit rotated by tilt angle
function calculateOrbitPos(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  tiltDeg: number,
  angleDeg: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  const tiltRad = (tiltDeg * Math.PI) / 180;

  // Unrotated ellipse relative to origin
  const x0 = rx * Math.cos(rad);
  const y0 = ry * Math.sin(rad);

  // Rotate by tilt angle
  const x = cx + x0 * Math.cos(tiltRad) - y0 * Math.sin(tiltRad);
  const y = cy + x0 * Math.sin(tiltRad) + y0 * Math.cos(tiltRad);

  return { x, y };
}

export default function TechnologyOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const gradId = `orbit-connection-grad-${baseId.replace(/:/g, '')}`;
  const filterId = `node-glow-${baseId.replace(/:/g, '')}`;

  // Prefers reduced motion hook
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Viewport intersection reveal state
  const [isRevealed, setIsRevealed] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);

  // Current angle offset for each service (in degrees)
  const [angles, setAngles] = useState<{ [key: string]: number }>(() => {
    const initial: { [key: string]: number } = {};
    SERVICES_CONFIG.forEach((s) => {
      initial[s.id] = s.startAngle;
    });
    return initial;
  });

  // Hover state
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Parallax offset (-1 to 1)
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Gravitational ripple animation trigger
  const [rippleKey, setRippleKey] = useState(0);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Viewport IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reveal progress timer
  useEffect(() => {
    if (!isRevealed) return;
    if (prefersReducedMotion) {
      setRevealProgress(1);
      return;
    }
    const startTime = performance.now();
    const duration = 1400; // ms

    let animId: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const prog = Math.min(1, elapsed / duration);
      setRevealProgress(prog);
      if (prog < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isRevealed, prefersReducedMotion]);

  // Periodic gravitational ripple effect on central hub
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRippleKey((prev) => prev + 1);
    }, 4800);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Main 60 FPS animation loop for orbital motion
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || revealProgress < 1) return;

    let animId: number;

    const updateOrbit = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }
      const deltaSec = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Only update if tab is active and delta is reasonable (< 0.2s)
      if (deltaSec > 0 && deltaSec < 0.2) {
        setAngles((prev) => {
          const next = { ...prev };
          SERVICES_CONFIG.forEach((s) => {
            // Pause movement of hovered card
            if (s.id === hoveredId) return;

            const speedDegPerSec = (360 / s.orbitDuration) * s.direction;
            next[s.id] = (next[s.id] + speedDegPerSec * deltaSec + 360) % 360;
          });
          return next;
        });
      }

      animId = requestAnimationFrame(updateOrbit);
    };

    animId = requestAnimationFrame(updateOrbit);
    return () => {
      cancelAnimationFrame(animId);
      lastTimeRef.current = null;
    };
  }, [prefersReducedMotion, revealProgress, hoveredId]);

  // Desktop Mouse Parallax Handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    // Clamp to -1..1
    const clampedX = Math.max(-1, Math.min(1, dx));
    const clampedY = Math.max(-1, Math.min(1, dy));

    setParallax({ x: clampedX, y: clampedY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
    setHoveredId(null);
  }, []);

  // Compute calculated positions for all 5 services
  const positions = useMemo(() => {
    const cx = 220;
    const cy = 220;
    const res: { [key: string]: { x: number; y: number } } = {};

    SERVICES_CONFIG.forEach((s) => {
      const angle = angles[s.id] ?? s.startAngle;
      res[s.id] = calculateOrbitPos(cx, cy, s.rx, s.ry, s.tilt, angle);
    });

    return res;
  }, [angles]);

  const hoveredPos = hoveredId ? positions[hoveredId] : null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[440px] aspect-square select-none group/orbit"
      aria-label="Jupiter Solutions Enterprise Technology Orbit"
    >
      {/* Outer container frame */}
      <div className="absolute inset-0 rounded-[var(--radius-xl)] border border-white/15 bg-[#1C181A] shadow-2xl overflow-hidden transition-colors duration-500">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-editorial-grid opacity-30 pointer-events-none" />

        {/* Ambient burgundy background light glow */}
        <div className="absolute inset-0 bg-burgundy-glow opacity-70 pointer-events-none" />

        {/* Corner coordinate marks */}
        <span className="absolute top-3 left-3 font-mono text-[8px] text-text-muted select-none z-10">+</span>
        <span className="absolute top-3 right-3 font-mono text-[8px] text-text-muted select-none z-10">+</span>
        <span className="absolute bottom-3 left-3 font-mono text-[8px] text-text-muted select-none z-10">+</span>
        <span className="absolute bottom-3 right-3 font-mono text-[8px] text-text-muted select-none z-10">+</span>

        {/* Geo location stamp */}
        <span className="absolute bottom-3 left-6 font-mono text-[6.5px] text-text-muted/60 select-none z-10">
          SYS.LOC: 21.0285°N 105.8542°E
        </span>
        <span className="absolute bottom-3 right-6 font-mono text-[6.5px] text-text-muted/60 select-none z-10">
          ORBIT.PRECISION // v2.4
        </span>
      </div>

      {/* Main SVG Layer for Orbits, Particles, and Connection Lines */}
      <svg
        viewBox="0 0 440 440"
        className="relative z-10 w-full h-full pointer-events-none"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${parallax.x * 4}px, ${parallax.y * 4}px, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <defs>
          {/* Glowing gradient for active connection line */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E2938" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D46A79" stopOpacity="1" />
            <stop offset="100%" stopColor="#F7F2F3" stopOpacity="0.9" />
          </linearGradient>

          {/* Soft pulse glow filter */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Grid Alignment Axes */}
        <line x1="220" y1="35" x2="220" y2="405" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="35" y1="220" x2="405" y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Orbit Trajectory Lines */}
        {SERVICES_CONFIG.map((s) => {
          const isHovered = hoveredId === s.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
            <g key={`orbit-line-${s.id}`}>
              {/* Main Orbit Ellipse Path */}
              <ellipse
                cx="220"
                cy="220"
                rx={s.rx}
                ry={s.ry}
                fill="none"
                stroke={isHovered ? '#D46A79' : 'rgba(142, 41, 56, 0.28)'}
                strokeWidth={isHovered ? 1.8 : 1}
                strokeDasharray={isHovered ? 'none' : '4 6'}
                transform={`rotate(${s.tilt} 220 220)`}
                style={{
                  opacity: isDimmed ? 0.15 : isHovered ? 1 : 0.6 + revealProgress * 0.4,
                  transition: 'stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease',
                }}
              />

              {/* Animated orbital particle segment */}
              {!prefersReducedMotion && (
                <ellipse
                  cx="220"
                  cy="220"
                  rx={s.rx}
                  ry={s.ry}
                  fill="none"
                  stroke={s.accentColor}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray="20 180"
                  strokeDashoffset={-angles[s.id] * 2.5}
                  transform={`rotate(${s.tilt} 220 220)`}
                  opacity={isDimmed ? 0.1 : isHovered ? 0.9 : 0.45}
                  style={{
                    transition: 'opacity 0.3s ease',
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Active Hover Connection Line to Center */}
        {hoveredPos && hoveredId && (
          <g>
            {/* Outer connection aura */}
            <line
              x1="220"
              y1="220"
              x2={hoveredPos.x}
              y2={hoveredPos.y}
              stroke={`url(#${gradId})`}
              strokeWidth="2"
              strokeDasharray="3 3"
              className="animate-pulse"
            />
            {/* Center target dot */}
            <circle
              cx={hoveredPos.x}
              cy={hoveredPos.y}
              r="4"
              fill="#D46A79"
              filter={`url(#${filterId})`}
            />
          </g>
        )}

        {/* Central Hub — Gravitational Center */}
        <g
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(${parallax.x * 2}px, ${parallax.y * 2}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Gravitational Ripple Effect */}
          {!prefersReducedMotion && (
            <circle
              key={rippleKey}
              cx="220"
              cy="220"
              r="32"
              fill="none"
              stroke="#D46A79"
              strokeWidth="1.5"
              className="animate-ping opacity-30"
              style={{ animationDuration: '3s' }}
            />
          )}

          {/* Outer Breathing Glow Ring */}
          <circle
            cx="220"
            cy="220"
            r="35"
            fill="none"
            stroke="rgba(212, 106, 121, 0.35)"
            strokeWidth="1"
            className="animate-pulse"
          />

          {/* Main Core Circle */}
          <circle
            cx="220"
            cy="220"
            r="32"
            fill="#171315"
            stroke={hoveredId ? '#D46A79' : '#8E2938'}
            strokeWidth="2"
            className="transition-colors duration-300 shadow-lg"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="220"
            cy="220"
            r="28"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
          />

          {/* Geometric J Letterform */}
          <path
            d="M 220 207 A 11 11 0 1 1 209 224 L 209 210"
            stroke="#F7F2F3"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Core Singularity Node */}
          <circle cx="220" cy="220" r="2.5" fill="#D46A79" filter={`url(#${filterId})`} />
        </g>
      </svg>

      {/* HTML Layer for Orbiting Service Cards & Planetary Nodes */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${parallax.x * 6}px, ${parallax.y * 6}px, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {SERVICES_CONFIG.map((s) => {
          const pos = positions[s.id];
          const isHovered = hoveredId === s.id;
          const isDimmed = hoveredId !== null && !isHovered;

          // Convert viewBox 440x440 to percentage for responsive scaling
          const leftPercent = (pos.x / 440) * 100;
          const topPercent = (pos.y / 440) * 100;

          // Position of attached small planet node relative to card
          const nodeOffsetClass =
            s.nodePosition === 'left'
              ? '-left-2 top-1/2 -translate-y-1/2'
              : s.nodePosition === 'right'
              ? '-right-2 top-1/2 -translate-y-1/2'
              : s.nodePosition === 'top'
              ? 'left-1/2 -top-2 -translate-x-1/2'
              : 'left-1/2 -bottom-2 -translate-x-1/2';

          return (
            <div
              key={s.id}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
              tabIndex={0}
              role="button"
              aria-label={`${s.title} - ${s.subtitle}`}
              onFocus={() => setHoveredId(s.id)}
              onBlur={() => setHoveredId(null)}
              className="absolute pointer-events-auto cursor-pointer focus:outline-none"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)',
                opacity: isDimmed ? 0.35 : isRevealed ? 1 : 0,
                transition: 'opacity 0.4s ease, filter 0.3s ease',
              }}
            >
              {/* Outer Card Wrapper */}
              <div
                className={`relative px-3 py-2 rounded-[var(--radius-md)] bg-[#171315]/95 backdrop-blur-md border transition-all duration-300 shadow-lg ${
                  isHovered
                    ? 'border-[#D46A79] bg-[#241E21] scale-105 shadow-[0_0_20px_rgba(212,106,121,0.3)]'
                    : 'border-white/15 hover:border-white/30'
                }`}
              >
                {/* Attached Planetary Node */}
                <div
                  className={`absolute w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${nodeOffsetClass}`}
                  style={{
                    backgroundColor: s.accentColor,
                    boxShadow: isHovered
                      ? '0 0 12px #D46A79, 0 0 4px #FFF'
                      : '0 0 8px rgba(212, 106, 121, 0.6)',
                  }}
                >
                  {/* Inner planet core */}
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                </div>

                {/* Card Title & Subtitle */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#F7F2F3] tracking-wider font-sans leading-none mb-1">
                    {s.title}
                  </span>
                  <span className="text-[7px] sm:text-[7.5px] font-medium text-[#91868A] font-mono leading-none tracking-tight">
                    {s.subtitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
