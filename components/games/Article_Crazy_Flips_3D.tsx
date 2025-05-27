import React from 'react';

const CrazyFlips3DPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h2>Crazy Flips 3D</h2>
        <p>Perform breathtaking flips and stunts in this thrilling acrobatic game.</p>
      </header>

      <section className="mb-12">
        <h3>Game Overview</h3>
        <p className="mb-4">
          Crazy Flips 3D is an exhilarating sports game that challenges players to execute perfect flips, such as frontflips, backflips, and gainer tricks, from high cliffs and other daring heights.
        </p>
        <p>
          Released in July 2021, this game offers a simple yet engaging one-button control scheme, making it accessible for players of all skill levels. The objective is to perform acrobatic feats and land accurately on designated targets to score points.
        </p>
      </section>

      <section className="mb-12">
        <h3>Gameplay Mechanics</h3>
        <p className="mb-4">
          To play, hold down the left mouse button to prepare for a jump. Release it to launch the character into the air, and press again while airborne to perform flips. The timing and angle of your flips are crucial for a successful landing.
        </p>
        <p>
          Each level presents unique challenges, including moving platforms and obstacles. Earning coins and rewards allows players to unlock new characters with special abilities and access additional levels.
        </p>
      </section>

      <section className="mb-12">
        <h3>Game Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Realistic physics simulation for lifelike acrobatic movements.</li>
          <li>Variety of environments and obstacles to keep gameplay fresh.</li>
          <li>Scoring system that rewards precision and skill.</li>
          <li>Unlockable characters with unique abilities and costumes.</li>
          <li>Engaging sound effects and music to enhance the gaming experience.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3>Strategy Tips</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Master the timing of your flips to ensure accurate landings.</li>
          <li>Practice different flip combinations to handle various obstacles.</li>
          <li>Use the environment to your advantage, such as landing on moving platforms.</li>
          <li>Focus on improving your reflexes and spatial awareness.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3>Visuals and Sound</h3>
        <p>
          The game features vibrant 3D graphics that bring each level to life. Smooth animations and dynamic camera angles enhance the acrobatic experience. Coupled with energetic background music and realistic sound effects, Crazy Flips 3D offers an immersive and exciting gameplay experience.
        </p>
      </section>

      <section className="mb-12">
        <h3>Example Gameplay Video</h3>
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/45Tz-IjRcN8"
            title="Crazy Flips 3D Gameplay"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p>© 2025 Crazy Flips 3D. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CrazyFlips3DPage;
