import React from 'react';
import Image from 'next/image';

const JetRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Jet Rush: An Arcade-Style Aerial Adventure</h1>

      <p>
        Jet Rush is a high-octane arcade-style game that puts you in the pilot’s seat of a state-of-the-art jet. In this fast-paced aerial adventure, your mission is to navigate through treacherous courses packed with moving platforms, narrow passages, and unexpected twists—all while collecting coins and power-ups to upgrade your jet. With its intuitive controls and adrenaline-fueled gameplay, Jet Rush offers both casual fun and challenging precision for veteran gamers.
      </p>

      <Image src="/assets/images/games/jet-rush.webp" alt="Jet Rush Cover" width={640} height={480} />

      <h2 className="text-2xl font-semibold">Game Overview</h2>
      <p>
        In Jet Rush, you automatically speed through a series of challenging courses that test your reflexes and strategic planning. The game combines classic arcade thrills with modern upgrade systems, allowing you to customize your jet with improved speed, handling, and special abilities. Each run is an opportunity to set a new high score, unlock advanced jet models, and compete against your own best performance.
      </p>

      <h2 className="text-2xl font-semibold">Core Gameplay</h2>
      <p>
        The primary objective in Jet Rush is to fly as far as possible without crashing. As your jet races forward, you must deftly steer around obstacles and hazardous terrain. Collect coins scattered along the route to unlock upgrades and new jet models. The game’s fast-paced dynamics require you to maintain precision, adapt to sudden course changes, and use power-ups strategically to boost your performance.
      </p>

      <h2 className="text-2xl font-semibold">Controls</h2>
      <p>
        Jet Rush is designed with simplicity in mind so that players can jump right into the action:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Steering:</strong> Use the A/D keys or the left/right arrow keys to control your jet’s direction.
        </li>
        <li>
          <strong>Action/Confirmation:</strong> Press the space bar to confirm selections or trigger special maneuvers.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Fast-Paced Action:</strong> Experience the thrill of high-speed jet flying with rapid reflex challenges.
        </li>
        <li>
          <strong>Challenging Courses:</strong> Navigate through intricately designed levels featuring moving platforms, tight turns, and dynamic obstacles.
        </li>
        <li>
          <strong>Collectibles and Upgrades:</strong> Gather coins and power-ups to unlock new jets, enhance your jet’s performance, and customize its appearance.
        </li>
        <li>
          <strong>High Score Tracking:</strong> Compete against your previous records and climb the leaderboard with every daring flight.
        </li>
        <li>
          <strong>Innovative Bonus Modes:</strong> Encounter special challenge rounds, such as wind gust events and precision flight challenges, that add extra layers of excitement and reward skillful play.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Strategies for Success</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Smooth Steering:</strong> Practice gradual, controlled movements to navigate sharp turns and avoid obstacles.
        </li>
        <li>
          <strong>Anticipation:</strong> Keep an eye ahead on the course to predict sudden changes and obstacles, allowing you to adjust your flight path in advance.
        </li>
        <li>
          <strong>Maximize Coin Collection:</strong> Plan your route to pass through coin clusters, which are essential for upgrading your jet and extending your flight.
        </li>
        <li>
          <strong>Upgrade Wisely:</strong> Invest your coins in upgrades that best suit your playstyle—whether it’s improving speed, maneuverability, or special abilities.
        </li>
        <li>
          <strong>Embrace Bonus Challenges:</strong> Take advantage of special modes that temporarily boost your abilities or offer extra rewards, turning each run into a unique challenge.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Visuals and Media</h2>
      <p>
        To get a taste of the high-flying action, check out this gameplay video that showcases the dynamic environments and fast-paced challenges of Jet Rush:
      </p>

      <p>
        Get ready to push your limits and soar through breathtaking aerial courses in Jet Rush. Whether you're chasing a new high score or simply enjoying the thrill of the flight, every run is an opportunity to prove your mastery in this arcade-style adventure.
      </p>
    </div>
  );
};

export default JetRushPage;
