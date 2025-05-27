import React from 'react';
import Image from 'next/image';

const ClusterRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2>Cluster Rush: A High-Octane Platformer</h2>

      <p>
        Cluster Rush is an exhilarating first-person platformer that challenges players to leap, slide, and cling onto constantly moving trucks. With its fast-paced gameplay, dynamic obstacles, and rhythmic challenges, Cluster Rush delivers an adrenaline-pumping experience that tests your reflexes, precision, and strategic thinking.
      </p>

      <Image src="/assets/images/games/cluster-rush.webp" alt="Cluster Rush Cover" width={640} height={480} />

      <h3>Game Overview</h3>
      <p>
        In Cluster Rush, players navigate through a chaotic environment filled with moving trucks, falling objects, and sudden explosions. The objective is to reach the end of each level without falling off the trucks. As you progress through 35 increasingly difficult levels, the game ramps up the challenge by introducing unpredictable obstacles and complex truck patterns that demand both timing and agility.
      </p>

      <h3>Core Gameplay</h3>
      <p>
        The core of Cluster Rush revolves around quick, rhythmic movement. Players must time their jumps, climbs, and lateral moves to stay on the moving trucks while dodging hazards. Each level is designed to test your ability to adapt rapidly to changes in speed and direction, making every run a thrilling race against time.
      </p>

      <h3>Controls</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Movement:</strong> Use the LEFT and RIGHT arrow keys or A and D keys to move your character laterally.</li>
        <li><strong>Jump:</strong> Press the SPACEBAR or J key to jump. Holding the key allows your character to climb onto the trucks.</li>
      </ul>

      <h3>Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Immersive First-Person Perspective:</strong> Experience the rush of high-speed platforming from a unique first-person view.</li>
        <li><strong>Dynamic Obstacles:</strong> Dodge falling objects, explosive hazards, and uneven terrains that challenge your every move.</li>
        <li><strong>Rhythmic Gameplay:</strong> The game's pace syncs with dynamic music beats, enhancing timing and coordination.</li>
        <li><strong>35 Challenging Levels:</strong> Progress through a series of levels with escalating difficulty to master your skills.</li>
        <li><strong>Innovative Climbing Mechanics:</strong> Utilize the sides of trucks to climb, adding a creative twist to traditional platforming.</li>
      </ul>

      <h3>Strategies for Success</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Master the Controls:</strong> Practice precise timing for jumps and climbs. Familiarity with the controls is key to staying on track.</li>
        <li><strong>Anticipate Obstacles:</strong> Watch for incoming hazards like falling crates or explosive collisions. Learning patterns will improve your reaction time.</li>
        <li><strong>Use Rhythmic Cues:</strong> Let the dynamic soundtrack guide your movements. Syncing your jumps with the beat can help maintain momentum.</li>
        <li><strong>Stay Focused:</strong> With the fast pace of Cluster Rush, a split-second distraction can end your run. Keep your eyes on the path ahead.</li>
      </ul>

      <h3>Visuals and Media</h3>
      <p>
        To truly immerse yourself in the high-octane world of Cluster Rush, watch this gameplay walkthrough:
      </p>

      <p>
        Whether you're a veteran platformer or a newcomer looking for a thrilling challenge, Cluster Rush offers endless excitement and dynamic gameplay that will keep you coming back for more. Get ready to jump into the action and conquer the chaos of moving trucks!
      </p>
    </div>
  );
};

export default ClusterRushPage;
