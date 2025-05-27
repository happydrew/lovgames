import React from 'react';
import GameCard from './GameCard'; // 导入你提供的 GameCard 组件

// 更新 Game 接口以匹配你的 GameCard props
interface Game {
    name: string;
    image: string; // 从 imageUrl 改为 image
    href: string;  // 添加 href
}

interface GameCategoryProps {
    title: string;
    games: Game[];
}

const GameCategory: React.FC<GameCategoryProps> = ({ title, games }) => {
    return (
        <section className='w-full'>
            <h2 className='text-2xl font-bold mb-4 pb-2'>{title}</h2>
            <div className='flex flex-wrap justify-start items-center gap-2'>
                {games.map(game => (
                    <div className='m-2'>
                        <GameCard
                            name={game.name}
                            href={game.href}
                            image={game.image}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
                {games.length === 0 && <p>No games in this category yet.</p>}
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {


    const hotGames: Game[] = [
        {
            "name": "Zombie's On",
            "href": "/zombies-on",
            "image": "/assets/images/games/zombies-on.webp"
        },
        {
            "name": "Rush Riders",
            "href": "/rush-riders",
            "image": "/assets/images/games/rush-riders.webp"
        },
        {
            "name": "Cocos Creator",
            "href": "/cocos-creator",
            "image": "/assets/images/games/cocos-creator.webp"
        }
    ];
    const newGames: Game[] = [
        {
            "name": "Zombie's On",
            "href": "/zombies-on",
            "image": "/assets/images/games/zombies-on.webp"
        },
        {
            "name": "Rush Riders",
            "href": "/rush-riders",
            "image": "/assets/images/games/rush-riders.webp"
        },
        {
            "name": "Cocos Creator",
            "href": "/cocos-creator",
            "image": "/assets/images/games/cocos-creator.webp"
        }
    ]
    const crazyGames: Game[] = [
        {
            "name": "Crazy Cattle 3D",
            "href": "/crazy-cattle-3d",
            "image": "/assets/images/games/crazy-cattle-3d.webp"
        },
        {
            "name": "Crazy Chicken 3D",
            "href": "/crazy-chicken-3d",
            "image": "/assets/images/games/crazy-chicken-3d.webp"
        },
        {
            "name": "Crazy Flips 3D",
            "href": "/crazy-flips-3d",
            "image": "/assets/images/games/crazy-flips-3d.webp"
        },
        {
            "name": "Crazy Grand Prix",
            "href": "/crazy-grand-prix",
            "image": "/assets/images/games/crazy-grand-prix.webp"
        },
        {
            "name": "Crazy Motorcycle",
            "href": "/crazy-motorcycle",
            "image": "/assets/images/games/crazy-motorcycle.webp"
        },
        {
            "name": "Crazy Motox Multiplayer",
            "href": "/crazy-motox-multiplayer",
            "image": "/assets/images/games/crazy-motox-multiplayer.webp"
        },
        {
            "name": "Crazy Roll 3D",
            "href": "/crazy-roll-3d",
            "image": "/assets/images/games/crazy-roll-3d.webp"
        },
        {
            "name": "Crazy Stunt Cars Multiplayer",
            "href": "/crazy-stunt-cars-multiplayer",
            "image": "/assets/images/games/crazy-stunt-cars-multiplayer.webp"
        }
    ];
    const baseballGames: Game[] = [
        {
            "name": "Baseball Bros IO",
            "href": "/baseball-bros-io",
            "image": "/assets/images/games/baseball-bros-io.webp"
        },
        {
            "name": "BaseBrawl",
            "href": "/basebrawl",
            "image": "/assets/images/games/basebrawl.webp"
        },
        {
            "name": "Basket Bros",
            "href": "/basket-bros",
            "image": "/assets/images/games/basket-bros.webp"
        },
        {
            "name": "Doodle Baseball",
            "href": "/doodle-baseball",
            "image": "/assets/images/games/doodle-baseball.webp"
        },
        {
            "name": "Football Bros",
            "href": "/football-bros",
            "image": "/assets/images/games/football-bros.webp"
        }
    ];
    const rushGames: Game[] = [
        {
            "name": "Curve Rush",
            "href": "/curve-rush",
            "image": "/assets/images/games/curve-rush.webp"
        },
        {
            "name": "Bus Rush",
            "href": "/bus-rush",
            "image": "/assets/images/games/bus-rush.webp"
        },
        {
            "name": "Car Rush",
            "href": "/car-rush",
            "image": "/assets/images/games/car-rush.webp"
        },
        {
            "name": "Cluster Rush",
            "href": "/cluster-rush",
            "image": "/assets/images/games/cluster-rush.webp"
        },
        {
            "name": "Curve Ball 3D",
            "href": "/curve-ball-3d",
            "image": "/assets/images/games/curve-ball-3d.webp"
        },
        {
            "name": "Curveball",
            "href": "/curveball",
            "image": "/assets/images/games/curveball.webp"
        },
        {
            "name": "Tunnel Rush",
            "href": "/tunnel-rush",
            "image": "/assets/images/games/tunnel-rush.webp"
        }
    ];


    return (
        <div className='w-full flex flex-col items-center gap-4 font-family-sans-serif p-4 mx-auto'>

            <GameCategory title='Hot Games' games={hotGames} />
            <GameCategory title='New Games' games={newGames} />
            <GameCategory title='CrazyGames' games={crazyGames} />
            <GameCategory title='Baseball Games' games={baseballGames} />
            <GameCategory title='Rush Games' games={rushGames} />

        </div>
    );
};

export default HomePage;
