import React, { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { History, Sun, Moon } from 'lucide-react';
import * as math from 'mathjs';
import './Calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [current, setCurrent] = useState('0');
    const [isDeg, setIsDeg] = useState(true);
    const [isInv, setIsInv] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [ans, setAns] = useState('0');
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (!isDark) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isDark]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (/[0-9]/.test(key)) handleInput(key);
            if (['+', '-', '*', '/'].includes(key)) handleInput(key === '*' ? '×' : key === '/' ? '÷' : key);
            if (key === 'Enter' || key === '=') handleInput('=');
            if (key === 'Backspace') handleInput('DEL');
            if (key === 'Escape') handleInput('AC');
            if (key === '.') handleInput('.');
            if (key === '(' || key === ')') handleInput(key);
            if (key === '^') handleInput('x^y');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [expression, current]);

    const handleInput = (btn) => {
        if (btn === 'AC') {
            setExpression('');
            setCurrent('0');
            return;
        }

        if (btn === 'DEL') {
            setExpression(prev => prev.slice(0, -1));
            return;
        }

        if (btn === 'Deg' || btn === 'Rad') {
            setIsDeg(!isDeg);
            return;
        }
        if (btn === 'Inv') {
            setIsInv(!isInv);
            return;
        }

        if (btn === '=') {
            evaluateExpression();
            return;
        }

        if (btn === 'Ans') {
            setExpression(prev => prev + ans);
            return;
        }

        // Logic for appending operators and functions
        let nextChar = btn;
        if (btn === '×') nextChar = '*';
        if (btn === '÷') nextChar = '/';
        if (btn === 'π') nextChar = 'pi';
        if (btn === 'x!') nextChar = '!';
        if (btn === 'x^y') nextChar = '^';
        if (btn === '√') nextChar = 'sqrt(';
        if (btn === 'EXP') nextChar = 'e';
        if (btn === 'ln') nextChar = 'log(';

        const functions = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'log', 'log10'];
        if (functions.includes(btn)) {
            nextChar = `${btn}(`;
        }

        setExpression(prev => {
            // If we just had a result and start typing a number/function, clear and start fresh
            if (current !== '0' && prev === '' && !['+', '-', '*', '/', '^', '!', '×', '÷'].includes(btn)) {
                // But wait, if they type an operator, they want to continue from result.
                // This logic is handled by evaluateExpression clearing expression.
            }

            if (current !== '0' && prev === '') {
                if (['+', '-', '*', '/', '^', '!', '×', '÷'].includes(btn)) {
                    return current + nextChar;
                }
            }
            return prev + nextChar;
        });
    };

    const evaluateExpression = () => {
        if (!expression) return;

        try {
            // Clean up common issues (like open parentheses)
            let exprToEval = expression
                .replace(/×/g, '*')
                .replace(/÷/g, '/');

            // Count open vs closed parentheses
            const openCount = (exprToEval.match(/\(/g) || []).length;
            const closeCount = (exprToEval.match(/\)/g) || []).length;
            if (openCount > closeCount) {
                exprToEval += ')'.repeat(openCount - closeCount);
            }

            const scope = {
                pi: Math.PI,
                e: Math.E
            };

            // Custom trig functions if in Degrees
            if (isDeg) {
                const degreesToRadians = (val) => (val * Math.PI) / 180;
                const radiansToDegrees = (val) => (val * 180) / Math.PI;

                const degTrig = {
                    sin: (x) => Math.sin(degreesToRadians(x)),
                    cos: (x) => Math.cos(degreesToRadians(x)),
                    tan: (x) => Math.tan(degreesToRadians(x)),
                    asin: (x) => radiansToDegrees(Math.asin(x)),
                    acos: (x) => radiansToDegrees(Math.acos(x)),
                    atan: (x) => radiansToDegrees(Math.atan(x)),
                };
                Object.assign(scope, degTrig);
            }

            const result = math.evaluate(exprToEval, scope);
            const formattedResult = Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(10)).toString();

            setHistory(prev => [`${expression} = ${formattedResult}`, ...prev.slice(0, 19)]);
            setAns(formattedResult);
            setCurrent(formattedResult);
            setExpression('');
        } catch (error) {
            console.error(error);
            setCurrent('Error');
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-glass">
                <div className="header">
                    <span className="title">JAHANZAIB ARAIN</span>
                    <div className="header-controls">
                        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className="history-btn" onClick={() => setShowHistory(true)}>
                            <History size={18} />
                        </button>
                    </div>
                </div>
                <Display
                    value={current}
                    expression={expression}
                    onShowHistory={() => setShowHistory(true)}
                />
                <Keypad
                    onInput={handleInput}
                    isDeg={isDeg}
                    isInv={isInv}
                />

                {showHistory && (
                    <div className="history-overlay">
                        <h3>History</h3>
                        <ul>
                            {history.length === 0 ? <li>No history</li> : history.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                        <button className="close-history" onClick={() => setShowHistory(false)}>Close History</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
