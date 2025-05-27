import React from 'react';
import Image from 'next/image';
import { YouTubeLazy } from '../YouTubeLazy';

const BasketBrosPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">Basket Bros: A Fast-Paced Basketball Experience</h2>

      <p>
        Basket Bros is a dynamic, arcade-style basketball game that combines intense on-court action with competitive multiplayer fun. Whether you're playing solo or with friends, this engaging basketball game challenges you to master your shooting, passing, and defensive skills while battling for supremacy on the digital court.
      </p>

      <Image src="/assets/images/games/basket-bros.webp" alt="Basket Bros" width={600} height={400} />

      <h3 className="text-2xl font-semibold">Game Overview</h3>
      <p>
        In Basket Bros, you take part in thrilling two-on-two matches where strategy and teamwork are key. With vibrant, cartoonish graphics and fluid animations, the game creates a playful atmosphere that appeals to both casual gamers and hardcore basketball enthusiasts. From fast break opportunities to nail-biting defense, every match offers a fresh challenge.
      </p>

      <h3 className="text-2xl font-semibold">Core Gameplay</h3>
      <p>
        The primary objective is simple: outscore your opponent by sinking baskets, executing dazzling dunks, and blocking shots. Customizable characters with unique abilities add a layer of personalization and strategy. Choose your player, refine your tactics, and adapt your play style to overcome both AI and human opponents.
      </p>

      <h3 className="text-2xl font-semibold">Controls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Movement:</strong> Use the arrow keys or WASD to navigate your player around the court.</li>
        <li><strong>Jump/Shoot:</strong> Press the up arrow (or W) to jump; a second press at the peak releases your shot.</li>
        <li><strong>Defense:</strong> Use the space bar or Enter key to block shots or steal the ball.</li>
        <li><strong>Special Moves:</strong> Certain keys (like L or G) trigger unique skills or power moves during intense moments.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Multiplayer Modes:</strong> Play locally or online to challenge friends and players around the world.</li>
        <li><strong>Character Customization:</strong> Personalize your baller with a variety of outfits, accessories, and skills.</li>
        <li><strong>Power-Ups:</strong> Collect power-ups during gameplay to boost speed, accuracy, or defensive capabilities.</li>
        <li><strong>Dynamic Courts:</strong> Experience diverse, themed courts that add unique challenges to each match.</li>
        <li><strong>Arcade-Style Action:</strong> Enjoy fast, fluid, and addictive gameplay that keeps every match exciting.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Strategies for Success</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Teamwork:</strong> Communicate and coordinate with your teammate to set up plays and defensive formations.</li>
        <li><strong>Master the Controls:</strong> Practice timing your shots and blocks to improve your overall performance.</li>
        <li><strong>Use Power-Ups Wisely:</strong> Save special boosts for crucial moments when you need an extra edge.</li>
        <li><strong>Adapt Your Strategy:</strong> Study your opponent's play style and adjust your tactics accordingly.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Watch Basket Bros in Action</h3>
      <div className="flex justify-center aspect-video">
        <YouTubeLazy
          videoId="s659q7aKWVQ"
          title="Basket Bros Gameplay Tutorial"
        />
      </div>

      <p>
        Dive into the exciting world of Basket Bros and experience a basketball game like no other. Master your moves, customize your character, and compete in electrifying matches that test your skills and strategy. Whether you're a casual player or a die-hard fan, Basket Bros offers endless entertainment on the court.
      </p>
    </div>
  );
};

export default BasketBrosPage;
