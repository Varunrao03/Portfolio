# Varun Prasanna Rao - Portfolio

A modern, minimalist portfolio website built with React and TypeScript.

## Features

- **Dynamic Animations**: Smooth entrance animations, letter-by-letter name reveal, and interactive hover effects
- **Auto-Rotating Roles**: Professional titles that automatically cycle through different roles
- **Interactive Elements**: Hover effects on profile picture, social links, and navigation button
- **Particle Background**: Animated floating particles with connecting lines
- **Mouse-Tracking Elements**: Background elements that respond to mouse movement
- **Responsive Design**: Optimized for all device sizes
- **TypeScript**: Full type safety and modern React patterns
- **Professional Styling**: Clean, minimalist design with smooth transitions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Customization

### Personal Information

Update your personal information in `src/components/PortfolioLanding.tsx`:

- Name: Update the `name` class content
- Titles: Modify the `titles` class content
- Social Links: Update the LinkedIn and GitHub URLs
- Tagline: Change the introductory text

### Profile Picture

To add your profile picture:

1. Place your image in the `src/assets/` directory
2. Import it in `PortfolioLanding.tsx`
3. Replace the placeholder div with an `<img>` tag

Example:
```tsx
import profileImage from '../assets/your-photo.jpg';

// Replace the profile-picture-placeholder div with:
<img src={profileImage} alt="Varun Prasanna Rao" className="profile-picture" />
```

### Styling

The main styles are in `src/components/PortfolioLanding.css`. You can customize:

- Colors: Update the CSS variables or color values
- Typography: Modify font sizes, weights, and families
- Layout: Adjust spacing, padding, and positioning
- Responsive breakpoints: Update media queries

### Adding More Sections

To add additional portfolio sections:

1. Create new components in `src/components/`
2. Add routing logic to navigate between sections
3. Update the navigation button to handle multiple pages

## Project Structure

```
src/
├── components/
│   ├── PortfolioLanding.tsx    # Main landing page component
│   └── PortfolioLanding.css    # Styles for the landing page
├── App.tsx                     # Main app component
├── App.css                     # App-level styles
├── index.tsx                   # Entry point
└── index.css                   # Global styles
```

## Technologies Used

- React 18
- TypeScript
- CSS3
- Create React App

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
