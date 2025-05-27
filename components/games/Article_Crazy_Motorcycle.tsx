import Image from 'next/image';

const CrazyMotorcyclePage = () => (
  <section className="py-16 px-4 mx-auto max-w-screen-lg">
    <h2 className="mb-8">Crazy Motorcycle: A Thrilling 3D Racing Adventure</h2>

    <div className="mb-12 text-center">
      <Image
        src="/assets/images/games/crazy-motorcycle.webp"
        alt="Crazy Motorcycle gameplay"
        width={600}
        height={350}
        className="rounded-lg shadow-lg"
      />
    </div>

    <p className="mb-8">
      <strong>Crazy Motorcycle</strong> is an exhilarating 3D motorcycle racing game that combines the charm of Minecraft-inspired graphics with the excitement of classic 80s arcade gameplay. Developed by AM-Games, this HTML5-based game offers an adrenaline-pumping experience as players navigate through challenging obstacle courses suspended in the sky.
    </p>

    <h3 className="mb-4">Game Overview</h3>
    <p className="mb-8">
      In Crazy Motorcycle, players control Noob, a novice rider on a high-speed motorcycle, aiming to reach the finish line across multiple levels. The game features blocky, Minecraft-like graphics, giving it a unique visual style reminiscent of classic voxel games. Each level presents a series of obstacles such as trees, stone pillars, ice blocks, and moving platforms, requiring precise control and timing to avoid falling or crashing.
    </p>

    <h3 className="mb-4">Gameplay Mechanics</h3>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Objective:</strong> Reach the finish line without falling off the floating race track.</li>
      <li><strong>Obstacles:</strong> Navigate through static and moving obstacles including trees, stones, ice patches, and gaps in the track.</li>
      <li><strong>Checkpoints:</strong> Red flags along the track serve as checkpoints; hitting them turns the flags green and saves your progress, allowing you to restart from these points if you fail.</li>
      <li><strong>Scoring:</strong> Collect red flags to increase your score.</li>
      <li><strong>Course Design:</strong> The race track is not linear; it includes swerving roads and breaks where you must jump over gaps to avoid falling into the abyss below.</li>
    </ul>

    <h3 className="mb-4">Controls</h3>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Movement:</strong> Use the arrow keys or WASD keys to move left, right, forward, and backward.</li>
      <li><strong>Jump:</strong> Press the space bar or the big zero button on-screen (for mobile) to jump over gaps and obstacles.</li>
      <li><strong>Interaction:</strong> Left mouse button to interact with in-game UI elements.</li>
      <li><strong>Sound:</strong> Option to toggle sound on or off for a personalized experience.</li>
    </ul>

    <h3 className="mb-4">Game Features</h3>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Minecraft-Themed Graphics:</strong> The game's visual style is inspired by Minecraft, featuring blocky characters and environments.</li>
      <li><strong>3D Environment:</strong> A three-dimensional race track suspended in the sky adds depth and challenge.</li>
      <li><strong>Skill-Based Racing:</strong> Requires quick reflexes and precise control to avoid falling or crashing.</li>
      <li><strong>Checkpoints:</strong> Multiple checkpoints per level reduce frustration by allowing players to resume from recent progress points.</li>
      <li><strong>Varied Obstacles:</strong> Includes stationary and moving obstacles, slippery ice patches, and wide gaps requiring well-timed jumps.</li>
      <li><strong>Multiple Levels:</strong> Progressively challenging levels that test your skills and timing.</li>
      <li><strong>Adrenaline Rush:</strong> Combines classic 80s arcade gameplay with modern graphics and mechanics for an exciting experience.</li>
    </ul>

    <h3 className="mb-4">Gameplay Strategies</h3>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Smooth Steering:</strong> Avoid abrupt left or right moves to prevent falling off the narrow track edges.</li>
      <li><strong>Timing Your Jumps:</strong> Use jumps strategically to clear wide gaps; more speed and jump height are needed for longer distances.</li>
      <li><strong>Moving Obstacles:</strong> Slow down and move with moving obstacles to maintain balance instead of trying to jump over them.</li>
      <li><strong>Checkpoint Utilization:</strong> Aim to hit checkpoints regularly to save progress and reduce the need to restart entire levels.</li>
      <li><strong>Obstacle Awareness:</strong> Pay attention to the type of obstacle ahead—some require jumping, others require careful navigation around them.</li>
      <li><strong>Practice Levels:</strong> Early levels are designed to help you get familiar with controls and timing; use them to build confidence before tackling harder stages.</li>
    </ul>

    <h3 className="mb-4">Similar Games</h3>
    <p className="mb-8">
      If you enjoy Crazy Motorcycle, you might also like:
    </p>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Moto X3M:</strong> A motorcycle stunt game with daring tracks and tricks.</li>
      <li><strong>Drift Hunters:</strong> A car drifting game focusing on style and finesse.</li>
      <li><strong>Drift Boss:</strong> A timing-based drifting challenge with tricky courses.</li>
    </ul>

    <h3 className="mb-4">Additional Information</h3>
    <ul className="list-disc pl-6 mb-8">
      <li><strong>Release Date:</strong> June 2024</li>
      <li><strong>Platform:</strong> Playable on web browsers for both desktop and mobile devices.</li>
      <li><strong>Developer:</strong> AM-Games</li>
      <li><strong>Last Updated:</strong> October 14, 2024</li>
    </ul>

    <h3 className="mb-4">Visual Preview</h3>
    <div className="mb-12 text-center">
      <Image
        src="https://cdn.crazygames.com/crazy-motorcycle/preview.jpg"
        alt="Crazy Motorcycle gameplay"
        width={600}
        height={350}
        className="rounded-lg shadow-lg"
      />
    </div>

    <p>
      Enjoy the thrill of high-speed motorcycle racing with a Minecraft twist in Crazy Motorcycle. Can you master the tracks and become the ultimate rider?
    </p>
  </section>
);

export default CrazyMotorcyclePage;