import { GameInfo } from "@lib/types";
import GameArea from "./GameArea";
import React from "react";
import GameCard from "./GameCard";


interface GamePageProps {
    main_game: GameInfo;
    relate_games: GameInfo[];
    // markdown格式的文章
    Article?: React.FC;
}

const GamePage = ({
    main_game,
    relate_games,
    Article
}: GamePageProps) => {
    return (
        <div className="w-full p-2">

            {/* <div id='top-ads' className="flex justify-center items-center mb-6 w-full h-20 border border-zinc-700 relative">
                <span className='absolute top-0 left-0 from-zinc-700 to-zinc-800 opacity-50 text-[10px]'>ads</span>
            </div> */}

            {/* Game name */}
            <h1 className='text-center mb-2'>{main_game.name}</h1>

            {/* adsterra */}
            <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script>
            <div id="container-31a50d07a2355afffb47dc172427319e"></div>

            {/* Game area */}
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">

                {/* left ads */}
                {/* <div id="left-ads" className="scale-[90%] gap-4 lg:gap-6 w-full lg:w-1/6 flex flex-col justify-center items-center border border-zinc-700 relative">
                    <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script>
                    <div id="container-31a50d07a2355afffb47dc172427319e"></div>
                </div> */}

                <div id="container-31a50d07a2355afffb47dc172427319e"></div>

                <div id="game-region" className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-center items-center gap-2 mb-8">
                    <div id="left-side" className="order-2 lg:order-1 lg:h-full lg:flex-col flex flex-row flex-wrap justify-between items-center gap-4">
                        {relate_games && relate_games.slice(0, 5).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} />
                        ))}
                    </div>

                    <div className="order-1 lg:order-2 flex-1 w-full h-full lg:max-w-[60rem]">
                        <GameArea name={main_game.name}
                            iframe_url={main_game.iframe_url}
                            votes={main_game.votes}
                            score={main_game.score}
                            image={main_game.image}
                        />
                    </div>

                    <div id="left-side" className="order-3 lg:h-full lg:flex-col flex flex-wrap justify-center items-center gap-4">
                        {relate_games && relate_games.length > 5 && relate_games.slice(5, 10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} />
                        ))}
                    </div>
                </div>

                {/* right ads */}
                {/* <div id="right-ads" className="scale-[90%] gap-4 lg:gap-6 w-full lg:w-1/6 flex flex-col justify-center items-center border border-zinc-700 relative">
                    <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script>
                    <div id="container-31a50d07a2355afffb47dc172427319e"></div>
                </div> */}
                <div id="container-31a50d07a2355afffb47dc172427319e"></div>


            </div>


            <div id="article_and_recommand" className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 mt-10">

                <div id="article" className="w-full lg:w-[48%] flex flex-col justify-center items-center gap-4 border-4 border-green-900 rounded-2xl p-2">
                    <p className="text-2xl font-header font-semibold text-sky-500">About {main_game.name}</p>
                    {Article && <Article />}
                </div>

                <div id="recommand" className="w-full lg:w-[48%] flex flex-col py-2 justify-center items-center gap-4 border-4 border-green-900 rounded-2xl">
                    <p className="text-2xl font-header font-semibold text-sky-500">Recommended Games</p>
                    <div className="w-full flex flex-wrap justify-center items-center gap-4 px-0 py-2">
                        {relate_games && relate_games.length > 10 && relate_games.slice(10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
};

export default GamePage;