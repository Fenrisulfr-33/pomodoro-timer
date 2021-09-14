import React from "react"
import { minutesToDuration } from "../utils/duration";

export function CurrentSession ({ session, focusDuration, breakDuration }) {
    if (session?.label === "Focusing") {
        return (
            <h2 data-testid="session-title">
                {session?.label} for {minutesToDuration(focusDuration)} minutes
            </h2>
        );
    } else {
        return (
            <h2 data-testid="session-title">
                {session?.label} for {minutesToDuration(breakDuration)} minutes
            </h2>
        );
    }
}

export function CurrentBar ({ session, focusDuration, breakDuration }) {
    if (session?.label === "Focusing") {
        return (
            <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={((((focusDuration * 60) - session?.timeRemaining) / (focusDuration * 60)) * 100 )} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${((((focusDuration * 60) - session?.timeRemaining) / (focusDuration * 60)) * 100 )}%`}} // TODO: Increase width % as elapsed time increases
                />
        );
    } else {
        return (
            <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={((((breakDuration * 60) - session?.timeRemaining) / (breakDuration * 60)) * 100 )} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${((((breakDuration * 60) - session?.timeRemaining) / (breakDuration * 60)) * 100 )}%`}} // TODO: Increase width % as elapsed time increases
                />
        );
    }
}