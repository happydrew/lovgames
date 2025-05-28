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
                // Consider unlocking orientation if needed when exiting fullscreen on mobile
                // if (/Mobi|Android|iPhone/i.test(navigator.userAgent) && screen.orientation && typeof screen.orientation.unlock === 'function') {
                //     try {
                //         screen.orientation.unlock();
                //     } catch (err) {
                //         console.warn('屏幕方向解锁失败:', err);
                //     }
                // }
            } else {
                // Entering fullscreen
                if (isMobile()) {
                    // It's a mobile device
                    if (screen.orientation && typeof (screen.orientation as any).lock === 'function') {
                        try {
                            await (screen.orientation as any).lock('portrait-primary');
                            console.log('屏幕已锁定为竖屏');
                        } catch (err) {
                            console.warn('竖屏锁定失败:', err);
                            // Fallback or decide if fullscreen should still be attempted
                        }
                    } else {
                        console.warn('屏幕方向API screen.orientation.lock 不可用或不存在');
                    }
                }
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
        // Check if it's a mobile device and then go fullscreen
        if (isMobile()) {
            // We need a slight delay to ensure the iframe is in the DOM and rendered
            // before trying to make it fullscreen.
            // Otherwise, requestFullscreen might be called on an element that isn't fully ready.
            handleFullscreen();
        }
    };

    const isMobile = (): boolean => {
        if (typeof window === 'undefined') return false;
        const matchMediaCheck = window.matchMedia('(max-width: 767px)').matches;
        const userAgentCheck = /android|iphone|ipad|ipod|windows phone/i.test(
            navigator.userAgent || ''
        );
        return matchMediaCheck || userAgentCheck;
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setGameStarted(true);
    //     }, 5000);
    // }, []);

    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center bg-[#212233] rounded-lg">

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
                                className="bg-indigo-600 hover:bg-indigo-700 text-xl text-white font-bold py-3 px-10 rounded-full flex items-center shadow-lg"
                                onClick={startGame}
                            >
                                Play Now
                                <svg className="ml-2 w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex items-center justify-between px-2 py-1 rounded-t-lg">
                <div id="left-bar" className="flex justify-start items-center gap-4">
                    <h1 className='text-xl'>{name}</h1>
                    <div id="right-bar" className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        {/* <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" strokeWidth={1} /> */}
                        <span className="ml-2 text-sm text-white font-catamaran">{votes} votes {score}/5</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    {/* <button className="p-2" onClick={toggleMute}>
                                    {isMuted ? <VolumeX color='#eab308' strokeWidth={4} size={24} /> : <Volume2 color='#eab308' strokeWidth={4} size={24} />}
                                </button> */}
                    {gameStarted && (
                        <button title='Fullscreen' className="p-2" onClick={handleFullscreen}>
                            {/* <Fullscreen color='#eab308' strokeWidth={4} size={24} /> */}
                            <svg className='text-gray-700 dark:text-gray-100' focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
                                <path
                                    fill='currentColor'
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4 2C2.89543 2 2 2.89543 2 4V8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8V5.41421L7.79289 9.20711C8.18342 9.59763 8.81658 9.59763 9.20711 9.20711C9.59763 8.81658 9.59763 8.18342 9.20711 7.79289L5.41421 4H8C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2H4ZM16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4H18.5858L14.7929 7.79289C14.4024 8.18342 14.4024 8.81658 14.7929 9.20711C15.1834 9.59763 15.8166 9.59763 16.2071 9.20711L20 5.41421V8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8V4C22 2.89543 21.1046 2 20 2H16ZM16 20L18.5858 20L14.7929 16.2071C14.4024 15.8166 14.4024 15.1834 14.7929 14.7929C15.1834 14.4024 15.8166 14.4024 16.2071 14.7929L20 18.5858V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V20C22 21.1046 21.1046 22 20 22L16 22C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20ZM4 18.5858L7.79289 14.7929C8.18342 14.4024 8.81658 14.4024 9.20711 14.7929C9.59763 15.1834 9.59763 15.8166 9.20711 16.2071L5.41421 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H4C2.89543 22 2 21.1046 2 20V16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16L4 18.5858Z">
                                </path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameArea;