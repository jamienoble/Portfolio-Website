# Creative Collective - Portfolio Website

A modern, responsive single-page application showcasing a professional creative business collective. Built with React, Vite, and Tailwind CSS.

## Features

- **Single Page Application**: Smooth transitions between Home and Contact pages
- **Slide-out Navigation Menu**: Elegant top slide-down menu with icon trigger
- **Home/Portfolio Page**:
  - Company introduction with hero section
  - Extensive portfolio gallery with filtering by category
  - Creator credits for each portfolio item
  - Detailed about section with team members and services
  - Company values showcase
- **Contact Page**:
  - Professional contact form with validation
  - Complete contact information display
  - Business hours and location details
  - Social media links
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional interface with smooth animations

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the repository**:
   ```bash
   cd Portfolio-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production-optimized build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Portfolio-Website/
├── src/
│   ├── components/
│   │   ├── Menu.jsx          # Slide-out navigation menu
│   │   ├── Home.jsx           # Home page wrapper
│   │   ├── Hero.jsx           # Hero section with intro
│   │   ├── Portfolio.jsx      # Portfolio gallery with filtering
│   │   ├── About.jsx          # About section with team & services
│   │   └── Contact.jsx        # Contact form and information
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles with Tailwind
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration

```

## Customization

### Portfolio Items

Edit the `portfolioItems` array in `src/components/Portfolio.jsx` to add your own projects:

```javascript
{
  id: 1,
  title: 'Your Project Title',
  category: 'design', // design, development, photography, video
  image: 'https://your-image-url.com/image.jpg',
  creator: 'Creator Name',
  description: 'Project description'
}
```

### Team Members

Update the `teamMembers` array in `src/components/About.jsx` with your actual team information.

### Contact Information

Modify the contact details in `src/components/Contact.jsx` to reflect your business information.

### Colors and Styling

The site uses Tailwind CSS. You can customize colors in `tailwind.config.js` or modify the existing classes throughout the components.

## Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: Tool for transforming CSS with JavaScript plugins
- **Autoprefixer**: PostCSS plugin to add vendor prefixes automatically

## Browser Support

This website works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available for use.

## Support

For questions or issues, please contact the development team or open an issue in the repository.