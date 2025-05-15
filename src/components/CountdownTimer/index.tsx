"use client";

import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";

// Simplified props interface
interface CountdownTimerProps {
    startTime?: number; // Epoch time in milliseconds
    duration?: number;  // Duration in days
    loop?: boolean;     // Whether to loop the countdown
    static?: boolean;   // Whether to display static time
    type?: "profile" | "comingsoon" | "buy" | undefined;
}

const CountdownTimer = ({
    type,
    startTime = Date.now(),
    duration = 30,
    loop = false,
    static: isStatic = false,
}: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState("000:00:00:00");
    const [staticTimeLeft, setStaticTimeLeft] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Use refs instead of state to avoid re-renders
    const targetDateRef = useRef(moment(startTime).add(duration, "days"));

    // Set up the static display once when props change
    useEffect(() => {
        if (isStatic) {
            // Convert duration to days, hours, minutes, seconds format
            const days = Math.floor(duration);
            const hours = Math.floor((duration - days) * 24);
            const minutes = Math.floor(((duration - days) * 24 - hours) * 60);
            const seconds = Math.floor((((duration - days) * 24 - hours) * 60 - minutes) * 60);

            const formattedTime = `${String(days).padStart(3, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            setStaticTimeLeft(formattedTime);
            setIsLoading(false);
        }
    }, [isStatic, duration]);

    // Initialize target date when startTime or duration changes
    useEffect(() => {
        targetDateRef.current = moment(startTime).add(duration, "days");
    }, [startTime, duration]);

    // Update the timer
    useEffect(() => {
        // Skip if static display
        if (isStatic) return;

        const formatTimeLeft = (duration: moment.Duration) => {
            const totalDays = Math.floor(duration.asDays());
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            return `${String(totalDays).padStart(3, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        };

        const updateTimer = () => {
            const now = moment();
            const currentTarget = targetDateRef.current;

            // Check if time is up
            if (now.isAfter(currentTarget)) {
                if (loop) {
                    // When looping, calculate a new target
                    const durationMs = moment.duration(duration, "days").asMilliseconds();
                    const elapsedMs = now.diff(moment(startTime));
                    const remainingMs = durationMs - (elapsedMs % durationMs);

                    // If exactly at boundary, use full duration
                    const msToAdd = remainingMs === 0 ? durationMs : remainingMs;

                    // Set new target without state update
                    targetDateRef.current = moment(now).add(msToAdd, "milliseconds");

                    // Calculate time remaining 
                    const timeRemaining = moment.duration(msToAdd, "milliseconds");
                    setTimeLeft(formatTimeLeft(timeRemaining));
                } else {
                    // Not looping, just show zeros
                    setTimeLeft("000:00:00:00");
                }
            } else {
                // Normal countdown
                const timeRemaining = moment.duration(currentTarget.diff(now));
                setTimeLeft(formatTimeLeft(timeRemaining));
            }

            // Set loading to false after first calculation
            if (isLoading) {
                setIsLoading(false);
            }
        };

        // Set up interval
        const timer = setInterval(updateTimer, 1000);
        updateTimer(); // Call immediately

        return () => clearInterval(timer);
    }, [isStatic, loop, duration, startTime, isLoading]);


    const timeTextCalculator = useCallback((index: number) => {
        switch (index) {
            case 0:
                return "Days";
            case 1:
                return "Hours";
            case 2:
                return "Mins";
            case 3:
                return "Seconds";
            default:
                break;
        }
    }, []);

    // Use either dynamic timeLeft or static time based on isStatic flag
    const displayTime = isStatic ? staticTimeLeft : timeLeft;

    return (
        <div
            className={`flex scale-100 flex-col items-center text-center text-white md:text-[#8C52FF] ${type === "comingsoon" && "!text-[#8C52FF]"} text-2xl lg:text-4xl font-bold`}
        >

            {isLoading ? (
                <div className="flex items-center justify-center md:bg-[#121234] rounded-lg p-3 min-w-[200px]">
                    <div className="animate-pulse flex space-x-2">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    </div>
                </div>
            ) : (
                <div
                    className={`flex w-fit mx-auto items-center ${type === "profile" && "!bg-transparent "
                        } rounded-lg tracking-wider`}
                >
                    {displayTime.split(":").map((time: string, index) => {
                        return (
                            <div
                                key={index}
                                className="relative last:w-[50px] last:md:w-[85px]"
                            >
                                <div className=" mokoto-regular text-xl xl:text-[36px]">
                                    <span style={{ lineHeight: '1' }} className="drop-shadow-[0px_0px_10px_#FFFFFF50] md:drop-shadow-[0px_0px_10px_#FFFFFF80] ">
                                        {time}
                                    </span>
                                    <span className="">
                                        {displayTime.split(":").length !== index + 1 && ":"}
                                    </span>
                                </div>
                                <div className={`text-center font-thin text-[8px] md:text-[12px] -mt-2 md:mt-0 text-gray-400 `} >
                                    {timeTextCalculator(index)}
                                </div>
                            </div>
                        );
                    }) || "00:00:00:00"}
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
