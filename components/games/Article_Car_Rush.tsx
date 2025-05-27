import React from 'react';
import Image from 'next/image';

const CarRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">Car Rush: An Adrenaline-Fueled Racing Experience</h2>

      <p>
        Car Rush is an exciting high-speed racing game that challenges players to navigate through dynamic tracks while avoiding obstacles and traffic. With simple yet responsive controls, players must use their reflexes and strategic thinking to complete each course before time runs out.
      </p>

      <Image src="/assets/images/games/car-rush.webp" alt="Car Rush Cover" width={640} height={480} />

      <h3 className="text-2xl font-semibold">Game Overview</h3>
      <p>
        In Car Rush, players take control of a sleek racing car and speed down winding roads filled with hazards and competing vehicles. The objective is to reach the finish line as quickly as possible while maintaining control and avoiding crashes. The faster and smoother your race, the higher your score.
      </p>

      <h3 className="text-2xl font-semibold">Core Gameplay</h3>
      <p>
        Car Rush is designed for fast-paced, arcade-style racing. Players must skillfully maneuver their vehicle, weaving through traffic and steering clear of road hazards. Precision and quick decision-making are key to mastering the game.
      </p>

      <h3 className="text-2xl font-semibold">Controls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Arrow Keys / WASD:</strong> Use the up arrow or 'W' key to accelerate, down arrow or 'S' key to brake, and left/right arrow keys or 'A' and 'D' keys to steer.</li>
        <li><strong>Touch Controls:</strong> On mobile devices, tap the gas and brake pedals for acceleration and braking, and use on-screen arrows for steering.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Time-Based Challenges:</strong> Each level has a countdown timer, requiring players to race against time.</li>
        <li><strong>Obstacle Avoidance:</strong> Dodge cars, barriers, and sudden turns to maintain speed and avoid crashes.</li>
        <li><strong>Multiple Tracks:</strong> Experience diverse tracks, each with increasing difficulty and unique road layouts.</li>
        <li><strong>Realistic Speed Dynamics:</strong> Smooth handling and acceleration mechanics make the game feel immersive.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Strategies for Success</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Master the Turns:</strong> Use controlled braking to take sharp corners without losing momentum.</li>
        <li><strong>Stay on the Fast Lane:</strong> Driving efficiently on the optimal path helps maintain top speed.</li>
        <li><strong>Anticipate Traffic:</strong> Plan ahead to weave through traffic smoothly without last-second moves.</li>
        <li><strong>Boost When Possible:</strong> Look for speed zones or boosts to gain an advantage over time.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Watch Gameplay</h3>

      <p>
        Get ready to put your driving skills to the test in Car Rush! Speed through thrilling courses, dodge obstacles, and master the art of high-speed racing. Are you up for the challenge?
      </p>
    </div>
  );
};

export default CarRushPage;
