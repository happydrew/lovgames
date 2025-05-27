import Head from 'next/head';
import Image from 'next/image';

const SurvivalRushPage = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Survival Rush: The Ultimate Multiplayer Survival Experience</h1>
          <p className="text-lg mb-4">
            Welcome to <strong>Survival Rush</strong>, a fast-paced multiplayer survival action game that pushes your strategic thinking, reflexes, and survival instincts to the limit. Step into a world where every round introduces unique challenges and ever-changing mini-games that keep you on your toes.
          </p>

          <Image src="/assets/images/games/survival-rush.webp" alt="Survival Rush Gameplay" width={640} height={480} />

          <p className="text-lg">
            Whether you’re teaming up with friends or battling against new rivals, each session in <strong>Survival Rush</strong> guarantees an electrifying blend of strategy, skill, and sheer adrenaline. The game’s innovative design creates an immersive experience that stands out in the competitive online gaming scene.
          </p>
        </section>

        {/* How to Play */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Play Survival Rush</h2>
          <p className="mb-4">
            The gameplay in <strong>Survival Rush</strong> is designed to challenge every aspect of your survival instincts. Here’s what to expect:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Room Entry:</strong> Enter a room by typing a known room name or get matched into a random adventure. Every room offers a different challenge, making each game session unique.
            </li>
            <li>
              <strong>Mini-Games:</strong> Engage in a variety of mini-games—from evading a towering doll in a deadly game of red light/green light to navigating unstable, floating platforms where every step counts.
            </li>
            <li>
              <strong>Chase & Combat:</strong> Experience high-stakes chases where relentless pursuers force you to think quickly. Use power-ups and even a baseball bat to fight back and stay alive.
            </li>
          </ul>
          <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden mb-4">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Survival Rush Gameplay Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-lg">
            With each round, <strong>Survival Rush</strong> evolves to present new scenarios and challenges, ensuring that no two games are ever the same.
          </p>
        </section>

        {/* Controls & Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Game Controls & Strategies</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Controls</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Right-click / F:</strong> Use a power-up to turn the tide in your favor.
              </li>
              <li>
                <strong>T:</strong> Dance and celebrate your victories.
              </li>
              <li>
                <strong>WASD / Arrow Keys:</strong> Navigate your character swiftly across challenging terrains.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tips & Strategies</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Stay Alert:</strong> Every room is unpredictable—always keep an eye on your surroundings.
              </li>
              <li>
                <strong>Plan Your Moves:</strong> Study the environment before making a move. Some platforms are traps, while others are safe havens.
              </li>
              <li>
                <strong>Team Up:</strong> Coordination with friends can turn the tide in high-risk rounds.
              </li>
              <li>
                <strong>Adapt & Innovate:</strong> Use creative strategies and learn from each round. The game rewards quick adaptability and innovative thinking.
              </li>
            </ul>
            <p className="mt-4">
              The key to success in <strong>Survival Rush</strong> is mastering the balance between aggressive tactics and cautious play. Every decision counts in this relentless battle for survival.
            </p>
          </div>
        </section>

        {/* Why Choose Survival Rush */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Survival Rush?</h2>
          <p className="text-lg mb-4">
            <strong>Survival Rush</strong> stands out as a premier multiplayer survival game by combining classic survival mechanics with innovative mini-games and dynamic challenges. Its modern design, intuitive controls, and continuous gameplay updates offer an experience that is both engaging and refreshingly unpredictable.
          </p>
          <p className="text-lg">
            Dive into a game where strategy meets innovation, and every round offers a fresh challenge. Whether you're a seasoned gamer or new to the world of survival action games, <strong>Survival Rush</strong> provides an adventure you won’t forget.
          </p>
        </section>
      </div>
    </>
  );
};

export default SurvivalRushPage;
