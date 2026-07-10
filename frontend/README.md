# PrecisionStore Frontend

A modern e-commerce frontend built with React 19, Vite 8, React Router 7, and React Compiler.

## Features

- **Product Catalog** - Browse products with filtering, sorting, and pagination
- **Shopping Cart** - Add/remove items, update quantities, checkout flow
- **User Authentication** - Login, registration, JWT token management
- **Order Management** - View order history and order details
- **User Profile** - Account settings and overview
- **Toast Notifications** - Real-time feedback for user actions

## Tech Stack

- **React 19** - UI library with React Compiler enabled
- **Vite 8** - Build tool and dev server
- **React Router 7** - Client-side routing
- **CSS Modules** - Component-scoped styling
- **Zod** - Schema validation
- **ESLint** - Code linting

## Project Structure

```
src/
├── api/                 # API service modules
├── components/          # Reusable UI components
│   ├── CartComponents/  # Cart-related components
│   ├── HomeComponents/  # Home page components
│   ├── LoginComponents/ # Authentication components
│   ├── OrdersComponents/# Order-related components
│   ├── ProductsComponents/ # Product catalog components
│   └── ProfileComponents/ # User profile components
├── hooks/               # Custom React hooks
├── layouts/             # Page layout components
├── pages/               # Page components
└── utils/               # Context providers and utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev          # Start dev server (Port 5173)
npm run dev:host     # Start dev server accessible on network
```

### Build

```bash
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run dev:host` - Start dev server accessible on network
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Context Providers

The application uses React Context for state management:

- **AuthContext** - Authentication state and methods
- **CartContext** - Shopping cart state
- **ProductDetailsContext** - Product catalog data
- **UserContext** - User profile data
- **ToastContext** - Toast notification system
- **LoginTabContext** - Login/Register tab state

## API Integration

The frontend communicates with a backend REST API. API modules are located in `src/api/`:

- `userApi.js` - Authentication and user management
- `productApi.js` - Product catalog operations
- `cartApi.js` - Shopping cart operations
- `orderApi.js` - Order management