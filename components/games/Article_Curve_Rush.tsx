import React from 'react';
import Image from 'next/image';
import { YouTubeLazy } from '../YouTubeLazy';

const CurveRushPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Curve Rush: Master the Desert Slopes</h2>
      <p className="mb-6">
        Curve Rush is an exhilarating arcade-style game that challenges players to navigate a rolling ball through endless desert landscapes. Combining speed, precision, and strategy, it offers an engaging experience for those seeking both quick thrills and long-term skill development.
      </p>

      <Image
        src="/assets/images/games/curve-rush.webp"
        alt="Curve Rush Gameplay"
        width={600}
        height={400}
      />

      <h3>Gameplay Overview</h3>
      <p className="mb-6">
        In Curve Rush, players control a small ball racing across dynamic dunes. The primary objective is to maintain momentum by executing well-timed jumps and smooth landings. The higher and more precise the jump, the greater the score. However, a mistimed landing can abruptly end the run, adding an element of risk and reward.
      </p>

      <h3>Controls</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Tap/Click/Space/Up Arrow:</strong> Initiates a jump.</li>
        <li><strong>Hold:</strong> Increases jump height; timing is crucial for optimal landings.</li>
      </ul>

      <h3>Game Features</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Endless Terrain:</strong> Each playthrough presents a unique desert landscape, ensuring varied challenges and endless replayability.</li>
        <li><strong>Customization:</strong> Players can unlock new ball designs and skins using in-game currency collected during runs.</li>
        <li><strong>Achievement System:</strong> Completing specific challenges rewards players with bonuses, encouraging skill development and offering additional objectives.</li>
      </ul>

      <h3>Strategies for Success</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Timing:</strong> Perfectly timed jumps and landings are crucial for maintaining momentum and achieving high scores.</li>
        <li><strong>Speed Management:</strong> Balancing speed and control is essential to navigate the dynamic terrain effectively.</li>
        <li><strong>Adaptability:</strong> Staying focused and adjusting to the ever-changing landscape can significantly enhance performance.</li>
      </ul>

      <h3>Visual and Audio Experience</h3>
      <p className="mb-6">
        Curve Rush offers immersive visuals with stunning desert landscapes and dynamic tracks. The engaging sound effects complement the gameplay, enhancing the overall experience.
      </p>

      <h3>Conclusion</h3>
      <p className="mb-6">
        Curve Rush is a thrilling arcade game that tests precision, speed, and strategy. With its simple yet challenging mechanics, endless replayability, and customization options, it offers an exciting experience for players looking to hone their reflexes and compete for the highest scores.
      </p>

      <div className="flex justify-center mt-8">
        <YouTubeLazy
          videoId="A3f6-m0D0h4"
          title="Curve Rush Gameplay Walkthrough"
          className="w-full h-auto aspect-video"
        />
      </div>
    </div>
  );
};

export default CurveRushPage;
