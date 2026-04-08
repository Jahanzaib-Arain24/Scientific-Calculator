import React from 'react';
import Button from './Button';
import { Delete, Divide, X, Minus, Plus } from 'lucide-react';
import './Keypad.css';

const Keypad = ({ onInput, isDeg, isInv }) => {
    const buttons = [
        // Row 1
        { label: isDeg ? 'Deg' : 'Rad', type: 'scientific', className: 'toggle-btn' },
        { label: 'x!', type: 'scientific' },
        { label: '(', type: 'scientific' },
        { label: ')', type: 'scientific' },
        { label: '%', type: 'scientific' },
        { label: 'AC', type: 'function' },
        { label: 'DEL', type: 'function', icon: Delete },

        // Row 2
        { label: 'Inv', type: 'scientific', className: isInv ? 'active-toggle' : '' },
        { label: isInv ? 'asin' : 'sin', type: 'scientific' },
        { label: 'ln', type: 'scientific' },
        { label: '7', type: 'number' },
        { label: '8', type: 'number' },
        { label: '9', type: 'number' },
        { label: '÷', type: 'operator' },

        // Row 3
        { label: 'π', type: 'scientific' },
        { label: isInv ? 'acos' : 'cos', type: 'scientific' },
        { label: 'log10', labelDisplay: 'log', type: 'scientific' },
        { label: '4', type: 'number' },
        { label: '5', type: 'number' },
        { label: '6', type: 'number' },
        { label: '×', type: 'operator' },

        // Row 4
        { label: 'e', type: 'scientific' },
        { label: isInv ? 'atan' : 'tan', type: 'scientific' },
        { label: '√', type: 'scientific' },
        { label: '1', type: 'number' },
        { label: '2', type: 'number' },
        { label: '3', type: 'number' },
        { label: '-', type: 'operator' },

        // Row 5
        { label: 'Ans', type: 'scientific' },
        { label: 'EXP', type: 'scientific' },
        { label: 'x^y', type: 'scientific' },
        { label: '0', type: 'number' },
        { label: '.', type: 'number' },
        { label: '=', type: 'equal' },
        { label: '+', type: 'operator' },
    ];

    return (
        <div className="keypad">
            {buttons.map((btn, index) => (
                <Button
                    key={index}
                    label={btn.labelDisplay || btn.label}
                    onClick={() => onInput(btn.label)}
                    type={btn.type}
                    icon={btn.icon}
                    className={`${btn.className || ''} ${btn.label === '=' ? 'equal' : ''}`}
                />
            ))}
        </div>
    );
};
export default Keypad;
