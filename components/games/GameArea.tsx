import React, { useEffect, useRef, useState, useCallback, use } from 'react';
import { Star, Minimize2 } from 'lucide-react';
import { GameInfo } from '@lib/types';
import screenfull from 'screenfull';

const GameArea: React.FC<GameInfo> = ({
    name,
    iframe_url,
    votes,
    score,
    image,
    portrait
}: GameInfo) => {

    const gameIframeRef = useRef<HTMLIFrameElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [showFullscreenHint, setShowFullscreenHint] = useState(false);
    const fullScreenButtonRef = useRef<HTMLButtonElement>(null);
    const [isFullscreenActive, setIsFullscreenActive] = useState(false);
    const [isFakeFullscreenActive, setIsFakeFullscreenActive] = useState(false);
    const originalStylesRef = useRef<{
        container: { style: { position?: string; top?: string; left?: string; width?: string; height?: string; zIndex?: string; }, className: string } | null,
        iframeContainer: { className: string } | null
    }>({ container: null, iframeContainer: null });
    const fullscreenContainerRef = useRef<HTMLDivElement>(null);
    const [isOnMobile, setIsOnMobile] = useState(false);

    function isMobile(): boolean {
        if (typeof window === 'undefined') return false;
        const matchMediaCheck = window.matchMedia('(max-width: 767px)').matches;
        const userAgentCheck = /android|iphone|ipad|ipod|windows phone/i.test(
            navigator.userAgent || ''
        );
        return matchMediaCheck || userAgentCheck;
    }

    useEffect(() => {
        setIsOnMobile(isMobile());
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showFullscreenHint) {
            timer = setTimeout(() => {
                setShowFullscreenHint(false);
            }, 15000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [showFullscreenHint]);

    // useEffect(() => {
    //     const onFsChange = async () => {
    //         const isFs = !!(document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement);
    //         console.log('fullscreenchange event detected, isFullscreen:', isFs);
    //         console.log(`Current fullscreen element:`, document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement);
    //         setIsFullscreenActive(isFs);

    //         if (isFs && isMobile()) {
    //             if (screen.orientation &&
    //                 typeof (screen.orientation as any).lock === 'function') {
    //                 try {
    //                     await (screen.orientation as any).lock('portrait');
    //                     console.log('屏幕已锁定为竖屏');
    //                 } catch (err) {
    //                     console.warn('竖屏锁定失败:', err);
    //                 }
    //             } else {
    //                 console.warn('屏幕方向API screen.orientation.lock 不可用或不存在');
    //             }
    //         } else if (!isFs && isMobile()) { // Exited fullscreen on mobile
    //             if (screen.orientation && typeof screen.orientation.unlock === 'function') {
    //                 try {
    //                     screen.orientation.unlock();
    //                     console.log('屏幕方向已解锁');
    //                 } catch (err) {
    //                     console.warn('屏幕方向解锁失败:', err);
    //                 }
    //             }
    //         }
    //     };

    //     document.addEventListener('fullscreenchange', onFsChange);
    //     document.addEventListener('webkitfullscreenchange', onFsChange); // Safari, Chrome (older), Opera
    //     document.addEventListener('mozfullscreenchange', onFsChange);    // Firefox
    //     document.addEventListener('MSFullscreenChange', onFsChange);     // IE11 / Edge

    //     return () => {
    //         document.removeEventListener('fullscreenchange', onFsChange);
    //         document.removeEventListener('webkitfullscreenchange', onFsChange);
    //         document.removeEventListener('mozfullscreenchange', onFsChange);
    //         document.removeEventListener('MSFullscreenChange', onFsChange);
    //     };
    // }, []); // isMobile function is stable, so [] is okay.

    const toggleMute = () => {
        setIsMuted(!isMuted);
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

    const startGame = async () => {
        setGameStarted(true);

        if (isMobile()) {
            console.log('is on Mobile');
            //await handleFullscreen(); 
            fakeFullscreen();
        }
    };

    const handleFullscreen = async () => {
        const container = fullscreenContainerRef.current;
        if (!container) {
            console.error('Container not found');
            return;
        }
        try {
            if (screenfull.isEnabled) {
                await screenfull.request(container);
                setIsFullscreenActive(true);
            } else {
                throw new Error('Screenfull is not enabled');
            }
        } catch (error) {
            console.error('Failed to enter fullscreen (activating fake fullscreen):', error);
            fakeFullscreen();
        }
    };

    const fakeFullscreen = () => {
        // Implement fake fullscreen
        const container = fullscreenContainerRef.current;
        if (!container) {
            console.error('Container not found');
            return;
        }
        const currentContainerStyle = container.style;
        originalStylesRef.current.container = {
            style: {
                position: currentContainerStyle.position,
                top: currentContainerStyle.top,
                left: currentContainerStyle.left,
                width: currentContainerStyle.width,
                height: currentContainerStyle.height,
                zIndex: currentContainerStyle.zIndex,
            },
            className: container.className,
        };

        container.style.position = 'fixed';
        container.style.top = '0px';
        container.style.left = '0px';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.zIndex = '2147483640';

        const iframeDiv = container.querySelector('#iframe-container') as HTMLElement;
        if (iframeDiv) {
            originalStylesRef.current.iframeContainer = {
                className: iframeDiv.className,
            };
            // Ensure the iframe container fills the new fixed parent
            iframeDiv.className = 'w-full h-full';
        }
        setIsFakeFullscreenActive(true);
    }

    const exitFullscreen = async () => {
        if (isFullscreenActive) {
            await screenfull.exit();
            setIsFullscreenActive(false);
        } else if (isFakeFullscreenActive) {
            exitFakeFullscreen();
        }
    };

    const exitFakeFullscreen = async () => {
        const container = fullscreenContainerRef.current;
        const originalContainerProps = originalStylesRef.current.container;

        if (originalContainerProps) {
            // Restore container styles
            const styleToRestore = originalContainerProps.style;
            container.style.position = styleToRestore.position || '';
            container.style.top = styleToRestore.top || '';
            container.style.left = styleToRestore.left || '';
            container.style.width = styleToRestore.width || '';
            container.style.height = styleToRestore.height || '';
            container.style.zIndex = styleToRestore.zIndex || '';
            // Restore container className
            container.className = originalContainerProps.className;
        }

        const iframeDiv = container.querySelector('#iframe-container') as HTMLElement;
        const originalIframeContainerProps = originalStylesRef.current.iframeContainer;
        if (iframeDiv && originalIframeContainerProps) {
            // Restore iframe container className
            iframeDiv.className = originalIframeContainerProps.className;
        }

        setIsFakeFullscreenActive(false);
        // Reset the stored original styles
        originalStylesRef.current = { container: null, iframeContainer: null };

    };

    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center bg-[#212233] rounded-lg">

            {/* Game Iframe or Play Now */}
            <div ref={fullscreenContainerRef}
                className={`w-full ${isOnMobile ? 'aspect-[9/16]' : 'aspect-video'} rounded-lg relative flex-1 flex justify-center items-center`}>
                <div id="iframe-container"
                    title={name}
                    className={`h-full ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}
                >
                    {isFullscreenActive && (
                        <button
                            title="退出全屏"
                            onClick={exitFullscreen}
                            className="fixed top-1 right-1 p-2 bg-gray-900 bg-opacity-40 hover:bg-opacity-80 text-gray-200 rounded-full z-[2147483647] transition-opacity duration-200"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <Minimize2 size={20} strokeWidth={2.5} />
                        </button>
                    )}
                    {gameStarted && <iframe
                        title={name}
                        ref={gameIframeRef}
                        src={iframe_url}
                        className="w-full h-full overflow-hidden"
                        tabIndex={0}
                        allowFullScreen
                        allow="fullscreen; screen-orientation-lock"
                    />}

                </div>
                <div className={`absolute ${gameStarted ? 'hidden' : 'z-1000'} inset-0 w-full h-full flex flex-col justify-center items-center rounded-lg overflow-hidden`}>
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
                        <div className="mb-2 md:mb-4">
                            <img
                                src={image}
                                alt={name}
                                className="w-32 h-32 md:w-64 md:h-64 rounded-lg shadow-lg"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/images/game-thumbnails/default.jpg';
                                }}
                            />
                        </div>
                        <div className="text-lg md:text-3xl font-header m-1 md:m-4 text-white text-center">{name}</div>
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-sm md:text-xl text-white font-bold py-1.5 md:py-3 px-4 md:px-10 rounded-full flex items-center shadow-lg"
                            onClick={startGame}
                        >
                            Play Now
                            <svg className="ml-1 md:ml-2 w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex items-center justify-between px-2 py-1 rounded-t-lg">
                <div id="left-bar" className="flex justify-start items-center gap-4">
                    <h1 className='text-sm md:text-xl'>{name}</h1>
                    <div id="right-bar" className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-xs md:text-sm text-white font-catamaran">{votes} votes {score}/5</span>
                    </div>
                </div>

                <div className="flex gap-2 relative">
                    {showFullscreenHint && isMobile() && gameStarted && (
                        <div className="absolute top-1/2 right-full transform -translate-y-1/2 flex items-center z-50 pointer-events-none animate-horizontal-shuttle">
                            <div className="px-2 py-1 bg-amber-600 text-white rounded-md shadow-lg text-nowrap">
                                <span>Click Fullscreen</span>
                            </div>
                            <svg
                                className="w-4 h-4 text-amber-600"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                            >
                                <path d="M0 0L8 4L0 8V0Z" />
                            </svg>
                        </div>
                    )}
                    {gameStarted && (
                        <button ref={fullScreenButtonRef}
                            title='Fullscreen'
                            className="p-2"
                            onClick={handleFullscreen}>
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