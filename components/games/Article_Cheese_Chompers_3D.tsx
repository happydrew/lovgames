// pages/cheese-chompers-3d.tsx
import { NextPage } from 'next'
import Image from 'next/image';

export const metadata = {
  description: 'Cheese Chompers 3D is a fast-paced browser knockout game where players control quirky 3D rats in chaotic arena battles, featuring physics-based collisions, mid-air flip speed boosts, and explosive takedowns.'
}

const CheeseChompers3DPage: NextPage = () => {
  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <h1>Cheese Chompers 3D</h1>
        <p>
          Cheese Chompers 3D is a hilarious, fast-paced knockout game where you take control of quirky 3D rats battling for cheese supremacy in a dynamic, physics-driven arena. Dive into quick, unpredictable matches built for endless fun!
        </p>

        <Image
          src="/assets/images/games/cheese-chompers-3d.webp"
          alt="Cheese Chompers 3D"
          width={520}
          height={292}
        />

        <section>
          <h2>Game Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Vibrant Rodent Rampage:</strong> Remastered 3D visuals and lively sound design make each match a cheese-fueled spectacle.</li>
            <li><strong>Physics-Based Chaos:</strong> Rats collide, bounce, and tumble unpredictably—every knockout triggers an explosive effect.</li>
            <li><strong>Speed-Boosting Flips:</strong> Execute mid-air flips during jumps for temporary bursts of speed.</li>
            <li><strong>Instant Web Play:</strong> No downloads or installs—jump right into the action from your browser.</li>
            <li><strong>Chaotic Arena Combat:</strong> Survival of the wittiest—be the last rat standing on a single, ever-chaotic map.</li>
          </ul>
        </section>

        <section>
          <h2>How to Play</h2>
          <p>
            Navigate a flat 3D arena against AI or real players. Use simple controls to master the mayhem:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>WASD</strong>: Move your rat around the map.</li>
            <li><strong>Space</strong>: Jump; perform a flip mid-jump for a speed boost.</li>
          </ul>
        </section>

        <section>
          <h2>Game Objectives</h2>
          <p>
            Outlast your rivals by pushing, bumping, and blasting them off the platform. Leverage momentum, timing, and flip boosts to secure each explosive knockout.
          </p>
        </section>

        <section>
          <h2>Tips & Strategies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Master the Flip Boost:</strong> Time your flips for maximum burst—use it to chase down opponents or evade incoming attacks.</li>
            <li><strong>Build Momentum:</strong> Run in straight lines before impact to amplify your knocking power.</li>
            <li><strong>Edge Awareness:</strong> Always note your proximity to the edge to avoid self-elimination.</li>
            <li><strong>Cheese Power-Ups:</strong> Look out for special cheeses that grant temporary shields or speed multipliers.</li>
          </ul>
        </section>

        <section>
          <h2>Innovative Modes (Future Ideas)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Double Cheese Dash:</strong> Grab two cheeses for a double-speed frenzy!</li>
            <li><strong>Rolling Cheese Wheels:</strong> Navigate a map with moving hazards to dodge or exploit.</li>
            <li><strong>Rat Customization:</strong> Unlock skins, hats, and trails to personalize your champion’s look.</li>
          </ul>
        </section>

        <section>
          <h2>Related Games</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="/crazy-cattle-3d">Crazy Cattle 3D</a> – Charge into bovine chaos!</li>
            <li><a href="/crazy-sheep-3d">Crazy Sheep 3D</a> – Bounce and battle as a fluffy warrior.</li>
            <li><a href="/crazy-chicken-3d">Crazy Chicken 3D</a> – Cluck, peck, and prevail in feathered fray.</li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default CheeseChompers3DPage
