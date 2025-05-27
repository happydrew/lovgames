import React from 'react';
import Image from 'next/image';

const CurveballPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Curveball: A Comprehensive Overview</h1>

      <p>
        Curveball is an engaging 3D arcade game that combines elements of classic Pong with modern mechanics, offering players a dynamic and strategic gaming experience. In this game, players control a paddle to hit a ball across a virtual court, aiming to score by getting the ball past their opponent. The unique twist lies in the ability to apply spin to the ball, causing it to curve and making it challenging for opponents to predict its trajectory.
      </p>

      <Image src="/assets/images/games/curveball.webp" alt="Curveball Cover" width={640} height={480} />

      <h2 className="text-2xl font-semibold">Gameplay</h2>
      <p>
        The primary objective in Curveball is to outscore your opponent by maneuvering the ball past their paddle while defending your own goal. Matches are typically played against AI opponents, each increasing in difficulty as you progress through levels. The game demands quick reflexes, strategic shot placement, and the effective use of spin to outwit opponents.
      </p>

      <h2 className="text-2xl font-semibold">Controls</h2>
      <p>
        Players control their paddle using a mouse or touchpad. Moving the paddle to intercept and hit the ball is straightforward, but mastering the application of spin requires precise and swift movements. The faster the paddle moves upon contact with the ball, the more pronounced the curve, allowing for deceptive and strategic shots.
      </p>

      <h2 className="text-2xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>3D Perspective:</strong> Unlike traditional paddle games, Curveball offers a three-dimensional playing field, adding depth and complexity to the gameplay.
        </li>
        <li>
          <strong>Spin Mechanics:</strong> Players can apply spin to the ball by moving the paddle swiftly during contact, creating curved trajectories that challenge opponents' reactions.
        </li>
        <li>
          <strong>Progressive Difficulty:</strong> The game features multiple levels with increasing difficulty, requiring players to continually adapt and refine their strategies.
        </li>
        <li>
          <strong>Multiplayer Mode:</strong> Some versions of Curveball offer online multiplayer options, allowing players to compete against others worldwide.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Strategies for Success</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Anticipate Ball Trajectory:</strong> Predicting where the ball will go after each bounce is crucial. Understanding angles and spin effects will enhance your defensive and offensive plays.
        </li>
        <li>
          <strong>Master Spin Application:</strong> Utilizing spin effectively can deceive opponents and create scoring opportunities. Experiment with different paddle movements to control the ball's curve.
        </li>
        <li>
          <strong>Target Opponent's Weaknesses:</strong> Observe your opponent's reactions and aim for areas they struggle to defend, such as the corners or edges of the court.
        </li>
        <li>
          <strong>Maintain Composure Under Pressure:</strong> As the game speeds up in higher levels, staying calm and focused will help you react swiftly and make strategic decisions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Visuals and Media</h2>
      <p>
        To get a better understanding of Curveball's gameplay and mechanics, here's a gameplay video showcasing its dynamic action:
      </p>
      <div className="flex justify-center">
        <iframe
          width="700"
          height="500"
          src="https://www.youtube.com/embed/FI-LyeOqlKU"
          title="Curve Ball 3D Gameplay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Experience the thrill and challenge of Curveball by playing it directly on our website. Sharpen your reflexes, develop strategic prowess, and see if you can master the curve!
      </p>
    </div>
  );
};

export default CurveballPage;
