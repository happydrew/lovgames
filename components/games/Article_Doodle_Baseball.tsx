// components/DoodleBaseballInfo.tsx
import Image from "next/image";
import React from "react";

const DoodleBaseballInfo: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 leading-relaxed">
      {/* Introduction */}
      <h2 className="mb-6">
        Introduction to Doodle Baseball
      </h2>
      <p className="mb-4">
        Doodle Baseball is a captivating online game that fuses the classic thrill of baseball with charming, hand-drawn doodle graphics. Originally featured as a{" "}
        <strong>Google Doodle Baseball</strong> celebration, the game has evolved into a unique experience for both baseball fans and casual gamers alike. Whether you're searching for a{" "}
        <strong>doodle baseball game</strong> that's fun and accessible or a <strong>google doodle baseball game</strong> with quirky visuals, this game promises endless enjoyment.
      </p>

      <Image
        src="/assets/images/games/doodle-baseball.webp"
        alt="Doodle Baseball"
        className=" rounded-lg shadow-md mb-6"
        width={600}
        height={300}
      />

      {/* Gameplay Overview */}
      <h3 className="mb-4">Gameplay Overview</h3>
      <p className="mb-4">
        In Doodle Baseball, players assume the role of a batter with a simple yet engaging objective: hit the ball with perfect timing to score runs. With every swing, you're challenged to convert pitches into home runs, while keeping an eye on your strike count. This isn't just any baseball game—it's an innovative twist on a timeless sport, often referred to by keywords such as <strong>baseball google doodle</strong> and <strong>google baseball doodle</strong>.
      </p>

      {/* Gameplay Controls */}
      <h3 className="mb-4">Gameplay Controls</h3>
      <p className="mb-4">
        The game is designed to be easy to pick up and play:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Desktop:</strong> Use your mouse to time your swings with a simple click.
        </li>
        <li>
          <strong>Mobile:</strong> Tap the screen to swing the bat at just the right moment.
        </li>
      </ul>

      {/* Game Features */}
      <h3 className="mb-4">Game Features</h3>
      <p className="mb-4">
        Doodle Baseball stands out with its innovative design and playful elements:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Adorable Doodle Characters:</strong> From quirky food items to animated fielders, every element is designed to bring a smile.
        </li>
        <li>
          <strong>Vibrant Graphics & Animations:</strong> Enjoy a visually engaging experience with bright colors and smooth animations that elevate the overall gameplay.
        </li>
        <li>
          <strong>Immersive Sound Effects:</strong> The lively crowd cheers and crisp sound effects create an authentic stadium atmosphere.
        </li>
        <li>
          <strong>Innovative Gameplay Modes:</strong> Whether you're playing casually or competing for high scores, the game offers varied challenges. Look for hints of <strong>google doodle games baseball</strong> and <strong>baseball doodle game</strong> excitement throughout!
        </li>
      </ul>

      {/* Gameplay Strategies */}
      <h3 className="mb-4">Gameplay Strategies</h3>
      <p className="mb-4">
        Mastering Doodle Baseball is all about timing and strategy. Here are some tips:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Timing is Everything:</strong> Watch the pitch closely and swing at the optimal moment to secure a home run.
        </li>
        <li>
          <strong>Aim for Home Runs:</strong> Even though every hit counts, targeting home runs can significantly boost your score.
        </li>
        <li>
          <strong>Stay Focused:</strong> As the speed of the pitches increases, quick reflexes and concentration become key.
        </li>
        <li>
          <strong>Experiment with Characters:</strong> Some versions even allow you to choose quirky characters, providing an edge to your gameplay—experience the thrill of a <strong>baseball doodle for google</strong> twist!
        </li>
      </ul>

      {/* Additional Content & Multimedia */}
      <h3 className="mb-4">Additional Content & Multimedia</h3>
      <p className="mb-4">
        Enhance your understanding of Doodle Baseball with gameplay videos and screenshots. Check out the following example:
      </p>
      <div className="mb-6 aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/-ZeX-L9x9mA"
          title="Google Doodle Baseball Gameplay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Innovative Twist */}
      <h3 className="mb-4">Innovative Twist</h3>
      <p className="mb-4">
        Building on the classic formula, our version of Doodle Baseball integrates creative power-ups and customizable characters—adding layers of strategy and personalization. This fresh take transforms a typical <strong>doodle baseball unblocked</strong> session into a dynamic and memorable adventure, setting it apart from standard <strong>google doodle baseball unblocked</strong> experiences.
      </p>

      {/* Conclusion */}
      <h3 className="mb-4">Conclusion</h3>
      <p>
        Whether you refer to it as <strong>doodle google baseball</strong> or <strong>google doodles baseball</strong>, Doodle Baseball remains a delightful fusion of art, sports, and innovation. Its accessible controls, engaging graphics, and strategic gameplay ensure it stays at the top of the list for anyone seeking a fun, refreshing gaming experience.
      </p>
    </section>
  );
};

export default DoodleBaseballInfo;
