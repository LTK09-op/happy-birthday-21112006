import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1, Heart } from 'lucide-react';

const MusicPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(50);
    const previousVolume = useRef(50);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.error("Lỗi: Trình duyệt chặn tự động phát. Vui lòng nhấp vào nút Play.", error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                const newVol = previousVolume.current === 0 ? 50 : previousVolume.current;
                setVolume(newVol);
                setIsMuted(false);
                audioRef.current.muted = false; 
            } else {
                previousVolume.current = volume;
                setVolume(0);
                setIsMuted(true);
                audioRef.current.muted = true; 
            }
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVol = Number(e.target.value);
        setVolume(newVol);
        if (newVol === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };

    const getVolumeIcon = () => {
        if (isMuted || volume === 0) return <VolumeX size={20} />;
        if (volume < 50) return <Volume1 size={20} />;
        return <Volume2 size={20} />;
    };

    return (
        <div className="w-full py-8 px-4 flex justify-center bg-transparent">
            <audio 
                ref={audioRef} 
                src="/audio/Track1.mp3" 
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            
            <style>
                {`
                    @keyframes music-wave {
                        0%, 100% { height: 4px; }
                        50% { height: 16px; }
                    }
                    .music-bar {
                        animation: music-wave 1s ease-in-out infinite;
                    }
                    /* Custom Range Slider Styling */
                    input[type=range] {
                        -webkit-appearance: none; 
                        background: transparent; 
                    }
                    input[type=range]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        height: 12px;
                        width: 12px;
                        border-radius: 50%;
                        background: #D6336C;
                        cursor: pointer;
                        margin-top: -4px; 
                        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    }
                    input[type=range]::-webkit-slider-runnable-track {
                        width: 100%;
                        height: 4px;
                        cursor: pointer;
                        background: #FADBEF;
                        border-radius: 2px;
                    }
                `}
            </style>

            <div className="bg-white rounded-full shadow-xl border-2 border-primary/10 py-3 px-6 md:pr-8 flex items-center gap-4 md:gap-6 max-w-2xl relative overflow-visible z-50">
                
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-transparent opacity-50 pointer-events-none rounded-full" />

                <div className={`
                    relative w-14 h-14 flex-shrink-0 rounded-full 
                    bg-gray-900 border-2 border-gray-800 
                    flex items-center justify-center shadow-md 
                    ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}
                `}>
                    <div className="absolute inset-0 rounded-full border-[3px] border-gray-800 opacity-40"></div>
                    <div className="absolute inset-3 rounded-full border border-gray-700 opacity-40"></div>
                    <div className="absolute inset-5 rounded-full border border-gray-700 opacity-40"></div>

                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center z-10 relative shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                </div>
                <div className="flex flex-col items-start min-w-[120px] z-10">
                    <div className="flex items-end gap-[3px] h-5 mb-1">
                        {[...Array(6)].map((_, i) => (
                            <div 
                                key={i}
                                className={`w-1 bg-primary rounded-t-sm transition-all duration-300 ${isPlaying ? 'music-bar' : 'h-1'}`}
                                style={{ 
                                    animationDelay: `-${Math.random() * 1}s`,
                                    animationPlayState: isPlaying ? 'running' : 'paused'
                                }} 
                            />
                        ))}
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold text-sm text-accent">Merry-Go-Round of life</p> 
                        <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">Joe Hisaishi</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 z-10 ml-auto md:ml-2">

                    <button
                        onClick={togglePlay}
                        className="group relative flex items-center justify-center transition-transform active:scale-95 focus:outline-none"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        <div className={`transition-transform duration-300 ${isPlaying ? 'scale-110' : 'group-hover:scale-105'}`}>
                            <Heart 
                                size={48} 
                                className="text-primary fill-primary drop-shadow-sm" 
                                strokeWidth={0}
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            {isPlaying ? (
                                <Pause size={18} fill="currentColor" className="drop-shadow-md" />
                            ) : (
                                <Play size={18} fill="currentColor" className="ml-0.5 drop-shadow-md" />
                            )}
                        </div>
                    </button>
                    <div className="group/volume flex items-center relative">
                        <button
                            onClick={toggleMute}
                            className="text-gray-400 hover:text-accent transition-colors p-1"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {getVolumeIcon()}
                        </button>

                        <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300 ease-out flex items-center opacity-0 group-hover/volume:opacity-100">
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-20 h-6 mx-2 focus:outline-none"
                                aria-label="Volume"
                            />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default MusicPlayer;