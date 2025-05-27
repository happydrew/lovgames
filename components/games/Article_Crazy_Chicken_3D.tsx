// pages/crazy-chicken-3d.tsx

import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Crazy Chicken 3D – Feather-Flying Brawl',
  description:
    'Crazy Chicken 3D is a poultry-powered multiplayer brawler where up to 12 feisty chickens charge, spin, and collide across six vibrant farm arenas. Cluck, conquer, and outlast the flock!',
}

const CrazyChicken3DPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <h1>Crazy Chicken 3D</h1>

      <Image
        src="/assets/images/games/crazy-chicken-3d.webp"
        alt="Crazy Chicken 3D"
        width={520}
        height={292}
      />
      <section className="space-y-4">
        <p>
          Crazy Chicken 3D burst onto the scene on April 22, 2025, transforming the battle-royale formula into a poultry-powered free-for-all. Agile 3D chickens cluck, charge, and cartwheel across dynamic farm arenas bristling with hazards and ramps. Your mission? Outlast the flock by sending rivals tumbling into pits, traps, or off the map entirely.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Highlights &amp; Gameplay Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Clucking Carnage: wild squawks and wing-flap sounds synced to every impact</li>
          <li>Physics-First Combat: momentum, spin, and ricochets fuel your attacks</li>
          <li>Up to 12-Player Mayhem: quick matches that keep you on your toes</li>
          <li>Six Themed Arenas: five public battlefields plus a secret unlockable level</li>
          <li>Easy to Learn, Hard to Master: simple moves hide strategic depth</li>
          <li>Cosmetic Flair: unlock quirky hats, feathers, and emotes</li>
          <li>Seasonal Events &amp; Leaderboards: compete solo or as a clan</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>How to Play</h2>
        <h3>Game Objective</h3>
        <p>
          Last beak standing! Navigate each floating farm map, bump opponents off edges, dodge environmental traps, and leverage ramps for aerial hits. Survive longer than your feathery foes to claim victory.
        </p>

        <h3>Controls</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Move: W / A / S / D</li>
          <li>Jump: Spacebar</li>
          <li>Charged Spin Attack: hold Left Click, release to unleash</li>
          <li>Dash Burst: Shift</li>
          <li>Emote Wheel: E</li>
          <li>Pause/Menu: Esc</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Top-Tier Tactics</h2>
        <ul className="list-decimal list-inside space-y-1">
          <li>Ramp Launches: time your spin on ramps to fling foes sky-high</li>
          <li>Momentum is King: keep rolling—the harder you hit, the tougher you are to stop</li>
          <li>Edge-Watch: learn each map’s hazard timing to avoid surprise sweeps</li>
          <li>Skin Selection: bulkier skins deliver more knockback; lighter ones boost agility</li>
          <li>Mid-Air Adjustments: tiny directional tweaks can save you from doom</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Battle Arenas</h2>
        <ul className="list-decimal list-inside space-y-1">
          <li><strong>Emerald Pastures (Ireland):</strong> wide grasslands for high-speed brawls</li>
          <li><strong>Golden Dunes (Egypt):</strong> shifting sands and ancient traps</li>
          <li><strong>Frosty Fields (Sweden):</strong> icy surfaces turn sprints into slides</li>
          <li><strong>Suburban Sprawl (Ohio):</strong> backyard fences, fire hydrants, and gnomes</li>
          <li><strong>Quiet Vistas (Poland):</strong> rolling hills until chaos erupts</li>
          <li><strong>Hidden Coop (Secret):</strong> unlock bizarre surprises with mystery conditions</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>More Cluck-Chaos</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Garry Royale! – physics-based free-for-all with oddball gadgets</li>
          <li>Axe Over It – scale mayhem-filled towers armed with an axe</li>
          <li>Goose Goose Duck – social deception with feathered friends</li>
        </ul>
      </section>
    </div>
  )
}

export default CrazyChicken3DPage
