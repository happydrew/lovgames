import React from 'react';
import Image from 'next/image';
import { YouTubeLazy } from '../YouTubeLazy';

const BusRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">Bus Rush: An Endless Running Adventure</h2>

      <p>
        Bus Rush is an exhilarating endless runner that plunges you into a dynamic urban world. Dodge obstacles, collect coins, and unlock new characters while you race through bustling city streets, subways, forests, and even beaches. The game's intuitive swipe controls and vibrant graphics create an immersive experience that appeals to casual and dedicated gamers alike.
      </p>

      <Image src="/assets/images/games/bus-rush.webp" alt="Bus Rush Cover" width={640} height={480} />

      <h3 className="text-2xl font-semibold">Game Overview</h3>
      <p>
        In Bus Rush, you take control of a daring character who must run non-stop through various challenging scenarios. As you navigate crowded streets and intricate environments, your objective is to collect coins, power-ups, and special items that help you advance further. With every run, you'll unlock new characters and upgrades to tailor your experience, making each session unique and adrenaline-pumping.
      </p>

      <h3 className="text-2xl font-semibold">Core Gameplay</h3>
      <p>
        The gameplay of Bus Rush is simple yet captivating. Your character automatically dashes forward, and you must use precise swiping gestures to avoid obstacles such as trucks, buses, barriers, and even gaps in the road. Strategic coin collection and timely use of power-ups, like coin magnets, jetpacks, and super jumps, are key to boosting your score and extending your run.
      </p>

      <h3 className="text-2xl font-semibold">Controls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Swipe Left/Right:</strong> Change lanes to dodge oncoming obstacles.</li>
        <li><strong>Swipe Up:</strong> Jump over obstacles to keep your momentum.</li>
        <li><strong>Swipe Down:</strong> Slide under obstacles and barriers.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Diverse Environments:</strong> Run through multiple scenarios including city streets, subways, forests, and beaches.</li>
        <li><strong>Multiple Characters & Customization:</strong> Unlock and choose from a variety of characters, each with unique abilities and upgrade options.</li>
        <li><strong>Power-ups & Boosters:</strong> Enhance your run with power-ups such as coin magnets, jetpacks, super jumps, and score multipliers.</li>
        <li><strong>Innovative Challenges:</strong> Daily missions, tournaments, and dynamic obstacles keep the gameplay fresh and engaging.</li>
        <li><strong>Intuitive Swipe Controls:</strong> Easy-to-learn mechanics make it accessible to players of all ages.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Strategies for Success</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Master the Controls:</strong> Practice swiping accurately to avoid obstacles and react to sudden changes in the environment.</li>
        <li><strong>Plan Your Route:</strong> Keep an eye on the track and anticipate upcoming obstacles to choose the safest lane.</li>
        <li><strong>Upgrade Power-ups:</strong> Invest coins in enhancing your power-ups to maximize their benefits during your runs.</li>
        <li><strong>Collect Coins:</strong> Prioritize gathering coins to unlock new characters and boost your overall performance.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Visuals and Media</h3>
      <p>
        Experience the thrill of Bus Rush in action with this gameplay walkthrough video:
      </p>
      <div className="flex justify-center aspect-video">
        <YouTubeLazy
          videoId="TtSpcxxqsQ4"
          title="Bus Rush Gameplay Walkthrough"
        />
      </div>

      <p>
        Whether you're looking for a quick adrenaline rush or aiming to beat your high score, Bus Rush offers a challenging and rewarding running adventure that will keep you hooked run after run.
      </p>
    </div>
  );
};

export default BusRushPage;
