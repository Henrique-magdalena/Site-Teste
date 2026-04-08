import React from 'react';
import { Composition, Sequence, interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import HomePage from '../pages/HomePage';

export const Walkthrough = () => {
  const frame = useCurrentFrame();

  // Animação de zoom in na página inicial
  const scale = interpolate(frame, [0, 60], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-[#f9f5ff]">
      <Sequence from={0} durationInFrames={120}>
        <AbsoluteFill style={{ transform: `scale(${scale})` }}>
          <HomePage />
        </AbsoluteFill>
      </Sequence>
      
      {/* Texto Overlap Remotion */}
      <Sequence from={30} durationInFrames={90}>
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: 100,
          background: '#0846ed',
          color: 'white',
          padding: '20px',
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '40px',
          borderRadius: '16px',
          opacity: interpolate(frame, [30, 40], [0, 1])
        }}>
          Explorando o Kinetic Streetwear...
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionVideo = () => {
  return (
    <Composition
      id="KineticWalkthrough"
      component={Walkthrough}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
