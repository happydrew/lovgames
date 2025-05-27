import React from 'react';
import Image from 'next/image';

const FootballBrosPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-center">Football Bros: An Action-Packed Football Experience</h2>

      <p>
        Football Bros is an adrenaline-fueled multiplayer football game that merges classic football mechanics with arcade-style power-ups, delivering a unique blend of strategy, chaos, and fast-paced action. Whether you play solo or team up with friends, this football game offers an immersive experience that keeps you on the edge of your seat.
      </p>

      <Image src="/assets/images/games/football-bros.webp" alt="Football Bros" width={600} height={400} />

      <h3>Game Overview</h3>
      <p>
        In Football Bros, you can choose between Quick Play for instant, exciting matches or Franchise Mode for a deeper, team-management experience as you aim for the Super Bro Bowl Championship. The game supports both online and local multiplayer options, making it easy to challenge friends or compete against players from around the globe.
      </p>

      <h3>Core Gameplay</h3>
      <p>
        The objective is to outscore your opponents by mastering passing, shooting, and tackling within a set time limit. Each match is a test of your strategic play and quick reflexes. With various characters at your disposal—each boasting unique strengths and special moves—Football Bros lets you customize your play style to dominate on the field.
      </p>

      <h3>Controls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Movement:</strong> Use the arrow keys or WASD to navigate your player across the field.
        </li>
        <li>
          <strong>Passing:</strong> Press a designated button to pass the ball to teammates.
        </li>
        <li>
          <strong>Shooting:</strong> Hit the shoot button to fire the ball towards the goal.
        </li>
        <li>
          <strong>Tackling:</strong> Use a tackle button to steal the ball or disrupt opponents.
        </li>
      </ul>

      <h3>Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Multiplayer Modes:</strong> Engage in thrilling 1v1 matches or join global multiplayer games.
        </li>
        <li>
          <strong>Arcade Power-Ups:</strong> Use speed boosts, super shots, and defensive shields to gain an edge.
        </li>
        <li>
          <strong>Character Customization:</strong> Personalize your football players and teams with various outfits and upgrades.
        </li>
        <li>
          <strong>Accessible Controls:</strong> Intuitive controls on both desktop and mobile platforms make gameplay easy to learn.
        </li>
      </ul>

      <h3>Strategies for Success</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Master the Basics:</strong> Focus on passing, shooting, and tackling to build a solid foundation.
        </li>
        <li>
          <strong>Study Opponents:</strong> Observe your rivals' play styles and adjust your tactics to exploit their weaknesses.
        </li>
        <li>
          <strong>Utilize Team Synergy:</strong> Coordinate with teammates to set up plays and create scoring opportunities.
        </li>
        <li>
          <strong>Manage Power-Ups:</strong> Save special abilities for critical moments to turn the tide of the match.
        </li>
        <li>
          <strong>Stay Calm Under Pressure:</strong> Maintain composure during intense moments for better decision-making.
        </li>
      </ul>

      <h3>Pro Tips & Additional Strategies</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Save Special Moves:</strong> Use speed boosts and defensive shields at game-changing moments.
        </li>
        <li>
          <strong>Fake and Diversify:</strong> Use fake passes and unpredictable moves to keep your opponents guessing.
        </li>
        <li>
          <strong>Exploit the Sidelines:</strong> Take advantage of open spaces on the field for quick counter-attacks.
        </li>
        <li>
          <strong>Dodge and Counter:</strong> Learn to evade incoming tackles and swiftly launch counter-attacks.
        </li>
      </ul>

      <h3>Watch Football Bros in Action</h3>

      <p>
        Ready to hit the field? Jump into Football Bros and experience the perfect blend of strategy and arcade football action. Customize your team, master your moves, and outsmart your opponents for a chance at the Super Bro Bowl Championship!
      </p>
    </div>
  );
};

export default FootballBrosPage;
