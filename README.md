# Tower Defense Game

A modern tower defense game built with React, TypeScript, and Vite. Defend your territory against waves of monsters by strategically placing and upgrading towers.

## Features

- 🎮 Interactive tower placement and management
- 🐉 Multiple monster types with unique behaviors
- 🏗️ Various tower types with different abilities
- 💥 Dynamic bullet and effect systems
- 🎯 Level-based progression system
- 🎨 Modern UI with Tailwind CSS

## Game Mechanics

### Core Gameplay

- Place towers strategically along the monster's path
- Defend against waves of monsters trying to reach the end
- Earn rewards by defeating monsters
- Manage your resources to build and upgrade towers

### Tower Types

- **Stone Tower**: Basic defensive tower with balanced stats
- **Spike Tower**: Specialized tower with high damage output
- Each tower has unique characteristics:
  - Range of attack
  - Damage per hit
  - Attack speed
  - Cost to build
  - Visual range indicator

### Monster System

- Monsters follow predefined paths
- Different monster types with varying:
  - Health points
  - Movement speed
  - Reward value
  - Visual appearance
- Monsters can move in four directions (up, down, left, right)

### Combat System

- Towers automatically target monsters within their range
- Visual indicators show tower attack ranges
- Bullet system with different projectile types
- Cooldown periods between attacks
- Monster health tracking and damage calculation

### Resource Management

- Earn currency by defeating monsters
- Strategic tower placement to maximize coverage
- Balance between tower costs and monster rewards
- Upgrade system for existing towers

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Headless UI
- Hero Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tower-defense.git
cd tower-defense
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/         # Game assets (images, sounds)
├── bullet/         # Bullet system implementation
├── components/     # Reusable UI components
├── effects/        # Visual effects
├── game/          # Core game logic
├── level/         # Level management
├── monsters/      # Monster types and behaviors
├── towers/        # Tower types and behaviors
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── vampire/       # Vampire-specific game mechanics
```

## Development

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
