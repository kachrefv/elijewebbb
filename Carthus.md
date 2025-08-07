# Carthus Project Guide: Elijeweb Next.js Application

This document provides a high-level overview and technical guide for the 'Elijeweb' Next.js project, based on an analysis of its core files.

## 1. Project Overview

The 'Elijeweb' project is a modern web application built with Next.js and Tailwind CSS, serving as a landing or marketing page for an AI-powered e-commerce assistant. It highlights features such as automated social media replies, order conversion, stock management, and analytics, specifically tailored for the Tunisian market with support for Tunisian Arabic (Tounsi), French, and Franco-Arabic. The application includes interactive elements like a dark mode toggle and an FAQ section, demonstrating a user-friendly interface.

## 2. Key Technologies & Dependencies

The project leverages a robust set of modern web development technologies:

*   **Framework**: Next.js (v14.2.3)
*   **UI Library**: React (v18.3.1)
*   **Language**: TypeScript (v5.4.5)
*   **Styling**: Tailwind CSS (v3.4.3)
*   **CSS Post-processing**: PostCSS (v8.4.38), Autoprefixer (v10.4.19)
*   **Linting**: ESLint (v8.57.0)
*   **Fonts**: Google Fonts (Inter, Roboto Mono) integrated via `next/font/google`

## 3. File Structure Analysis

The project follows a standard Next.js application structure:

*   `pages/`: Contains the application's routes and page components.
    *   `_app.tsx`: The custom App component, responsible for initializing pages, applying global styles (`globals.css`), and setting up global fonts.
    *   `index.tsx`: The main landing page component, containing UI logic, state management (e.g., dark mode, menu, FAQ), feature lists, and FAQ content.
*   `styles/`: Houses global CSS files.
    *   `globals.css`: Global styles imported into `_app.tsx`.
*   `public/`: (Implicit) Directory for static assets like images, fonts, etc., served directly by Next.js.
*   `next.config.js`: Configuration file for Next.js, defining build options and behaviors.
*   `package.json`: Project metadata, scripts for development and build, and lists all dependencies and dev dependencies.
*   `postcss.config.js`: Configuration for PostCSS plugins, specifically integrating Tailwind CSS and Autoprefixer.
*   `tailwind.config.js`: Tailwind CSS configuration, including dark mode settings, content paths for purging unused CSS, custom font definitions, and a custom color palette inspired by iOS.
*   `tsconfig.json`: TypeScript compiler configuration, defining how TypeScript files are compiled.
*   `README.md`: Project's main documentation, including setup and run instructions.

## 4. Setup & Build Instructions

To get the project up and running, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:3000`.

3.  **Build for Production**:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command compiles the project for production deployment.

4.  **Start Production Server**:
    ```bash
    npm run start
    # or
    yarn start
    ```
    This command serves the production-ready build.

5.  **Run Linter**:
    ```bash
    npm run lint
    ```
    This command runs ESLint to check for code quality and style issues.

## 5. Proposed CI/CD Pipeline

A simple CI/CD pipeline using GitHub Actions can ensure code quality and automate deployments.

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # Or '18' based on project needs
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Build project
        run: npm run build

      # Optional: Add a test step here if tests are implemented
      # - name: Run tests
      #   run: npm test

      # Optional: Deployment step (e.g., to Vercel, Netlify, or custom server)
      # - name: Deploy to Vercel
      #   if: github.ref == 'refs/heads/main'
      #   run: npx vercel deploy --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 6. Architecture Diagram

The application follows a client-side rendered (CSR) or hybrid (SSR/SSG) architecture typical of Next.js, with the browser handling the rendering of React components and styling provided by Tailwind CSS. External interactions, such as with the Meta API, are implied to be handled by an underlying backend service, not directly by this frontend application.

```mermaid
graph TD
    A[User] --> B(Browser);
    B --> C{Next.js Application};
    C -- Renders Pages --> D[pages/index.tsx];
    C -- Applies Styles --> E[Tailwind CSS];
    D -- Uses Components --> F[React Components];
    F -- Manages State --> G[Local Storage / Browser API];
    H[External APIs (e.g., Meta API, Elijeweb Backend)] -- Implied Interaction --> C;
```

## 7. Potential Improvements

1.  **Introduce Comprehensive Testing**: Implement unit tests (e.g., using Jest and React Testing Library) for React components and utility functions, and consider end-to-end tests (e.g., using Cypress or Playwright) for critical user flows. This will significantly improve code reliability and maintainability.
2.  **Component Modularization**: The `pages/index.tsx` file is quite large. Extract reusable UI elements (e.g., Header, Footer, FAQItem, FeatureList, PricingCard) into a dedicated `components/` directory. This improves readability, reusability, and maintainability.
3.  **Enhance Accessibility (A11y)**: Conduct an accessibility audit to ensure the application is usable by individuals with disabilities. Focus on keyboard navigation, semantic HTML, ARIA attributes for interactive elements (like the FAQ accordion and dark mode toggle), and proper color contrast.