import React from 'react';
import { History } from 'lucide-react';
import './Display.css';

const Display = ({ value, expression, onShowHistory }) => {
    return (
        <div className="display-box">
            <div className="display-header">
                <button className="history-btn-small" onClick={onShowHistory}>
                    <History size={16} />
                </button>
            </div>
            <div className="display-content">
                <div className="expression">{expression}</div>
                <div className="current-value">{value}</div>
            </div>
        </div>
    );
};

export default Display;
