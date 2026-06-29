# Ecommerce Frontend - Project Context

## Project Overview
A React-based e-commerce frontend built with Vite, React 19, and React Router 7. Uses React Compiler for optimization.

## Tech Stack
- **Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Routing**: React Router DOM 7.15.0
- **Linting**: ESLint 10.3.0 with React hooks plugin
- **Styling**: CSS Modules (`.module.css`)
- **State Management**: React Context API (no Redux/Zustand)
- **API**: RESTful backend at `http://localhost:8080/api`

## Project Structure
```
src/
├── api/                    # API layer
│   ├── productApi.js       # Product fetching
│   ├── cartApi.js          # Cart CRUD operations
│   ├── userApi.js          # Auth (login, token validation)
│   └── orderApi.js         # Order placement
├── components/             # Reusable UI components
│   ├── HomeComponents/     # HeroSection, Loader, Toast
│   ├── ProductsComponents/ # ProductGrid, CatalogHeader, Pagination, ProductDetails
│   ├── CartComponents/     # Cart, EmptyCart
│   ├── LoginComponents/    # LoginForm, SignupForm, AuthTabs, AuthHeader
│   ├── ProfileComponents/  # Profile, DashboardHeader, AccountSettingsForm, OrderSection
│   └── OrdersComponents/   # Orders, OrderList, OrderHeader, EmptyOrders
├── layouts/                # Route layouts
│   ├── MainLayout.jsx      # Public layout with header/footer
│   ├── AuthLayout.jsx      # Auth pages layout
│   ├── ProtectedRoute.jsx  # Requires authentication
│   └── PublicRoute.jsx     # Redirects authenticated users
├── pages/                  # Page components
│   ├── Home.jsx            # Hero section only
│   ├── ProductsPage.jsx    # Product listing + detail view
│   └── CartPage.jsx        # Shopping cart
├── hooks/                  # Custom hooks
│   ├── useAuth.js          # Access AuthContext
│   └── useToast.js         # Access ToastContext
├── utils/                  # Providers & contexts
│   ├── AuthProvider.jsx    # JWT auth state management
│   ├── ToastProvider.jsx   # Toast notifications
│   └── ContextProducer.js  # Context definitions
└── assets/                 # Static assets
```

## Routing Structure
```
/                          → Home (public)
/products                  → Product listing (public)
/products/:id              → Product detail (public)
/login                     → Login/Signup (public, redirects if authenticated)
/profile                   → User profile (protected)
/orders                    → Order history (protected)
/cart                      → Shopping cart (protected)
```

## Context Providers (in main.jsx order)
1. **BrowserRouter** - Routing
2. **AuthProvider** - JWT authentication state
3. **ToastProvider** - Notification system
4. **App** - Routes

## Authentication Flow
- **Storage**: `localStorage.setItem("accessToken", token)`
- **Validation**: POST `/api/users/validate` with Bearer token
- **Login**: POST `/api/users/login` with email/password
- **Protected routes**: Check `authenticated` state via `useAuth()` hook
- **Public routes**: Redirect to `/` if already authenticated

## API Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/products` | No | List products |
| GET | `/api/products/:id` | No | Get single product |
| POST | `/api/users/login` | No | Login |
| POST | `/api/users/validate` | Yes | Validate token |
| GET | `/api/cart/items` | Yes | Get cart items |
| POST | `/api/cart/items` | Yes | Add to cart |
| PUT | `/api/cart/items/:id` | Yes | Update quantity |
| DELETE | `/api/cart/items/:id` | Yes | Remove item |
| POST | `/api/orders` | Yes | Place order |

## State Management Patterns
- **Server state**: Fetched in `useEffect` on component mount
- **Auth state**: Global via `AuthProvider`
- **Toast state**: Global via `ToastProvider`
- **Cart state**: Mixed - cart items in CartContext, product details fetched per-item
- **Product list**: Context + local state in ProductsPage

## Key Components
- **ProductGrid** - Displays products with sorting/pagination
- **Cart** - Quantity controls, item removal, checkout
- **OrderList** - Static mock data (needs API integration)
- **Profile** - Account settings + order history
- **Toast** - Auto-dismissing notifications (success/error/info)

## Development Commands
```bash
npm run dev       # Start dev server
npm run dev:host  # Start dev server accessible on network
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Environment Requirements
- Node.js (version compatible with Vite 8)
- Backend API running on `http://localhost:8080`

## Known Issues / TODOs
- Orders component uses hardcoded mock data (should fetch from API)
- CartPage fetches product details per item (N+1 problem)
- No TypeScript (JS only)
- No test files present

