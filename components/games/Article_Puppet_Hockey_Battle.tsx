import React from 'react';

const PuppetHockeyBattle: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="mb-4">Puppet Hockey Battle</h2>

      <section className="mb-6">
        <h3 className="mb-2">Introduction</h3>
        <p>
          <strong>Puppet Hockey Battle</strong> is an engaging and fast-paced ice hockey game where players control puppet-like characters representing various national teams. Designed for quick matches, each game lasts 60 seconds, offering an exhilarating experience that tests your reflexes and strategic thinking. The game's accessibility across multiple platforms, including web browsers, makes it a popular choice among casual gamers.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2">Gameplay</h3>
        <p>
          Players select their favorite national team and compete in one-on-one matches against AI opponents. The objective is to score more goals than your opponent within the 60-second time limit. The game emphasizes quick decision-making and precise control to outmaneuver the opposing player.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Team Selection:</strong> Choose from a variety of national teams, each represented by unique puppet characters. This selection adds a layer of personalization and national pride to the gameplay.
          </li>
          <li>
            <strong>Match Duration:</strong> Each game lasts 60 seconds. In the event of a tie, some versions offer a 20-second overtime to determine the winner.
          </li>
          <li>
            <strong>Scoring:</strong> Maneuver your puppet to hit the puck into the opponent's goal while defending your own. The player with the most goals at the end of the match wins.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2">Controls</h3>
        <p>
          The game features simple and intuitive controls, making it accessible to players of all ages:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Movement:</strong> Use the left and right arrow keys to move your puppet horizontally across the rink.
          </li>
          <li>
            <strong>Jumping:</strong> Press the up arrow key to make your puppet jump, allowing you to intercept airborne pucks or avoid obstacles.
          </li>
          <li>
            <strong>Shooting:</strong> Press the 'F' key or spacebar to swing your hockey stick and shoot the puck towards the opponent's goal.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2">Game Features</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Quick Matches:</strong> Each game is designed to be a quick 60-second match, perfect for short play sessions.
          </li>
          <li>
            <strong>Multiple Teams:</strong> Choose from 11 different national teams, including Canada, Sweden, and Russia, each with its own unique puppet characters.
          </li>
          <li>
            <strong>Simple Controls:</strong> Easy to learn but challenging to master, the controls are intuitive and responsive.
          </li>
          <li>
            <strong>Cross-Platform Play:</strong> The game works smoothly on computers, tablets, and phones, thanks to its HTML5 design.
          </li>
          <li>
            <strong>Free-to-Play:</strong> No registration or downloads are needed; you can play directly in your web browser.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2">Strategies</h3>
        <p>
          To excel in <strong>Puppet Hockey Battle</strong>, consider the following strategies:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Master the Controls:</strong> Spend time getting comfortable with the movement and shooting mechanics to improve your responsiveness during matches.
          </li>
          <li>
            <strong>Maintain Defensive Positioning:</strong> Always be mindful of your goal's position and be ready to block incoming shots from your opponent.
          </li>
          <li>
            <strong>Capitalize on Opponent's Mistakes:</strong> Watch for openings when your opponent is out of position and take advantage by quickly advancing the puck towards their goal.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2">Conclusion</h3>
        <p>
          <strong>Puppet Hockey Battle</strong> offers a unique blend of fast-paced action and strategic gameplay, making it an enjoyable experience for both casual and competitive players. Its simple controls, quick match times, and cross-platform availability make it a standout choice for fans of sports games.
        </p>
      </section>
    </div>
  );
};

export default PuppetHockeyBattle;
