import React from 'react';
import Image from 'next/image';

const RhinoRushStampedePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Rhino Rush Stampede: A Wild Endless Runner Adventure
      </h1>

      <p>
        Rhino Rush Stampede is an exhilarating endless runner game where you control a speedy blue rhino through vibrant jungle landscapes. Race against time, collect delicious fruit, and smash through obstacles to keep your stampede alive!
      </p>

      <Image src="/assets/images/games/rhino-rush-stampede.webp" alt="Rhino Rush Stampede Cover" width={640} height={480} />

      <h2 className="text-2xl font-semibold">Game Overview</h2>
      <p>
        In Rhino Rush Stampede, you guide a dynamic blue rhino through an ever-changing jungle teeming with challenges. Your mission is to run as far as possible, gather fruit to boost your score, and trade them for exciting upgrades at the Shaman's store. With every run, experience fresh challenges as the pace quickens and obstacles become trickier, making each adventure uniquely thrilling.
      </p>

      <h2 className="text-2xl font-semibold">Core Gameplay</h2>
      <p>
        The game combines fast-paced action with strategic upgrades. As you dash through the jungle, you'll need to jump over chasms, dodge dangerous obstacles, and charge through barriers using well-timed dashes. Collect fruits like bananas, apples, and berries to accumulate points and unlock power-ups that help you overcome tougher challenges.
      </p>

      <h2 className="text-2xl font-semibold">Controls</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Jump:</strong> Press the Up arrow key or W to leap over obstacles.
        </li>
        <li>
          <strong>Dash:</strong> Press the Down arrow key, S, or Space to charge through barriers and enemies.
        </li>
        <li>
          <strong>Additional Movements:</strong> Use directional keys to navigate special sequences when controlling vehicles or sidekicks.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Addictive Gameplay:</strong> Experience fast-paced action that challenges your reflexes and strategic planning.
        </li>
        <li>
          <strong>Vibrant Graphics:</strong> Enjoy colorful, cartoonish visuals that bring the jungle to life.
        </li>
        <li>
          <strong>Power-Ups and Upgrades:</strong> Unlock exciting temporary buffs and permanent upgrades like fun gadgets, vehicles, and even silly hats to customize your rhino.
        </li>
        <li>
          <strong>Dynamic Obstacles:</strong> Encounter a variety of hurdles—from wooden crates to thorny traps—that keep each run fresh and unpredictable.
        </li>
        <li>
          <strong>Multiplatform Play:</strong> Enjoy a seamless gaming experience on desktop, mobile, and tablet devices.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Strategies for Success</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Maximize Fruit Collection:</strong> Prioritize gathering as many fruits as possible to boost your score and unlock valuable upgrades.
        </li>
        <li>
          <strong>Perfect Your Timing:</strong> Master the art of jumping and dashing. Perfect timing helps you avoid obstacles and chain combos for higher scores.
        </li>
        <li>
          <strong>Upgrade Wisely:</strong> Invest your collected fruit at the Shaman’s store to enhance your speed, power, and overall performance.
        </li>
        <li>
          <strong>Stay Alert:</strong> Keep a keen eye on your surroundings. Quick reflexes are crucial as obstacles and power-ups appear unexpectedly.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Visuals and Media</h2>
      <p>
        Check out this gameplay trailer to dive into the vibrant world of Rhino Rush Stampede:
      </p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5TpSanBYrtU"
          title="Rhino Rush Stampede Gameplay Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Embark on your wild adventure today and experience the thrill of Rhino Rush Stampede—where every run is a new chance to set a record and unlock epic upgrades!
      </p>
    </div>
  );
};

export default RhinoRushStampedePage;
