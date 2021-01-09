import React, { useState } from 'react';
import { ButtonStatus } from '../enums/button-status.enum';

function renderEmoji(status: ButtonStatus): JSX.Element {
    let emoji = '۪';
    switch (status) {
        case ButtonStatus.EMPTY:
            break;
        case ButtonStatus.RED_X:
            emoji = '🛑';
            break;
        case ButtonStatus.GREEN_TICK:
            emoji = '✅';
            break;
        case ButtonStatus.QUESTION_MARK:
            emoji = '❓';
            break;
        case ButtonStatus.EXCLAMATION_MARK:
            emoji = '❗️';
            break;
        default:
            break;
    }
    return (
        <span>
            {emoji}
        </span>
    );
}

export function ButtonComponent(): JSX.Element {
    const [status, setStatus] = useState(ButtonStatus.EMPTY);

    function handleClick(): void {
        if (status === 4) {
            return setStatus(0);
        }

        return setStatus(status + 1);
    }

    return (
        <button type="button" onClick={handleClick} style={{ height: '30px', width:'30px' }}>
            {renderEmoji(status)}
        </button>
    );
}
