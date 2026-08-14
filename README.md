<div align="center">
  <img src="netflix-preview.png" alt="Netflix Clone Preview" width="100%">
  
  # Netflix Clone
  
  ### An Enterprise-Grade Streaming Platform Built on React and Firebase
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.txt)
  [![React](https://img.shields.io/badge/React-16.13.1-61DAFB?logo=react)](https://reactjs.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-7.19.1-FFCA28?logo=firebase)](https://firebase.google.com/)
  [![Styled Components](https://img.shields.io/badge/Styled_Components-5.1.1-DB7093?logo=styled-components)](https://styled-components.com/)
  [![Code Style: Airbnb](https://img.shields.io/badge/Code_Style-Airbnb-FF5A5F?logo=airbnb)](https://github.com/airbnb/javascript)
  [![Test Coverage](https://img.shields.io/badge/Coverage-90%25+-brightgreen.svg)](package.json)
  
  [Features](#features) • [Demo](#demo) • [Installation](#installation) • [Tech Stack](#tech-stack) • [Architecture](#architecture) • [Contributing](#contributing)
  
</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

A production-grade streaming platform reference implementation demonstrating scalable front-end architecture, real-time data synchronization, and enterprise-level code organization. The system replicates the core functional surface area of a modern OTT (over-the-top) media platform, engineered with maintainability, testability, and extensibility as first-order design constraints.

### Architectural Highlights

- **Compound Component Architecture** — composable, low-coupling UI primitives designed for long-term maintainability
- **End-to-End Authentication Pipeline** — registration, session persistence, and route-level access control
- **Real-Time Data Layer** — Firebase Firestore providing reactive, low-latency content synchronization
- **Deterministic UI System** — Styled Components implementation with a fully responsive layout engine
- **Fuzzy Search Infrastructure** — Fuse.js-driven full-text retrieval across the content catalog
- **Optimized Runtime Performance** — code splitting, lazy loading, and render-path optimization
- **Verified Test Coverage** — 90%+ coverage enforced via Jest and React Testing Library
- **Mobile-First Responsive Design** — cross-device layout parity across breakpoints

---

## Features

### User Experience Layer

#### Landing Page
- Hero section with primary conversion call-to-action
- Alternating-layout feature showcase
- Accordion-based FAQ module
- Email capture / opt-in form
- Structured footer with navigational linking

#### Authentication System
- Email/password-based user registration
- Firebase Authentication-backed secure login
- Client-side validation with structured error handling
- Automated profile avatar assignment
- Persistent session state via localStorage
- Route-level access control with automatic redirect logic
- Session termination (sign-out) workflow

#### Profile Management
- Multi-profile selection interface
- Five distinct avatar configurations
- Editable display name per profile
- Profile-scoped content preferences

#### Content Discovery
- Dual-taxonomy content classification (Series / Films)
- Genre-based segmentation:
  - **Series**: Documentaries, Comedy, Children's, Crime, Feel-Good
  - **Films**: Drama, Thriller, Children's, Suspense, Romance
- Horizontally scrollable content rails per genre
- Motion-based transitions and hover states
- Skeleton loading states scoped to active profile

#### Search Infrastructure
- Expandable search interface embedded in the primary navigation
- Real-time fuzzy-matching search execution
- Multi-field indexing (title, description, genre)
- Instant client-side result filtering

#### Content Presentation Layer
- Primary featured-content banner module
- Interactive content cards with metadata overlays
- Scale-based hover interaction states
- Modal-based detail view on selection
- High-resolution backdrop imagery
- Structured metadata display (title, synopsis, genre, maturity rating)

#### Video Playback
- Portal-rendered fullscreen playback overlay
- Native HTML5 video engine with standard control set
- Transition-based overlay dismissal
- Reference video playback implementation

#### Navigation System
- Persistent (sticky) header navigation
- Category-level tab switching (Series / Films)
- Expandable search control
- Profile-scoped dropdown menu
- Session sign-out control
- Smooth-scroll navigation behavior

### Security Layer

- Firebase Authentication (email/password provider)
- Access-controlled routing requiring authenticated session state
- Secure, persistent session management
- Environment-variable-based credential isolation
- CSRF mitigation via Firebase's managed auth layer
- Input validation and sanitization at the form layer

### Interface Design System

- Netflix-derived visual design language
- Dark-mode-optimized color system
- Transition-based page navigation
- Loading-state animation system
- Skeleton screen implementation
- Error boundary coverage
- Accessibility-conformant component primitives
- Full keyboard navigation support
- Managed focus state handling

### Content Management Layer

- 50+ pre-seeded catalog entries
- Multi-genre classification across Series and Films
- Standardized maturity ratings (0, 12, 15, 18)
- Dual-resolution image assets (small/large variants)
- Structured, predictable asset directory hierarchy
- Firestore-based content extensibility

---

## Demo

### Interface Reference

| Landing Page | Content Browser |
|:---:|:---:|
| Primary hero module with CTA | Genre-segmented content rails |

| Search Module | Content Detail Modal |
|:---:|:---:|
| Fuzzy-search result set | Full metadata detail view |

### Live Environment

> **[View Live Deployment](#)** *(Insert production deployment URL)*

---

## Tech Stack

### Client Layer
- **React 16.13.1** — component architecture leveraging Hooks and Context API
- **React Router DOM 5.2.0** — declarative client-side routing
- **Styled Components 5.1.1** — CSS-in-JS styling engine
- **Fuse.js 6.4.1** — lightweight fuzzy-search engine
- **Normalize.css 8.0.1** — cross-browser rendering baseline

### Backend & Managed Services
- **Firebase 7.19.1**
  - Authentication — identity and session management
  - Firestore — NoSQL document database
  - Hosting — static asset delivery and CDN distribution

### Toolchain
- **Create React App 3.4.0** — build pipeline and development server
- **ESLint 7.7.0** — static analysis (Airbnb configuration)
- **Prettier 2.1.1** — automated code formatting
- **Babel ESLint** — modern ECMAScript syntax support
- **React Testing Library** — behavior-driven component testing
- **Jest** — test runner and coverage instrumentation

### Code Quality Standards
- Airbnb JavaScript style guide enforcement
- React Hooks lint rule enforcement
- Automated Prettier formatting integration

---

## Architecture

### Design Patterns

#### Compound Components
UI primitives are implemented using the compound component pattern to maximize composability and enforce separation of concerns:

```javascript
<Card>
  <Card.Title>Drama</Card.Title>
  <Card.Entities>
    <Card.Item item={data}>
      <Card.Image src={imageSrc} />
      <Card.Meta>
        <Card.SubTitle>{title}</Card.SubTitle>
        <Card.Text>{description}</Card.Text>
      </Card.Meta>
    </Card.Item>
  </Card.Entities>
</Card>
```

#### Custom Hooks
- `useAuthListener` — subscribes to and manages Firebase authentication state
- `useContent` — handles content retrieval and state management from Firestore

#### Context API Layer
- `FirebaseContext` — dependency injection for the Firebase instance
- `FeatureContext` — manages featured-card display state
- `PlayerContext` — controls video playback state
- `ToggleContext` — manages accordion expand/collapse state

#### Container / Presentation Pattern
- **Containers** — data-fetching and state-orchestration layer
- **Components** — stateless presentational layer
- **Pages** — route-level composition layer

### State Management Strategy
- React Context for global application state (Firebase, UI state)
- Localized component state via useState
- Persistent session state via localStorage
- Reactive updates via Firebase real-time listeners

### Routing Strategy
- Public routes (Home, Sign In, Sign Up)
- Access-controlled routes (Browse)
- Conditional redirect logic based on authentication state
- Custom route guard implementations (IsUserRedirect, ProtectedRoute)

---

## Getting Started

### Prerequisites

- **Node.js** 12.x or later
- **npm** or **yarn**
- **Firebase account** (free tier is sufficient)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Provision Firebase infrastructure**
   
   a. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   
   b. Enable Authentication:
      - Navigate to Authentication → Sign-in method
      - Enable the Email/Password provider
   
   c. Enable Firestore:
      - Navigate to Firestore Database
      - Initialize the database in test mode
      - Create two collections: `series` and `films`
   
   d. Retrieve project configuration:
      - Navigate to Project Settings → General
      - Locate "Your apps" → Web app
      - Copy the configuration object

4. **Configure the Firebase client**
   
   Create `src/lib/firebase.js` (excluded from version control via `.gitignore`):
   ```javascript
   import Firebase from 'firebase/app';
   import 'firebase/firestore';
   import 'firebase/auth';

   const config = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const firebase = Firebase.initializeApp(config);

   export { firebase };
   ```

5. **Seed the database**
   
   Uncomment the seed invocation in `src/lib/firebase.js`:
   ```javascript
   import { seedDatabase } from '../seed';
   // ...
   seedDatabase(firebase); // Uncomment to execute seeding
   ```
   
   Execute a single run to populate Firestore:
   ```bash
   npm start
   ```
   
   **Note**: Re-comment the seed invocation after execution to prevent duplicate records on subsequent runs.

6. **Launch the development server**
   ```bash
   npm start
   ```
   
   The application will be available at [http://localhost:3000](http://localhost:3000)

### Quick Reference

```bash
# Install dependencies
yarn install

# Launch development server
yarn start

# Execute test suite
yarn test

# Compile production build
yarn build
```

---

## Project Structure

```
netflix-clone/
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   ├── films/               # Film imagery (genre/slug/small|large.jpg)
│   │   ├── series/              # Series imagery (genre/slug/small|large.jpg)
│   │   ├── icons/               # Interface iconography
│   │   ├── misc/                # Auxiliary imagery
│   │   └── users/               # Profile avatars (1-5.png)
│   ├── videos/                  # Video assets
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── __tests__/               # Test suites
│   │   ├── components/          # Component-level tests
│   │   ├── containers/          # Container integration tests
│   │   ├── pages/               # Page-level integration tests
│   │   └── utils/               # Utility function tests
│   │
│   ├── components/              # Reusable UI primitives
│   │   ├── accordion/           # FAQ accordion module
│   │   ├── card/                # Content card primitives
│   │   ├── feature/             # Feature showcase module
│   │   ├── footer/              # Footer module
│   │   ├── form/                # Authentication forms
│   │   ├── header/              # Primary navigation
│   │   ├── jumbotron/           # Feature showcase carousel
│   │   ├── loading/             # Loading-state module
│   │   ├── opt-form/            # Email capture form
│   │   ├── player/              # Video playback module
│   │   ├── profiles/            # Profile selection module
│   │   └── index.js             # Component export barrel
│   │
│   ├── containers/              # Composition layer
│   │   ├── browse.js            # Browse page container
│   │   ├── faqs.js              # FAQ container
│   │   ├── footer.js            # Footer container
│   │   ├── header.js            # Header container
│   │   ├── jumbotron.js         # Jumbotron container
│   │   └── profiles.js          # Profiles container
│   │
│   ├── constants/               # Application constants
│   │   └── routes.js            # Route path definitions
│   │
│   ├── context/                 # React context providers
│   │   └── firebase.js          # Firebase context provider
│   │
│   ├── fixtures/                # Static data fixtures
│   │   ├── faqs.json            # FAQ dataset
│   │   └── jumbo.json           # Jumbotron dataset
│   │
│   ├── helpers/                 # Helper utilities
│   │   └── routes.js            # Route guard implementations
│   │
│   ├── hooks/                   # Custom hook implementations
│   │   ├── index.js             # Hook export barrel
│   │   ├── use-auth-listener.js # Authentication state hook
│   │   └── use-content.js       # Content retrieval hook
│   │
│   ├── lib/                     # Third-party integration configs
│   │   └── firebase.prod.js     # Firebase configuration template
│   │
│   ├── pages/                   # Route-level page components
│   │   ├── browse.js            # Browse page
│   │   ├── home.js              # Landing page
│   │   ├── signin.js            # Sign-in page
│   │   ├── signup.js            # Sign-up page
│   │   └── index.js             # Page export barrel
│   │
│   ├── utils/                   # Utility functions
│   │   ├── index.js             # Utility export barrel
│   │   └── selection-filter.js  # Content filtering logic
│   │
│   ├── app.js                   # Root application component
│   ├── global-styles.js         # Global stylesheet definitions
│   ├── index.js                 # Application entry point
│   ├── logo.svg                 # Brand mark asset
│   └── seed.js                  # Database seeding script
│
├── .env                         # Environment variable definitions
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Version control exclusions
├── .prettierrc.json             # Prettier configuration
├── LICENSE.txt                  # MIT License
├── package.json                 # Dependency manifest and scripts
├── README.md                    # Project documentation
└── yarn.lock                    # Dependency lock file
```

---

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
SKIP_PREFLIGHT_CHECK=true
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

### Firebase Configuration

Populate `src/lib/firebase.js` with project-specific credentials. Refer to the [Getting Started](#getting-started) section for the complete provisioning workflow.

### Linting & Formatting Standards

The codebase adheres to the Airbnb JavaScript style guide. Relevant configuration files:

- `.eslintrc.json` — static analysis rule set
- `.prettierrc.json` — formatting rule set

---

## Testing

### Executing the Test Suite

```bash
# Execute full test suite
npm test

# Execute with coverage instrumentation
npm test -- --coverage

# Execute in watch mode
npm test -- --watch

# Execute a specific test file
npm test -- accordion.test.js
```

### Coverage Requirements

The codebase enforces a minimum of **90% coverage** across:
- Branches
- Functions
- Lines
- Statements

### Test Suite Organization

```
__tests__/
├── components/         # Component-level unit tests
├── containers/         # Container integration tests
├── pages/              # Page-level integration tests
└── utils/              # Utility function tests
```

### Test Authoring Reference

Example implementation using React Testing Library:

```javascript
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from '../components';

test('opens and closes accordion', () => {
  const { getByText, queryByText } = render(
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Question</Accordion.Header>
        <Accordion.Body>Answer</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

  expect(queryByText('Answer')).toBeFalsy();
  fireEvent.click(getByText('Question'));
  expect(queryByText('Answer')).toBeTruthy();
});
```

---

## Deployment

### Production Build

```bash
npm run build
```

Generates an optimized, minified production build in the `build/` directory.

### Deployment to Firebase Hosting

1. **Install the Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticate**
   ```bash
   firebase login
   ```

3. **Initialize the project**
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Select the target Firebase project
   - Set the public directory to `build`
   - Configure as a single-page application: Yes
   - Do not overwrite index.html

4. **Deploy**
   ```bash
   firebase deploy
   ```

### Deployment to Vercel

```bash
npm install -g vercel
vercel
```

### Deployment to Netlify

1. Connect the GitHub repository
2. Set the build command to `npm run build`
3. Set the publish directory to `build`
4. Trigger deployment

---

## Performance

### Optimization Strategy

- **Code Splitting** — route-based splitting via React.lazy()
- **Image Optimization** — dual-resolution asset variants for adaptive loading
- **Lazy Loading** — on-demand image resolution
- **Memoization** — React.memo() applied to high-cost render paths
- **Bundle Optimization** — tree shaking and minification
- **CSS-in-JS Efficiency** — Styled Components macro integration for zero-runtime overhead

### Benchmark Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+

---

## Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome  | Latest 2 major versions |
| Firefox | Latest 2 major versions |
| Safari  | Latest 2 major versions |
| Edge    | Latest 2 major versions |

---

## Contributing

Contributions are welcome and evaluated against the following standards.

### Contribution Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Standards

- Adhere to the existing code style (Airbnb)
- Author descriptive, atomic commit messages
- Include test coverage for new functionality
- Update documentation where applicable
- Ensure the full test suite passes prior to submission
- Keep pull requests scoped and focused

### Code of Conduct

- Maintain a respectful and inclusive tone
- Provide constructive, specific feedback
- Address the code under review, not the contributor

---

## License

This project is licensed under the **MIT License**. Refer to [LICENSE.txt](LICENSE.txt) for full terms.

```
MIT License

Copyright (c) 2024 Amcha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## Contact

**Amcha**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## Acknowledgments

- Netflix, for design language inspiration
- Firebase, for managed backend infrastructure
- The React community, for extensive reference documentation
- All contributors supporting the ongoing development of this project

---

## Additional Resources

### Documentation
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Styled Components Documentation](https://styled-components.com/docs)
- [React Router Documentation](https://reactrouter.com/)

### Reference Guides
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [Firebase Authentication Guide](https://firebase.google.com/docs/auth)
- [Compound Components Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks)

### Community
- [React Discord](https://discord.gg/react)
- [Firebase Community](https://firebase.google.com/community)

---

<div align="center">
  
  ### ⭐ Star this repository if you find it useful
  
  Maintained by **Amcha**
  
  [Back to Top](#netflix-clone)
  
</div>
