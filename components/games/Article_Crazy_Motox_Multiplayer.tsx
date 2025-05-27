import { FC } from 'react';

type CrazyMotoXMultiplayerProps = {
  description: string;
};

const CrazyMotoXMultiplayer: FC<CrazyMotoXMultiplayerProps> = ({ description }) => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="mb-4">Crazy MotoX Multiplayer - Complete Game Overview</h2>
    <p className="mb-6">{description}</p>

    <h3 className="mt-8 mb-4">Game Introduction</h3>
    <p className="mb-4">
      Crazy MotoX Multiplayer is a fast-paced 2D motocross racing game that challenges players to race against others on ever-changing, dynamic tracks. The game emphasizes reflexes, precision, and competitive spirit as you navigate wild terrain and obstacles in real-time.
    </p>
    <p className="mb-4">
      Each day brings a brand-new course, so sharpen your skills and aim for the top of the leaderboard with every daring run.
    </p>

    <h3 className="mt-8 mb-4">Gameplay and Objectives</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Race against players in real-time multiplayer mode.</li>
      <li>Master new tracks every day to stay competitive.</li>
      <li>Earn in-game currency to unlock custom helmets, bike skins, wheels, and exhaust smoke effects.</li>
      <li>Climb the daily leaderboard to showcase your skills.</li>
    </ul>

    <h3 className="mt-8 mb-4">Controls</h3>
    <p className="mb-4">Use touch controls on mobile devices or the following keyboard keys on desktop:</p>
    <ul className="list-disc pl-6 mb-4">
      <li>W or Up Arrow: Accelerate</li>
      <li>S or Down Arrow: Brake/Reverse</li>
      <li>A or Left Arrow: Move Left</li>
      <li>D or Right Arrow: Move Right</li>
    </ul>

    <h3 className="mt-8 mb-4">Game Features</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Fast-paced 2D motocross racing action.</li>
      <li>Real-time multiplayer mode for competitive play.</li>
      <li>Daily rotating tracks to keep gameplay fresh and challenging.</li>
      <li>Customization options to personalize your rider and bike.</li>
      <li>Leaderboard system to track and compare your performance.</li>
    </ul>

    <h3 className="mt-8 mb-4">Gameplay Strategies</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Learn each track quickly to anticipate obstacles and plan your route.</li>
      <li>Balance speed and control to navigate tricky terrain effectively.</li>
      <li>Use jumps strategically to maintain momentum and avoid crashes.</li>
      <li>Observe other players to learn new techniques and improve your skills.</li>
    </ul>

    <h3 className="mt-8 mb-4">Visual Preview</h3>
    <img
      src="https://i.ytimg.com/vi/28O_dDgJNxU/maxresdefault.jpg"
      alt="Crazy MotoX Multiplayer Gameplay"
      className="w-full h-auto mb-4"
    />
    <p className="mb-8">Screenshot showcasing dynamic 2D motocross racing action in Crazy MotoX Multiplayer.</p>

    <h3 className="mt-8 mb-4">Video Walkthrough</h3>
    <div className="flex justify-center mb-8 w-full aspect-video">
      <iframe
        src="https://www.youtube.com/embed/28O_dDgJNxU"
        title="Crazy MotoX Multiplayer Gameplay Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-auto"
      ></iframe>
    </div>
    <p className="mb-8">Click to watch a gameplay video demonstrating racing techniques, bike customization, and multiplayer action.</p>

    <h3 className="mt-8 mb-4">Additional Information</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Release Date: April 2025</li>
      <li>Platform: Browser-based (desktop, mobile, tablet) using HTML5</li>
      <li>Rating: 8.7/10 (based on 1,337 votes)</li>
      <li>Developer: LastHeroesGameplays</li>
      <li>Last Updated: April 2025</li>
    </ul>

    <p className="mb-8">
      Experience the thrill of motocross racing with Crazy MotoX Multiplayer — sharpen your skills, customize your bike, and race against the best riders worldwide!
    </p>
  </div>
);

export default CrazyMotoXMultiplayer;
