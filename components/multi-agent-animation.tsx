'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function MultiAgentAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  // Nodes simulating different agents
  const nodes = [
    { id: 1, x: "10%", y: "25%", r: 4 }, // Planner
    { id: 2, x: "85%", y: "15%", r: 5 }, // DevOps
    { id: 3, x: "40%", y: "50%", r: 8 }, // Central Orchestrator / CEO
    { id: 4, x: "75%", y: "75%", r: 6 }, // Commerce
    { id: 5, x: "20%", y: "80%", r: 5 }, // Content
    { id: 6, x: "45%", y: "15%", r: 4 }, // Research
    { id: 7, x: "65%", y: "85%", r: 4 }, // Security
    { id: 8, x: "15%", y: "55%", r: 3 }, // Auditor
    { id: 9, x: "90%", y: "45%", r: 3 }, // SEO
  ];

  // Connections showing interaction
  const connections = [
    [1, 3], [2, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], // Hub connections
    [1, 6], [2, 6], [4, 7], [5, 8], [2, 9], [4, 9], [1, 5], [4, 2] // Cross connections
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connections / Paths */}
        {connections.map(([source, target], i) => {
          const s = nodes.find(n => n.id === source)!;
          const t = nodes.find(n => n.id === target)!;
          return (
            <motion.line
              key={`line-${i}`}
              x1={s.x}
              y1={s.y}
              x2={t.x}
              y2={t.y}
              stroke="url(#pulse-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Nodes / Agents */}
        {nodes.map((node, i) => (
          <g key={`node-group-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#34d399"
              filter="url(#glow)"
              animate={{
                r: [node.r, node.r * 1.5, node.r],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 2 + (i % 2),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
            {/* Core dot */}
            <circle cx={node.x} cy={node.y} r={node.r / 2} fill="#ffffff" opacity="0.9" />
          </g>
        ))}

        {/* Floating Data Packets */}
        {connections.map(([source, target], i) => {
          if (i % 2 !== 0) return null; // Only show on half the lines
          const s = nodes.find(n => n.id === source)!;
          const t = nodes.find(n => n.id === target)!;
          return (
             <motion.circle
               key={`packet-${i}`}
               r={2}
               fill="#6ee7b7"
               filter="url(#glow)"
               initial={{ cx: s.x, cy: s.y, opacity: 0 }}
               animate={{ cx: [s.x, t.x], cy: [s.y, t.y], opacity: [0, 1, 0] }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 delay: i * 0.5,
                 ease: "linear"
               }}
             />
          );
        })}
      </svg>
    </div>
  );
}
