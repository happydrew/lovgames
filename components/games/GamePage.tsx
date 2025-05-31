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
            {/* <h1 className='text-center mb-2'>{main_game.name}</h1> */}

            {/* adsterra */}
            {/* <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script> */}
            {/* <div id="container-31a50d07a2355afffb47dc172427319e"></div> */}

            {/* Game area */}
            <div id="game-region"
                className="w-full flex flex-col lg:flex-row justify-start items-center mb-8">

                {/* left ads */}
                {/* <div id="left-ads" className="scale-[90%] gap-4 lg:gap-6 w-full lg:w-1/6 flex flex-col justify-center items-center border border-zinc-700 relative">
                    <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script>
                    <div id="container-31a50d07a2355afffb47dc172427319e"></div>
                </div> */}

                {/* <div id="container-31a50d07a2355afffb47dc172427319e"></div> */}

                <div id="game-region" className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center items-center gap-2">

                    <div className="flex-1 w-full h-full">
                        <GameArea {...main_game} />
                    </div>

                    <div id="right-side" className="h-full w-full lg:w-1/5 flex flex-row flex-wrap justify-center items-center gap-2">
                        {relate_games && relate_games.slice(0, 10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} className="w-[104px] h-[104px] lg:w-[120px] lg:h-[120px]" />
                        ))}
                    </div>

                    {/* <div id="left-side" className="h-full lg:flex-col flex flex-wrap justify-center items-center gap-2">
                        {relate_games && relate_games.length > 5 && relate_games.slice(5, 10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} width={110} height={110} />
                        ))}
                    </div> */}
                </div>

                {/* right ads */}
                {/* <div id="right-ads" className="scale-[90%] gap-4 lg:gap-6 w-full lg:w-1/6 flex flex-col justify-center items-center border border-zinc-700 relative">
                    <script async data-cfasync="false" src="//pl26416490.profitableratecpm.com/31a50d07a2355afffb47dc172427319e/invoke.js"></script>
                    <div id="container-31a50d07a2355afffb47dc172427319e"></div>
                </div> */}
                {/* <div id="container-31a50d07a2355afffb47dc172427319e" className="w-full lg:w-[20%] min-h-[600px] bg-[#212233] mx-2"></div> */}
                <div className="w-full lg:w-[20%] bg-[#212233] mx-2"></div>


            </div>


            <div id="article_and_recommand" className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 mt-10">

                <div id="article" className="order-2 md:order-1 w-full lg:w-[48%] flex flex-col justify-start items-center gap-4 border-4 border-green-900 rounded-2xl p-2">
                    <p className="text-2xl font-header font-semibold text-sky-500">About {main_game.name}</p>
                    {Article && <Article />}
                </div>

                <div id="recommand" className="order-1 md:order-2 w-full lg:w-[48%] flex flex-col py-2 justify-start items-center gap-2 border-4 border-green-900 rounded-2xl">
                    <p className="text-2xl font-header font-semibold text-sky-500">Recommended Games</p>
                    <div className="w-full flex flex-wrap justify-center items-center gap-2 px-0 py-2">
                        {relate_games && relate_games.length > 10 && relate_games.slice(10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} className="w-[104px] h-[104px] lg:w-[120px] lg:h-[120px]" />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
};

export default GamePage;
