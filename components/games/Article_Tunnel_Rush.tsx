import React from 'react';
import Image from 'next/image';

const TunnelRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Tunnel Rush: A High-Speed Test of Reflexes</h1>

      <p>
        Tunnel Rush is a thrilling, fast-paced endless runner that plunges you into a dynamic 3D tunnel. With every second, the tunnel speeds up and the obstacles become more intricate, putting your reflexes and coordination to the ultimate test.
      </p>

      <Image src="/assets/images/games/tunnel-rush.webp" alt="Tunnel Rush Cover" width={640} height={480} />

      <h2 className="text-2xl font-semibold">Game Overview</h2>
      <p>
        In Tunnel Rush, you navigate a constantly twisting and turning tunnel filled with various obstacles. The objective is simple yet challenging: steer clear of obstacles for as long as possible while the tunnel’s pace intensifies. The immersive first-person perspective makes you feel as if you're truly racing through a neon-lit, ever-changing environment.
      </p>

      <h2 className="text-2xl font-semibold">Core Gameplay</h2>
      <p>
        The core gameplay of Tunnel Rush is based on endurance and precision. Every collision with an obstacle ends your run, so you must stay alert and react instantly. As you progress, the speed increases, and the obstacles become more varied and unpredictable. Each run is unique due to dynamically generated levels, ensuring that no two games are ever the same.
      </p>

      <h2 className="text-2xl font-semibold">Controls</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Keyboard:</strong> Use the left and right arrow keys or A and D keys to move sideways and dodge obstacles.
        </li>
        <li>
          <strong>Space Bar:</strong> Press to pause or restart the game.
        </li>
        <li>
          <strong>Touch Controls (Mobile):</strong> Tap on the left or right side of the screen to steer accordingly.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>First-Person Immersion:</strong> Experience the rush from a true first-person perspective.
        </li>
        <li>
          <strong>Dynamically Generated Levels:</strong> Every run offers a fresh challenge with randomly generated obstacles.
        </li>
        <li>
          <strong>Increasing Difficulty:</strong> As you progress, the tunnel speeds up and obstacles become more complex.
        </li>
        <li>
          <strong>Multiplayer Mode:</strong> Some versions of Tunnel Rush feature a split-screen two-player mode for competitive fun.
        </li>
        <li>
          <strong>Vibrant Visuals:</strong> The neon graphics and pulsating light effects create an electrifying atmosphere.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Strategies for Success</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Anticipate Obstacles:</strong> Train your reflexes to predict the pattern of upcoming obstacles.
        </li>
        <li>
          <strong>Stay Focused:</strong> Keep your eyes on the tunnel and remain calm, even as the speed increases.
        </li>
        <li>
          <strong>Practice Makes Perfect:</strong> The more you play, the better you will be at recognizing patterns and reacting quickly.
        </li>
        <li>
          <strong>Use Pauses Strategically:</strong> If you feel overwhelmed, use the pause function to regroup and plan your next move.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Watch Tunnel Rush in Action</h2>

      <p>
        Ready to push your limits? Dive into Tunnel Rush and experience a high-speed journey where every second counts. Challenge yourself and see how long you can keep the rush going!
      </p>
    </div>
  );
};

export default TunnelRushPage;
