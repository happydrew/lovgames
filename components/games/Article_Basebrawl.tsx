import Image from "next/image";

const BaseBrawlIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome to BaseBrawl
      </h2>
      <div className="flex justify-center mb-6">
        <Image
          src="/assets/images/games/basebrawl.webp"
          alt="BaseBrawl Logo"
          width={300}
          height={150}
        />
      </div>
      <p className="text-center mb-4">
        <strong>BaseBrawl</strong> is an exhilarating game that masterfully
        blends the classic sport of baseball with high-octane combat elements.
      </p>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Game Overview</h3>
        <p>
          Teams compete in matches that intertwine baseball mechanics with
          combat strategies. Beyond scoring runs, players must defend bases and
          outmaneuver opponents using a mix of athletic prowess and tactical
          combat skills.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Gameplay Mechanics</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Objective:</strong> Score more runs while defending your base.</li>
          <li><strong>Teams:</strong> Players have specialized roles.</li>
          <li><strong>Match Phases:</strong> Batting, fielding, and combat.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Controls and Operations</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Movement:</strong> WASD keys to move.</li>
          <li><strong>Batting/Attacking:</strong> Left-click for actions.</li>
          <li><strong>Special Abilities:</strong> Spacebar to activate skills.</li>
          <li><strong>Dodge/Sprint:</strong> Shift key for evasive maneuvers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Unique Features</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Character customization and skill enhancement.</li>
          <li>Dynamic arenas with interactive elements.</li>
          <li>Power-ups for strategic advantages.</li>
          <li>Multiplayer modes for online and local play.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Strategies for Success</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Coordinate with teammates for balanced tactics.</li>
          <li>Adapt to different arenas for maximum advantage.</li>
          <li>Manage power-ups wisely to counter opponents.</li>
        </ul>
      </section>
    </div>
  );
};

export default BaseBrawlIntro;
