
# AutoSecLabs — QA, Security & Automation Landing Page

A modern, responsive landing page for AutoSecLabs, a company specializing in QA testing, security testing, and automation services.

## Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS3** with custom animations and effects
- **Responsive Design** with mobile-first approach

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Why choose us section
│   ├── Services.tsx    # Services offered
│   ├── Industries.tsx  # Industries served
│   ├── Testimonials.tsx # Client testimonials
│   ├── Process.tsx     # Our process
│   ├── GlobalPresence.tsx # Global presence
│   ├── Team.tsx        # Team members
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── styles.css         # Global styles
```

## Customization

- Update company information in the components
- Modify colors in `src/styles.css`
- Add or remove sections as needed
- Update contact information and social links

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## License

This project is private and proprietary to AutoSecLabs.
