import React from 'react';
import Image from 'next/image';

const CurveBall3DPage: React.FC = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Curve Ball 3D: An In-Depth Look</h1>
          <p className="mt-2 text-lg">
            Dive into the innovative world of Curve Ball 3D – a unique twist on classic paddle games that challenges your reflexes and strategic thinking.
          </p>
        </header>

        <Image src="/assets/images/games/curve-ball-3d.webp" alt="Curve Ball 3D" width={600} height={400} />

        <section>
          <h2 className="text-2xl font-semibold mb-2">Game Overview</h2>
          <p className="leading-relaxed">
            Curve Ball 3D is a captivating arcade game that reimagines the classic Pong formula in a dynamic three-dimensional environment. Players are tasked with controlling a paddle to hit a spinning ball, aiming to outmaneuver their opponent through precise timing and the mastery of spin control. As you progress through increasingly challenging levels, the gameplay evolves with unpredictable ball trajectories and strategic power-ups, ensuring an addictive and ever-changing experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Gameplay Mechanics</h2>
          <p className="leading-relaxed mb-4">
            The primary goal in Curve Ball 3D is to score by getting the ball past your opponent's paddle. Unlike traditional Pong, the 3D perspective means that every hit and spin can alter the ball’s path in unexpected ways. Each match typically involves facing an AI opponent, with victory earned by scoring three goals. As you advance, you’ll encounter tougher opponents and additional challenges, such as obstacles and dynamic power-ups that can modify paddle size or ball speed.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Match Objectives:</strong> Score goals while defending your own.
            </li>
            <li>
              <strong>Progressive Challenges:</strong> Battle through rounds with increasing difficulty.
            </li>
            <li>
              <strong>Power-Ups & Obstacles:</strong> Utilize in-game boosts and avoid obstacles that affect gameplay dynamics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Controls</h2>
          <p className="leading-relaxed mb-4">
            Curve Ball 3D is designed with simplicity in mind. Whether you are playing on a computer or a mobile device, the intuitive controls ensure that both beginners and veterans can pick up the game quickly.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Desktop:</strong> Use the mouse to move your paddle horizontally along the wall. The speed of your movement influences the spin applied to the ball.
            </li>
            <li>
              <strong>Mobile:</strong> Slide your finger across the screen to control the paddle’s position. Touch controls are calibrated for precision and quick responses.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Immersive 3D Environment:</strong> Experience a fully-realized 3D space that adds depth and excitement to every match.
            </li>
            <li>
              <strong>Innovative Ball Spin Mechanics:</strong> Master the art of applying spin. A well-timed swipe can curve the ball in unpredictable ways, throwing off your opponent’s defense.
            </li>
            <li>
              <strong>Dynamic Gameplay:</strong> With progressive AI difficulty and various in-game power-ups, each match is a fresh challenge.
            </li>
            <li>
              <strong>Visual & Audio Effects:</strong> Enjoy sleek 3D graphics paired with engaging soundtracks and effects that enhance the immersive experience.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
          <p className="leading-relaxed mb-4">
            To excel in Curve Ball 3D, players must blend quick reflexes with strategic planning:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Master the Spin:</strong> Experiment with different paddle speeds to create varied spin effects. Learn how each spin alters the ball’s path.
            </li>
            <li>
              <strong>Anticipate and Adapt:</strong> Observe the ball’s trajectory closely and adjust your paddle position accordingly. Early rounds are perfect for honing this skill.
            </li>
            <li>
              <strong>Exploit Power-Ups:</strong> Use available power-ups strategically. A temporary increase in paddle size or ball speed can turn the tide of a match.
            </li>
            <li>
              <strong>Focus on Corners:</strong> Aim for the edges of the goal. Shots directed at the corners are tougher for opponents to block.
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Watch the Gameplay in Action</h2>
          <div className="flex justify-center">
            <iframe
              className="rounded-lg shadow-lg"
              width="700"
              height="500"
              src="https://www.youtube.com/embed/FI-LyeOqlKU"
              title="Curve Ball 3D Gameplay Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default CurveBall3DPage;