## Component Development Patterns
- **Reusable Components**: Components in `src/components/` are designed to be reusable across pages
- **Component Organization**: Each feature area has its own subfolder (e.g., HomeComponents, ProductsComponents)
- **Props Drilling Avoidance**: Prefer Context API over props drilling for shared state (auth, toast, cart)
- **Conditional Rendering**: Use logical AND (`&&`) for simple conditions, ternary for if/else
- **Event Handlers**: Prefix with `handle` (e.g., `handleAddToCart`, `handleQuantityChange`)
- **Naming Convention**: PascalCase for component files and names, camelCase for props and state

## State Management Details
- **AuthProvider**: Manages JWT token and user authentication state
  - Provides `authenticated` boolean, `user` object, `login()`, `logout()`, `validateToken()` functions
  - Token stored in localStorage and validated on app load
- **ToastProvider**: Centralized notification system
  - Provides `showToast(message, type)` where type is 'success', 'error', or 'info'
  - Toast auto-dismiss after 3 seconds
- **Cart Context** (in development): Planned migration from prop-drilling to Context API
- **Data Fetching Pattern**: 
  - Fetch data in `useEffect` with empty dependency array for initial load
  - Use loading states (`isLoading`) and error states (`error`) in components
  - Implement retry mechanisms for failed API calls in critical paths

## API Integration Guidelines
- **Base URL**: All API calls use `http://localhost:8080/api` as base (configured in individual API files)
- **Error Handling**: 
  - API functions throw errors for non-2xx responses
  - Components should catch and display errors via Toast
  - Network errors should show generic "Connection error" message
- **Request/Response Format**:
  - POST/PUT requests require JSON.stringify() for body
  - Responses are parsed as JSON automatically in API layer
  - Authentication tokens sent in Authorization header as Bearer token
- **Endpoint Specifics**:
  - Cart operations require authentication (validate token first)
  - Product endpoints are public (no auth required)
  - Order placement validates cart is not empty before processing

## Styling Conventions
- **CSS Modules**: All styles use `.module.css` files with same name as component
- **Class Naming**: 
  - Use descriptive, semantic class names (e.g., `.productCard`, `.cartItem`)
  - Avoid generic names like `.container`, `.box` without prefix
  - Use BEM-like syntax for modifiers: `__element`, `--modifier`
- **Global Styles**: Minimal use; only for reset/baseline in index.css
- **Responsive Design**: Mobile-first approach with media queries at 768px (tablet) and 1024px (desktop)
- **Dark Mode**: Not currently implemented but structured to support via CSS variables

## Performance Considerations
- **React Compiler**: Enabled for automatic memoization and optimization
- **Image Optimization**: 
  - Product images optimized and served in WebP format
  - Lazy loading implemented for below-the-fold images
- **Bundle Splitting**: Vite automatically splits code by route
- **N+1 Problem**: 
  - Current: CartPage fetches product details per item (known issue)
  - Planned: Fetch all cart item products in single request
- **Memoization**: 
  - Use `useMemo` for expensive calculations
  - Use `useCallback` for event handlers passed as props
  - React Compiler handles most automatic memoization

## Recent Architectural Decisions (from commits)
- **ProtectedRoute/PublicRoute Pattern**: 
  - ProtectedRoute redirects to `/login` if not authenticated
  - PublicRoute redirects to `/` if already authenticated (prevents logged-in users from seeing login/signup pages)
- **Context Provider Order**: 
  - BrowserRouter → AuthProvider → ToastProvider → App
  - Ensures authentication state is available before rendering routes
  - Toast available globally for notifications
- **API Layer Abstraction**: 
  - Separate files for each entity (productApi.js, cartApi.js, etc.)
  - Consistent error handling and response formatting
- **Toast Integration**: 
  - Centralized notification system replacing ad-hoc alerts
  - Consistent UX for success/error/info messages

## Gotchas and Common Pitfalls
- **Authentication Timing**: 
  - AuthProvider loads token from localStorage asynchronously
  - Components should not assume `useAuth().authenticated` is immediately available
  - Use loading state or check for `null`/`undefined` values during initialization
- **Cart State Synchronization**: 
  - Cart items stored in context but product details fetched individually
  - Potential for stale data if product changes while in cart (mitigated by refetching on cart open)
- **Form Handling**: 
  - Controlled components required for form inputs
  - Remember to prevent default form submission and handle validation
- **Route Parameters**: 
  - Access via `useParams()` from react-router-dom
  - Remember to convert string IDs to numbers when needed for API calls
- **Error Boundaries**: 
  - Not currently implemented; errors in components can break entire UI
  - Planned addition for production stability