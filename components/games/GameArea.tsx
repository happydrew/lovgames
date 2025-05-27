import React, { useEffect, useRef, useState } from 'react';
import { Star, Fullscreen, VolumeX, Volume2 } from 'lucide-react';
import { GameInfo } from '@lib/types';

const GameArea: React.FC<GameInfo> = ({
    name,
    iframe_url,
    votes,
    score,
    image
}: GameInfo) => {

    const gameIframeRef = useRef<HTMLIFrameElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const handleFullscreen = async () => {
        if (gameIframeRef.current) {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else {
                // 检测是否是移动端，并尝试锁定屏幕方向
                // if (window.screen.orientation && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                //     try {
                //         gameIframeRef.current.style.transform = 'rotate(90deg)';
                //         gameIframeRef.current.style.width = '100vh';
                //         gameIframeRef.current.style.height = '100vw';
                //         //gameIframeRef.current.style.overflow = 'hidden';
                //     } catch (error) {
                //         console.warn("屏幕方向锁定失败：", error);
                //     }
                // }
                await gameIframeRef.current.requestFullscreen();
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // 在这里添加静音或取消静音的逻辑
        if (gameIframeRef.current) {
            if (!isMuted) {
                gameIframeRef.current.querySelectorAll('video, audio').forEach(el => {
                    (el as HTMLMediaElement).muted = true;
                });
            } else {
                gameIframeRef.current.querySelectorAll('video, audio').forEach(el => {
                    (el as HTMLMediaElement).muted = false;
                });
            }
        }
    };

    const startGame = () => {
        setGameStarted(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setGameStarted(true);
        }, 5000);
    }, []);

    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center bg-transparent rounded-lg px-2">
            {/* UpBar */}
            <div className="w-full flex items-center justify-between px-4 py-1 rounded-t-lg">
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" strokeWidth={1} />
                    <span className="ml-2 text-sm text-white font-catamaran">{votes} votes {score}/5</span>
                </div>
                <div className="flex gap-2">
                    {/* <button className="p-2" onClick={toggleMute}>
                                    {isMuted ? <VolumeX color='#eab308' strokeWidth={4} size={24} /> : <Volume2 color='#eab308' strokeWidth={4} size={24} />}
                                </button> */}
                    {gameStarted && (
                        <button title='Fullscreen' className="p-2" onClick={handleFullscreen}>
                            <Fullscreen color='#eab308' strokeWidth={4} size={24} />
                        </button>
                    )}
                </div>
            </div>

            {/* Game Iframe or Play Now */}
            <div className="w-full aspect-video rounded-lg relative flex-1">
                {gameStarted ? (
                    <div id="iframe-container" title={name} className='w-full h-full flex justify-center items-center'>
                        <iframe
                            title={name}
                            ref={gameIframeRef}
                            src={iframe_url}
                            className="w-full h-full overflow-hidden"
                            tabIndex={0}
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center rounded-lg overflow-hidden relative">
                        {/* 背景图片带模糊效果 */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'blur(50px) brightness(0.5)',
                                transform: 'scale(1.1)', // 防止模糊边缘
                            }}
                        />

                        {/* 彩色渐变叠加层 */}
                        <div
                            className="absolute inset-0 z-0 opacity-40"
                            style={{
                                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, rgba(236, 72, 153, 0.5) 100%)',
                                mixBlendMode: 'overlay',
                            }}
                        />

                        {/* 内容层 */}
                        <div className="z-10 flex flex-col items-center">
                            <div className="mb-4">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-64 h-auto rounded-lg shadow-lg"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/images/game-thumbnails/default.jpg';
                                    }}
                                />
                            </div>
                            <div className="text-3xl font-header m-4 text-white">{name}</div>
                            <button
                                onClick={startGame}
                                className="bg-indigo-600 hover:bg-indigo-700 text-xl text-white font-bold py-3 px-10 rounded-full flex items-center shadow-lg"
                            >
                                Play Now
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Game Controls */}
            <div className="w-full flex justify-between">
                <div className="flex gap-2">
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-sm text-gray-300 font-catamaran font-bold mx-4'>
                        {/* {gameControl ? <span className='text-yellow-500'>Tip:</span> : null} {gameControl} */}

                    </span>
                </div>
                {/* <a href="http://gamehome.fun"
                            className="px-4 py-2 bg-yellow-500 text-white rounded">
                            MORE GAMES
                        </a> */}
            </div>
        </div>
    );
};

export default GameArea;