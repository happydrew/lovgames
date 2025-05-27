import React from 'react';
import { YouTubeLazy } from '../YouTubeLazy';

const CrazyRoll3DPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h2 className="text-center">Crazy Roll 3D - Complete Game Overview</h2>
      </header>

      <section className="mb-8">
        <h3>Game Introduction</h3>
        <p>
          Crazy Roll 3D is an exhilarating endless runner game where players control a ball rolling through a series of
          slanted and sloped platforms. The objective is to navigate the ball as far as possible while avoiding obstacles,
          collecting diamonds, and achieving high scores. The game features vibrant neon-style graphics, catchy music, and
          a variety of unlockable balls with different sizes and speeds, making it visually engaging and replayable.
        </p>
      </section>

      <section className="mb-8">
        <h3>Gameplay and Objectives</h3>
        <ul className="list-disc pl-6">
          <li><strong>Main Objective:</strong> Roll the ball as far as possible without falling off or hitting red obstacles.</li>
          <li><strong>Obstacles:</strong> Avoid static and moving hazards such as red blocks, swinging hammers, narrow bridges, and gaps.</li>
          <li><strong>Power-ups:</strong> Collect shields (to protect from damage), magnets (to attract diamonds), and 2x diamond multipliers placed throughout the track.</li>
          <li><strong>Diamonds:</strong> Collect diamonds to spend in the in-game shop for power-ups and new ball models.</li>
          <li><strong>Levels:</strong> The game is endless but features progressive difficulty, with new obstacles and platform types appearing as you advance.</li>
          <li><strong>Multiplayer Mode:</strong> Play with a friend in the updated 2-player mode for added fun and competition.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Controls</h3>
        <h4>PC Controls</h4>
        <ul className="list-disc pl-6">
          <li><strong>Steer Left/Right:</strong> Press A/D or Left/Right arrow keys.</li>
          <li><strong>Use Power-ups:</strong> Press 1, 2, or 3 keys to activate shield, magnet, or diamond multiplier.</li>
          <li><strong>Adjust Sensitivity:</strong> Available in settings for personalized control.</li>
        </ul>
        <h4>Mobile Controls</h4>
        <ul className="list-disc pl-6">
          <li><strong>Move Ball:</strong> Swipe left or right on the screen.</li>
          <li><strong>Alternative Controls:</strong> Option to switch between swipe and tap controls.</li>
          <li><strong>Adjust Sensitivity:</strong> Available in settings for smooth gameplay.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Game Features</h3>
        <ul className="list-disc pl-6">
          <li><strong>Endless Runner:</strong> Roll endlessly through increasingly difficult and dynamic 3D environments.</li>
          <li><strong>Vibrant Neon Graphics:</strong> Colorful, glowing visuals that change as you progress, enhancing immersion.</li>
          <li><strong>Variety of Balls:</strong> Unlock multiple ball skins like basketballs, soccer balls, and even Earth-themed balls with collected diamonds.</li>
          <li><strong>Power-ups:</strong> Use shields to block damage, magnets to attract diamonds, and diamond multipliers to boost earnings.</li>
          <li><strong>Challenging Obstacles:</strong> Includes moving platforms, wavy surfaces, narrow paths, and swinging hammers requiring quick reflexes.</li>
          <li><strong>2-Player Mode:</strong> Race against a friend on split-screen or shared devices.</li>
          <li><strong>Progressive Difficulty:</strong> Levels become more complex, testing your timing and control skills.</li>
          <li><strong>Catchy Soundtrack:</strong> Upbeat music that complements the fast-paced gameplay.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Gameplay Strategies</h3>
        <ul className="list-disc pl-6">
          <li><strong>Stay Centered:</strong> Keep the ball near the middle of the platforms to reduce the risk of falling.</li>
          <li><strong>Use Power-ups Wisely:</strong> Save shields for later stages with tougher obstacles; activate magnets near diamond clusters.</li>
          <li><strong>Timing Is Key:</strong> Anticipate moving obstacles and time your movements to avoid collisions.</li>
          <li><strong>Practice Control Sensitivity:</strong> Adjust sensitivity settings to find the best balance for your reaction speed.</li>
          <li><strong>Collect Diamonds Efficiently:</strong> Prioritize routes with diamonds but avoid risky paths that might cause a fall.</li>
          <li><strong>Master Jumps and Turns:</strong> Learn the timing for jumps over gaps and sharp turns to maintain momentum.</li>
          <li><strong>Play Multiplayer:</strong> Challenge friends to improve reflexes and learn new strategies from competition.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Visual Preview</h3>
        <img
          src="/assets/images/games/crazy-roll-3d.webp"
          alt="Crazy Roll 3D Gameplay"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <p className="text-center mt-4">
          Screenshot showing the neon-lit platforms and rolling ball navigating obstacles.
        </p>
      </section>

      <section className="mb-8">
        <h3>Video Walkthrough</h3>
        <div className="relative pb-[56.25%] mb-4">
          <YouTubeLazy
            videoId="8620zAsVHzs"
            title="Crazy Roll 3D Gameplay Walkthrough"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <p className="text-center">
          Watch this gameplay walkthrough to see controls, power-ups, and advanced level navigation in Crazy Roll 3D.
        </p>
      </section>

      <section className="mt-8">
        <h3>Additional Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>Release Date:</strong> February 2019</li>
          <li><strong>Last Updated:</strong> November 24, 2023 (added 2-player mode, new balls, and mobile support)</li>
          <li><strong>Platform:</strong> Playable on web browsers (PC and mobile)</li>
          <li><strong>Developer:</strong> AM-Games</li>
          <li><strong>Game Genre:</strong> Endless runner, arcade, skill-based</li>
        </ul>
      </section>

      <section className="mt-8">
        <p>
          Enjoy the thrilling, colorful, and challenging world of Crazy Roll 3D — test your reflexes, collect diamonds, and roll endlessly to beat your high score!
        </p>
      </section>
    </div>
  );
};

export default CrazyRoll3DPage;
