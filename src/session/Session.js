import React from "react";
import { secondsToDuration } from "../utils/duration";
import { CurrentSession, CurrentBar } from "./CurrentSession"


function Session ({ session, focusDuration, breakDuration }) {
    if (session) {
    return (
        <>
            <div>
            {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
            <div className="row mb-2">
            <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                <CurrentSession 
                session={session}
                focusDuration={focusDuration}
                breakDuration={breakDuration}
                />
                {/* TODO: Update message below correctly format the time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
                </p>
            </div>
            </div>
            <div className="row mb-2">
            <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                <CurrentBar 
                session={session}
                focusDuration={focusDuration}
                breakDuration={breakDuration}
                />
                </div>
            </div>
            </div>
            </div>
        </>
    )} else {
        return null;
    }
}

export default Session;