import React from 'react';
import { YouTubeLazy } from '../YouTubeLazy';

const CrazyStuntCarsMultiplayerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h2>Crazy Stunt Cars Multiplayer</h2>
        <p className="mt-2">Unleash your inner stunt driver in this high-octane multiplayer driving game.</p>
      </header>

      <section className="mb-8">
        <h3>Game Overview</h3>
        <p className="mt-4">
          Crazy Stunt Cars Multiplayer is an exhilarating online multiplayer car driving game that lets you race, drift, and perform jaw-dropping stunts across vast open maps filled with ramps, loops, and obstacles. Developed by Faramel Games and released in 2018, this game combines high-speed racing with deep car customization and multiplayer competition, making it a favorite for fans of stunt and driving games.
        </p>
      </section>

      <section className="mb-8">
        <h3>Gameplay Features</h3>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Multiplayer Mode:</strong> Race and perform stunts with players worldwide in real-time.</li>
          <li><strong>Single Player Mode:</strong> Explore maps and practice stunts without competition.</li>
          <li><strong>Car Customization:</strong> Choose from nine customizable cars, each with unique abilities and handling styles.</li>
          <li><strong>Advanced Tuning:</strong> Fine-tune suspension, wheels, torque, speed, and brake settings to optimize performance.</li>
          <li><strong>Dynamic Camera Views:</strong> Switch between multiple camera angles (aerial, side, front, rear) using the C key for better stunt execution and racing awareness.</li>
          <li><strong>Instant Repair:</strong> Quickly fix damage to keep the action going without interruption.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Controls</h3>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Drive Forward:</strong> W or Up Arrow</li>
          <li><strong>Drive Backward:</strong> S or Down Arrow</li>
          <li><strong>Steer Left:</strong> A or Left Arrow</li>
          <li><strong>Steer Right:</strong> D or Right Arrow</li>
          <li><strong>Handbrake:</strong> Space bar</li>
          <li><strong>Repair Car:</strong> R</li>
          <li><strong>Change Camera Angle:</strong> C</li>
          <li><strong>Switch Cars:</strong> G or H</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Gameplay Strategies</h3>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Master Suspension Tuning:</strong> Adjust suspension and camber settings to improve cornering and landing from jumps smoothly.</li>
          <li><strong>Use Camera Angles:</strong> Switch camera views to line up tricky stunts or monitor opponents in multiplayer races.</li>
          <li><strong>Balance Speed and Control:</strong> Maintain enough speed for big jumps but avoid losing control on landings.</li>
          <li><strong>Drift to Gain Style Points:</strong> Use drift mode to maximize stunt points and impress other players.</li>
          <li><strong>Repair Smartly:</strong> Don't hesitate to repair your car after crashes to avoid losing momentum.</li>
          <li><strong>Explore All Cars:</strong> Try each car's unique abilities to find the best fit for your racing and stunt style.</li>
          <li><strong>Practice Stunts:</strong> Use single-player mode to perfect difficult ramps and loops before competing online.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>Visual Preview</h3>
        <img
          src="https://cdn.crazygames.com/crazy-stunt-cars-multiplayer/preview.jpg"
          alt="Crazy Stunt Cars Multiplayer Gameplay"
          className="w-full h-auto mt-4"
        />
      </section>

      <section className="mb-8">
        <h3>Video Walkthrough</h3>
        <YouTubeLazy
          videoId="MG-RnnLN2ZA"
          title="Crazy Stunt Cars Multiplayer Gameplay"
          className="w-full h-auto aspect-video"
        />
      </section>

      <section className="mb-8">
        <h3>Additional Information</h3>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Release Date:</strong> August 2018</li>
          <li><strong>Developer:</strong> Faramel Games</li>
          <li><strong>Platform:</strong> Web browser (no download required)</li>
          <li><strong>Game Type:</strong> Multiplayer stunt driving and racing</li>
          <li><strong>Popularity:</strong> Highly rated for its fun multiplayer action and deep customization options</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>
          Experience the thrill of high-speed stunts and competitive multiplayer racing in Crazy Stunt Cars Multiplayer — customize your ride, master insane tricks, and show off your skills on massive stunt maps!
        </p>
      </footer>
    </div>
  );
};

export default CrazyStuntCarsMultiplayerPage;
