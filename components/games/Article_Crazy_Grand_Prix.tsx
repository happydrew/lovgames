import Image from 'next/image';

const CrazyGrandPrixPage = () => (
  <section className="max-w-screen-lg mx-auto px-4 py-12">
    <h2 className="mb-6">Crazy Grand Prix – Comprehensive Game Overview</h2>
    <p className="mb-6">
      Crazy Grand Prix is an exhilarating Formula 1 racing game that immerses players in the high-speed world of professional motorsport. Available to play directly in web browsers on desktop, this game offers multiple modes including career, practice, and multiplayer. Players compete on a variety of challenging tracks, aiming to become the champion by recruiting teammates, upgrading cars, and mastering high-speed racing dynamics.
    </p>

    <h3 className="mb-4">Game Introduction</h3>
    <p className="mb-6">
      In Crazy Grand Prix, you step into the shoes of a professional F1 driver, navigating through meticulously designed circuits that test your skills and reflexes. The game features 3D graphics powered by Unity WebGL technology, delivering smooth and engaging racing environments. You race through multiple circuits, each with unique layouts and demanding hairpin bends, requiring precision and strategy to outpace opponents.
    </p>

    <h3 className="mb-4">Gameplay and Objectives</h3>
    <ul className="list-disc pl-6 mb-6">
      <li><strong>Primary Goal:</strong> Win races by finishing first on the track against AI or other players.</li>
      <li><strong>Game Modes:</strong>
        <ul className="list-inside">
          <li><strong>Career Mode:</strong> Progress through a series of races, earn prize money, and upgrade your car.</li>
          <li><strong>Practice Mode:</strong> Hone your driving skills without competition.</li>
          <li><strong>Multiplayer Mode:</strong> Race against other players online for competitive fun.</li>
        </ul>
      </li>
      <li><strong>Team Management:</strong> Recruit a teammate to assist with race strategy and pit stops.</li>
      <li><strong>Car Upgrades:</strong> Use prize money to improve vehicle performance, including speed, handling, and durability.</li>
      <li><strong>Tracks:</strong> Race on 10 different tracks featuring sharp turns and high-speed straights.</li>
      <li><strong>Speed:</strong> Reach speeds over 200 km/h, demanding quick reflexes and tactical driving.</li>
    </ul>

    <h3 className="mb-4">Controls</h3>
    <ul className="list-disc pl-6 mb-6">
      <li><strong>Accelerate:</strong> W or Up Arrow</li>
      <li><strong>Turn Left:</strong> A or Left Arrow</li>
      <li><strong>Turn Right:</strong> D or Right Arrow</li>
      <li><strong>Brake:</strong> S or Down Arrow</li>
      <li><strong>Look Back:</strong> B key</li>
      <li><strong>Change Camera View:</strong> C key</li>
      <li><strong>Interact with UI:</strong> Left-click</li>
    </ul>

    <h3 className="mb-4">Game Features</h3>
    <ul className="list-disc pl-6 mb-6">
      <li><strong>Realistic Formula 1 Racing Experience:</strong> Simulates the challenges of professional racing with responsive controls and dynamic car physics.</li>
      <li><strong>Multiple Game Modes:</strong> Offers variety through career progression, practice, and multiplayer racing.</li>
      <li><strong>Team and Pit Stop Management:</strong> Adds a strategic layer by allowing you to recruit teammates and manage quick pit stops.</li>
      <li><strong>Car Customization and Upgrades:</strong> Enhance your car's performance by investing prize money earned from races.</li>
      <li><strong>Diverse Tracks:</strong> Race on 10 unique circuits featuring a mix of hairpin bends and fast straights.</li>
      <li><strong>High-Speed Action:</strong> Experience the thrill of racing at speeds exceeding 200 km/h.</li>
      <li><strong>Browser-Based Play:</strong> No installation required; accessible on desktop browsers supporting Unity WebGL.</li>
    </ul>

    <h3 className="mb-4">Gameplay Strategies</h3>
    <ul className="list-disc pl-6 mb-6">
      <li><strong>Master Cornering:</strong> Slow down appropriately before hairpin bends to avoid skidding or crashing.</li>
      <li><strong>Use the Brake Wisely:</strong> Braking early on tight turns helps maintain control and avoid collisions.</li>
      <li><strong>Look Back Often:</strong> Use the look-back feature (B key) to monitor opponents and plan overtakes.</li>
      <li><strong>Optimize Pit Stops:</strong> Efficiently manage pit stops with your teammate to minimize time loss.</li>
      <li><strong>Upgrade Strategically:</strong> Focus on handling and acceleration upgrades to improve lap times.</li>
      <li><strong>Practice Tracks:</strong> Use practice mode to learn track layouts and ideal racing lines.</li>
      <li><strong>Multiplayer Tactics:</strong> In multiplayer, anticipate opponents' moves and use slipstreaming to gain speed advantages.</li>
    </ul>

    <h3 className="mb-4">Visual Preview</h3>
    <div className="mb-8 text-center">
      <Image
        src="/assets/images/games/crazy-grand-prix.webp"
        alt="Crazy Grand Prix Gameplay"
        width={600}
        height={350}
        className="rounded-lg shadow-lg"
      />
    </div>

    <p>
      Enjoy the fast-paced, competitive world of Formula 1 racing with Crazy Grand Prix. Race smart, upgrade wisely, and become the ultimate champion!
    </p>
  </section>
);

export default CrazyGrandPrixPage;
