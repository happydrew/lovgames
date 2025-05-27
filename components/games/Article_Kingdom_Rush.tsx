import React from 'react';
import Image from 'next/image';

const KingdomRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg !text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Kingdom Rush</h1>
      <p className=" mb-6">
        Kingdom Rush is a renowned tower defense game developed by Ironhide Game Studio, first released in 2011. Set in a medieval fantasy world, players assume the role of a general tasked with defending the kingdom of Linirea from waves of invading forces, including orcs, trolls, and dark wizards.
      </p>

      <Image src="/assets/images/games/kingdom-rush.webp" alt="Kingdom Rush Gameplay" width={640} height={480} />

      <h2 className="text-2xl font-semibold mb-3">Gameplay Overview</h2>
      <p className=" mb-6">
        The game consists of various levels, each featuring predetermined paths that enemies traverse. Players strategically place different types of towers along these paths to prevent enemies from reaching the end. Successfully defeating enemies grants gold, which can be used to build new towers or upgrade existing ones.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Tower Types</h2>
      <ul className="list-disc list-inside  mb-6">
        <li><strong>Archer Towers:</strong> Fast-firing towers effective against flying and fast-moving enemies.</li>
        <li><strong>Mage Towers:</strong> Deal high damage and can penetrate armored enemies.</li>
        <li><strong>Artillery Towers:</strong> Cause area damage, ideal for groups of clustered enemies.</li>
        <li><strong>Barracks:</strong> Deploy soldiers to engage enemies directly, slowing their advance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Controls</h2>
      <p className=" mb-6">
        On the PC version, players primarily use the mouse to interact with the game. Keyboard shortcuts enhance gameplay efficiency:
      </p>
      <ul className="list-disc list-inside  mb-6">
        <li><strong>1:</strong> Activate Rain of Fire ability.</li>
        <li><strong>2:</strong> Deploy Reinforcements.</li>
        <li><strong>Spacebar:</strong> Select and center the hero unit.</li>
        <li><strong>W:</strong> Call the next enemy wave early.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Game Features</h2>
      <ul className="list-disc list-inside  mb-6">
        <li><strong>Engaging Campaign:</strong> Experience a rich storyline with diverse levels and challenges.</li>
        <li><strong>Hero Units:</strong> Command powerful heroes with unique abilities to turn the tide of battle.</li>
        <li><strong>Upgradable Towers:</strong> Enhance towers with specialized upgrades to suit various strategies.</li>
        <li><strong>Special Abilities:</strong> Utilize game-changing abilities like Rain of Fire and Reinforcements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Strategic Tips</h2>
      <ul className="list-disc list-inside  mb-6">
        <li><strong>Chokepoints:</strong> Identify natural chokepoints on the map to maximize tower effectiveness.</li>
        <li><strong>Balanced Tower Placement:</strong> Combine different tower types to handle various enemy classes effectively.</li>
        <li><strong>Early Upgrades:</strong> Prioritize upgrading existing towers over building new ones for increased efficiency.</li>
        <li><strong>Hero Positioning:</strong> Strategically move heroes to support weak points and counter strong enemies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Platforms</h2>
      <p className=" mb-6">
        Kingdom Rush is available on multiple platforms, including web browsers, Android, iOS, Steam, Nintendo Switch, and Xbox.
      </p>

      <div className="flex justify-center mb-6">
        <iframe
          className="w-full max-w-2xl h-64 sm:h-96"
          src="https://www.youtube.com/embed/q8QKFeNHXeA"
          title="Kingdom Rush Review"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className=" text-center">
        Immerse yourself in the captivating world of Kingdom Rush and test your strategic prowess against relentless waves of enemies. Are you ready to defend your kingdom?
      </p>
    </div>
  );
};

export default KingdomRushPage;
