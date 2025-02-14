import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress=0, onComplete=() => {} }) => {
    const [percent, setPercent] = useState(progress);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(progress, 0)));
        if(progress > 100) {
            onComplete();
        }
    }, [progress, onComplete]);

    return (
        <div className="progress-bar">
            <span style={{color: `${percent > 49 ? "white": ""}`}}>{percent.toFixed()}%</span>
            <div style={{width: `${percent}%`}}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default ProgressBar;