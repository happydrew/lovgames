import React from 'react';
import Image from 'next/image';

const PencilRushPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Pencil Rush: A Colorful Obstacle Course</h1>

      <p>
        Pencil Rush is a creative endless runner that fuses fast-paced obstacle dodging with the art of drawing. In this vibrant game, you guide a set of colorful pencils through dynamic courses, collecting more pencils along the way to complete stunning artworks. Its unique blend of adrenaline-pumping gameplay and creative expression sets it apart from typical runner games.
      </p>

      <Image src="/assets/images/games/pencil-rush.webp" alt="Pencil Rush Cover"  width={600} height={400} />

      <h2 className="text-2xl font-semibold">Game Overview</h2>
      <p>
        In Pencil Rush, every run is a race against time and obstacles. Your mission is to navigate through an ever-changing course, dodging hazards that may reduce your pencil count while gathering extra pencils to boost your art collection. Once you reach the finish line, the pencils you've collected transform into colors on a canvas, unveiling a unique piece of art. This rewarding process encourages repeated play as you aim to perfect your artwork and boost your gallery.
      </p>

      <h2 className="text-2xl font-semibold">Core Gameplay</h2>
      <p>
        The core objective is simple yet challenging: run, collect, and create. As you sprint along the track, use your quick reflexes to avoid obstacles that can strip away your hard-earned pencils. At the end of each run, your remaining pencils are used to complete a colorful painting. Success in Pencil Rush requires not only speed but also strategy—choosing the optimal path to maximize pencil collection and minimize risk.
      </p>

      <h2 className="text-2xl font-semibold">Controls</h2>
      <p>
        Pencil Rush is designed for intuitive play. Whether on a computer or mobile device, you control your pencils using a mouse or touchscreen:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Mouse/Touchscreen:</strong> Click or tap and drag left or right to maneuver your pencil group along the track.
        </li>
        <li>
          <strong>Quick Swipes:</strong> Use swift swipes to dodge obstacles and adjust your trajectory in real time.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Endless Runner Format:</strong> Enjoy a never-ending obstacle course that challenges your reflexes and strategic planning.
        </li>
        <li>
          <strong>Creative Art Integration:</strong> Transform your collected pencils into vibrant artworks that are unique to each run.
        </li>
        <li>
          <strong>Dynamic Obstacles:</strong> Experience a variety of obstacles that change with each level, keeping the gameplay fresh and exciting.
        </li>
        <li>
          <strong>Customization and Upgrades:</strong> Unlock new pencil skins and artistic effects to personalize your experience and enhance your gameplay.
        </li>
        <li>
          <strong>Innovative Daily Challenges:</strong> Participate in daily creative challenges and community events to earn rewards and showcase your art.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Strategies for Success</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Focus on Collection:</strong> Prioritize collecting pencils early in the run to ensure a fuller palette for your artwork.
        </li>
        <li>
          <strong>Plan Your Route:</strong> Anticipate obstacles and choose paths that maximize your pencil count while minimizing risks.
        </li>
        <li>
          <strong>Customize Your Tools:</strong> Experiment with different pencil skins and upgrades to find the perfect combination for your play style.
        </li>
        <li>
          <strong>Embrace the Art:</strong> Use the creative moment at the finish line to experiment with different color patterns, turning each run into a unique masterpiece.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Visuals and Media</h2>
      <p>
        For a glimpse into the vibrant world of Pencil Rush, check out this gameplay walkthrough:
      </p>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jKPgzBuU1Ng"
          title="Pencil Rush 3D Gameplay Walkthrough"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Dive into Pencil Rush today and unleash your creativity while testing your reflexes in this one-of-a-kind endless runner!
      </p>
    </div>
  );
};

export default PencilRushPage;
