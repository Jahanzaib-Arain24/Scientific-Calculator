# 🧮 Scientific Calculator (Pro)

![Light Mode Mockup](./screenshots/Light%20Mode.png)

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://jahanzaibarain.netlify.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A powerful, sleek, and responsive scientific calculator built with React and Math.js, featuring a professional Glassmorphism UI and dynamic theme switching.

---

## 📖 Overview

This **Scientific Calculator** is designed for students, engineers, and math enthusiasts who need a reliable tool with a modern aesthetic. It solves the problem of clunky web calculators by providing a smooth, keyboard-accessible, and visually stunning interface.

**What makes it unique?**
- **Glassmorphism Design**: A premium "frosted glass" effect that looks beautiful on any background.
- **Dual Themes**: Seamlessly switch between high-contrast Dark Mode and clean Light Mode.
- **Comprehensive History**: Keep track of your last 20 calculations effortlessly.
- **Accurate Math Engine**: Powered by `math.js` for robust scientific precision.

**Live Site**: [Scientific Calculator Live](https://jahanzaibarain.netlify.app/)

---

## ✨ Features

- 🎨 **Responsive Glassmorphism UI** - Optimized for mobile, tablet, and desktop.
- 🌓 **Dynamic Theme Toggle** - Switch between Dark and Light modes with a single click.
- 🔬 **Scientific Functions** - Trigonometry (sin, cos, tan), Logarithms (log, ln), Square Root, Powers, and more.
- 📐 **Deg/Rad Modes** - Toggle between degree and radian measurements for trigonometric functions.
- 🕒 **Calculation History** - Track your recent work with a built-in history panel.
- ⌨️ **Keyboard Support** - Use your physical keyboard for fast input (plus Enter for equals).
- ⚡ **Zero Result Reset** - Smart input logic that handles clearing and results professionally.

---

## 🛠️ Built With

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)

### Dependencies
- **Math.js**: Powerful calculation engine.
- **Lucide-React**: Elegant and consistent icon set.
- **Vite**: Ultra-fast build tool and development server.

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 📸 Screenshots

### Dark Mode View (Premium Design)
![Dark Mode Mockup](./screenshots/Dark%20Mode%20Mockup.png)

### Light Mode View
![Light Mode](./screenshots/Light%20Mode.png)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [npm](https://www.npmjs.com/) (installed with Node)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/jahanzaibarain/Scientific-Calculator.git
```

2. **Navigate to project directory**
```bash
   cd Scientific-Calculator
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start the development server**
```bash
   npm run dev
```
   The app will be running at `http://localhost:5173/` (or your configured port).

---

## 💻 Usage

- **Scientific Mode**: Click on **sin**, **cos**, **tan**, etc., to use scientific functions.
- **Inversion**: Use the **Inv** button to access inverse functions like **asin**, **acos**, etc.
- **Switch Modes**: Use the **Deg/Rad** button to change trigonometry measurement units.
- **History**: Click the history icon (top right) to view your previous calculations.
- **Theme**: Click the Sun/Moon icon (top left) to toggle themes.

---

## 🎯 Challenges & Solutions

### Challenge 1: Trigonometric Accuracy in Degrees
**Solution**: Standard JS Math functions use radians. I implemented a custom scope for `math.js` that wraps trig functions to convert inputs/outputs when "Degree" mode is active.

### Challenge 2: Responsive Keypad Layout
**Solution**: Used CSS Grid with flexible fractions and media queries to ensure the keypad remains usable even on small mobile screens.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new mathematical functions or UI improvements:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFunction`)
3. Commit your changes (`git commit -m 'Add new function'`)
4. Push to the branch (`git push origin feature/NewFunction`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Muhammad Jahanzaib**

- 🌐 Portfolio: [Jahanzaib-Portfolio](https://jahanzaib-20.netlify.app/)
- 💼 LinkedIn: [@Jahanzaib-Arain](https://www.linkedin.com/in/jahanzaib-arain/)
- 📧 **Email:** [arainjhanzaib@gmail.com](mailto:arainjhanzaib@gmail.com)
- 💻 GitHub: [@Jahanzaib-Arain24](https://github.com/Jahanzaib-Arain24)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Muhammad Jahanzaib

</div>
