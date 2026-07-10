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
│   ├── userApi.js          # Auth (login, token validation, user details / updates)
│   └── orderApi.js         # Order placement + user orders
├── components/             # Reusable UI components
│   ├── HomeComponents/     # Header (with auth-aware nav/logout), Loader, Toast
│   ├── ProductsComponents/ # ProductGrid, CatalogHeader, Pagination, ProductDetails, ProductCard
│   ├── CartComponents/     # Cart, CartItem, CartHeader, CartSummary, CheckoutForm, EmptyCart
│   ├── LoginComponents/    # LoginForm, SignupForm, AuthTabs, AuthHeader
│   ├── ProfileComponents/  # Profile, DashboardHeader, AccountSettingsForm, AccountOverview
│   └── OrdersComponents/   # Orders, OrderList, OrderCard, OrderHeader, EmptyOrders
├── layouts/                # Route layouts
│   ├── MainLayout.jsx      # Public layout with header/footer
│   ├── AuthLayout.jsx      # Auth pages layout
│   ├── ProtectedRoute.jsx  # Requires authentication (redirects to /login)
│   └── PublicRoute.jsx     # Redirects authenticated users away (to /)
├── pages/                  # Page components
│   ├── Home.jsx            # Hero section only
│   ├── ProductsPage.jsx    # Product listing + detail view
│   ├── CartPage.jsx        # Shopping cart (fetches products + cart items)
│   ├── OrderPage.jsx       # Order history (fetches orders + products)
│   └── ProfilePage.jsx     # User profile (fetches user details)
├── hooks/                  # Custom hooks
│   ├── useAuth.js          # Access AuthContext (authenticated, user, login, logout, loading)
│   └── useToast.js         # Access ToastContext
├── utils/                  # Providers & contexts
│   ├── AuthProvider.jsx    # JWT auth state management with loading state
│   ├── ToastProvider.jsx   # Toast notifications (1s default duration)
│   └── ContextProducer.js  # Context definitions (Auth, Toast, Cart, ProductDetails, User)
└── assets/                 # Static assets
```

## Routing Structure
```
/                          → Home (public)
/products                  → Product listing (public)
/products/:id              → Product detail (public)
/login                     → Login/Signup (PublicRoute → AuthLayout, redirects to / if authenticated)
/profile                   → User profile via ProfilePage (ProtectedRoute → MainLayout)
/orders                    → Order history via OrderPage (ProtectedRoute → MainLayout)
/cart                      → Shopping cart via CartPage (ProtectedRoute → MainLayout)
```

## Context Providers (in main.jsx order)
1. **BrowserRouter** - Routing
2. **AuthProvider** - JWT authentication state
3. **ToastProvider** - Notification system
4. **App** - Routes

## Authentication Flow
- **Storage**: `localStorage.setItem("accessToken", token)`
- **Validation**: POST `/api/users/validate` with Bearer token (runs once on mount, `deps: []`)
- **Login**: POST `/api/users/login` with email/password, calls `login(token)` which sets `authenticated = true`
- **Logout**: `logout()` removes token from localStorage, sets `authenticated = false`
- **Protected routes**: Wrapped in `<ProtectedRoute />` — checks `authenticated` via `useAuth()`, redirects to `/login` if not authenticated (no history replace)
- **Public routes**: Wrapped in `<PublicRoute />` — redirects authenticated users to `/` (prevents logged-in users from seeing login page)
- **Loading state**: AuthProvider exposes `loading` boolean during token validation; components should check `loading` before rendering protected content
- **Header integration**: Nav bar shows LOGOUT button (calls `logout()`) when authenticated; uses `useAuth()` hook

## API Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/products` | No | List all products |
| GET | `/api/products/:id` | No | Get single product |
| POST | `/api/users/login` | No | Login (email/password) |
| POST | `/api/users/validate` | Yes | Validate token |
| GET | `/api/users` | Yes | Get user details |
| PATCH | `/api/users` | Yes | Update user details (body: `{ name, email }`) |
| GET | `/api/cart/items` | Yes | Get cart items |
| POST | `/api/cart/items` | Yes | Add to cart (body: `{ productId, quantity }`) |
| PUT | `/api/cart/items/:id` | Yes | Update quantity (body: `{ quantity }`) |
| DELETE | `/api/cart/items/:id` | Yes | Remove item |
| POST | `/api/orders` | Yes | Place order (body: `{ address, paymentMethod }`) |
| GET | `/api/orders` | Yes | Get user order history |

## State Management Patterns
- **Server state**: Fetched in `useEffect` on component mount (try/catch/finally pattern with loading state)
- **Auth state**: Global via `AuthProvider` (authenticated, user, login, logout, loading)
- **Toast state**: Global via `ToastProvider` (default duration 1s, supports success/error/info)
- **Cart state**: CartContext holds cart items + products list; individual components look up products from context (resolves N+1)
- **Product list**: Context + local state in ProductsPage; also fetched at page level in CartPage and OrderPage
- **Order state**: Fetched at page level in OrderPage, passed as props to Orders component
- **Profile state**: UserContext holds userDetails and setUserDetails; fetched at page level in ProfilePage and consumed by profile dashboard subcomponents
- **ProductDetailsContext**: Used in cart and orders to map `productId` to product name/image/category
- **Context flow**: Pages fetch data and provide it via Context.Provider to child components — eliminates per-item API calls

## Key Components
- **ProductGrid** - Displays products with sorting/pagination
- **ProductCard** - Product card with "ADD TO CART" button (via `postCartItems` API) + toast feedback
- **Cart** - Quantity controls, item removal, checkout orchestration (form state, validation, API call, toast, navigation)
- **CartItem** - Looks up product name/image from CartContext (eliminates per-item API fetch)
- **CheckoutForm** - Controlled form for delivery details (street, city, ZIP, payment method)
- **CartSummary** - Dynamic pricing (subtotal, 8% tax, total) computed from cart items + product prices
- **OrderPage** - Fetches orders + products, wraps Orders in ProductDetailsContext
- **OrderList** / **OrderCard** - Data-driven order display with product lookup from ProductDetailsContext
- **EmptyOrders** - Empty state for order history with CTA links
- **ProfilePage** - Page-level wrapper; fetches user details via `getUserDetails()` API on mount, manages page state, and wraps layout in `UserContext`
- **Profile** - Dashboard layout rendering `<DashboardHeader />`, `<AccountSettingsForm />`, and `<AccountOverview />`
- **AccountSettingsForm** - Controlled identity form initialized with `userDetails` from `UserContext`; manages local `tempUserDetails` state and executes changes via `updateUserDetails()` PATCH API (includes validation check, toast notifications, and `SAVING....` button states)
- **AccountOverview** - Stats card rendering the dynamic User ID (`0{userDetails.id}`) and active orders count
- **DashboardHeader** - Breadcrumb menu with Link components and dynamic member Registry ID and Join Date info
- **Header** - Auth-aware nav with LOGOUT button for authenticated users
- **Toast** - Auto-dismissing notifications (success/error/info, 1s default)

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
- Vite server exposed on network (`host: true`) with ngrok domain whitelisted (`allowedHosts` in vite.config.js)

## Known Issues / TODOs
- `getAuthHeaders()` duplicated across cartApi.js, userApi.js, and orderApi.js — should be centralized
- AccountOverview uses hardcoded active orders count ("0") — needs API integration
- No TypeScript (JS only)
- No test files present

## Component Development Patterns
- **Reusable Components**: Components in `src/components/` are designed to be reusable across pages
- **Component Organization**: Each feature area has its own subfolder (e.g., HomeComponents, ProductsComponents)
- **Props Drilling Avoidance**: Prefer Context API over props drilling for shared state (auth, toast, cart, product details)
- **Page-Level Data Fetching**: Pages fetch data + product catalog and provide via context providers to child components
- **Conditional Rendering**: Use logical AND (`&&`) for simple conditions, ternary for if/else
- **Event Handlers**: Prefix with `handle` (e.g., `handleAddToCart`, `handleQuantityChange`, `handlePlaceOrder`)
- **Naming Convention**: PascalCase for component files and names, camelCase for props and state
- **Loading States**: Use boolean loading flag with ternary rendering (`loading ? <Loader /> : <Content />`)
- **Auth-Aware Navigation**: Header uses `useAuth()` to conditionally show LOGOUT button; links use `<Link>` from react-router-dom

## State Management Details
- **AuthProvider**: Manages JWT token and user authentication state
  - Provides `authenticated` boolean, `loading` boolean, `login()`, `logout()` functions
  - Token stored in localStorage and validated on app load (runs once via `deps: []`)
  - `loading` is `true` during initial token validation; components should wait for it to settle
  - Error handling with try/catch/finally — sets `loading = false` in finally block
- **ToastProvider**: Centralized notification system
  - Provides `showToast(title, message, type)` where type is 'success', 'error', or 'info'
  - Toast auto-dismiss after 1 second (default duration)
- **Cart Context**: Holds `cartItems`, `setCartItems`, and `productsList` — cart items + product catalog
  - Product lookup done via `productsList.find()` rather than per-item API calls
- **UserContext**: Holds `userDetails` and `setUserDetails` at the profile page level
  - Provided by ProfilePage to prevent multiple component-level user data API requests
- **ProductDetailsContext**: Provides product catalog for order and cart pages
  - Used by OrderPage to pass products to Orders → OrderList → OrderCard
- **Data Fetching Pattern**: 
  - Fetch data in `useEffect` with empty dependency array for initial load
  - Use loading states (`isLoading`) and error states (`error`) in components
  - try/catch/finally pattern with `loading` set in finally block
  - Pages fetch both entity data and product catalog in parallel, then provide via context

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
- **Responsive Design**: Mobile-first approach with extensive breakpoints:
  - 380px / 480px — ultra-compact mobile (single column, smaller fonts)
  - 640px — small mobile (horizontal product card layout)
  - 768px — tablet
  - 900px / 1024px — desktop
  - 1200px — large desktop
  - Fluid typography via `clamp()` for font sizes and spacing
- **Dark Mode**: Not currently implemented but structured to support via CSS variables

## Performance Considerations
- **React Compiler**: Enabled for automatic memoization and optimization
- **Image Optimization**: 
  - Product images optimized and served in WebP format
  - Lazy loading implemented for below-the-fold images
- **Bundle Splitting**: Vite automatically splits code by route
- **N+1 Problem Resolution**: 
  - Previous: CartPage fetched product details per item (known issue)
  - Current: Products fetched once at page level, passed via context — eliminates per-item API calls
  - Both CartPage and OrderPage fetch full product catalog in parallel with entity data
- **Memoization**: 
  - Use `useMemo` for expensive calculations
  - Use `useCallback` for event handlers passed as props
  - React Compiler handles most automatic memoization

## Recent Architectural Decisions (from commits)
- **ProtectedRoute/PublicRoute Pattern**: 
  - ProtectedRoute redirects to `/login` if not authenticated (no history replace — allows back-navigation)
  - PublicRoute redirects to `/` if already authenticated (prevents logged-in users from seeing login/signup pages)
- **Auth Flow Refactor**: 
  - Token validation runs once on mount (`deps: []`) instead of infinite re-validation on `authenticated` change
  - Added `loading` state to AuthProvider — exposed to consumers for async-safe rendering
  - Error handling with try/catch/finally pattern
- **Context Provider Order**: 
  - BrowserRouter → AuthProvider → ToastProvider → App
  - Ensures authentication state is available before rendering routes
  - Toast available globally for notifications
- **API Layer Abstraction**: 
  - Separate files for each entity (productApi.js, cartApi.js, orderApi.js, userApi.js)
  - `getAuthHeaders()` helper extracted (duplicated across API files — pending centralization)
  - Consistent error handling and response formatting
- **Toast Integration**: 
  - Centralized notification system replacing ad-hoc alerts
  - Default duration changed from 100s to 1s for better UX
- **N+1 Resolution Pattern**: 
  - Products fetched once at page level (CartPage, OrderPage) instead of per-item
  - Passed down via CartContext / ProductDetailsContext for component lookup
  - Eliminates individual `getProducts(productId)` calls per cart/order item
- **Order Placement Flow**: 
  - Cart component orchestrates full checkout: controlled form → validation → API call → toast → navigation
  - Successful order clears cart and redirects to `/orders`
- **Server Configuration**: 
  - Vite dev server configured with `host: true` and ngrok domain in `allowedHosts` for external access
- **Responsive Design Expansion**: 
  - Breakpoints expanded from 3 (768px, 1024px) to 6+ (380px, 480px, 640px, 768px, 900px, 1024px, 1200px)
  - Fluid typography via `clamp()` for font sizes and spacing
- **Component-Driven Product Lookup**: 
  - CartItem and OrderCardItem now read product data from context instead of fetching independently
  - Property naming standardized: `productImage`, `productDescription`, etc.
- **Profile Page-Level Fetching & Context Pattern**:
  - Profile layout refactored into a separate wrapper `ProfilePage.jsx` and UI layout `Profile.jsx`.
  - `ProfilePage` executes user data fetching (`getUserDetails`) on mount, manages the layout states (`loading`/`userDetails`), and exposes context via `UserContext.Provider`.
  - Nested components (AccountOverview, DashboardHeader, AccountSettingsForm) consume `UserContext` directly, eliminating duplicate API fetches and hardcoded mock states.
- **Identity Modification Handling**:
  - Added `updateUserDetails` via `PATCH /api/users` endpoint to update full name and email dynamically.
  - Implemented client-side change validation (ignores submission if values are unmodified) to minimize unnecessary network traffic.
  - Added loader and form submission disable states (`SAVING....` button label) and integrated success/error toast feedback via `useToast` hook.
- **Modular CSS Pollution Prevention**:
  - Removed global body resets, standard HTML selections, and custom property declarations from `Profile.module.css` to restrict styles exclusively to modular components. Prevents inadvertent global overrides.

## Gotchas and Common Pitfalls
- **Authentication Timing**: 
  - AuthProvider loads token from localStorage asynchronously (runs once on mount)
  - Components should not assume `useAuth().authenticated` is immediately available
  - Check `loading` state from `useAuth()` — it's `true` during token validation
  - ProtectedRoute does not check `loading` — ensure pages handle initial auth state
- **Cart State Synchronization**: 
  - Cart items stored in context with product catalog fetched at page level
  - Products are refetched on cart/order page mount, reducing stale data risk
  - Cart item quantities updated via dedicated PUT endpoint
- **Form Handling**: 
  - Controlled components required for form inputs (CheckoutForm)
  - Remember to prevent default form submission and handle validation
  - Login button disabled state (`opacity: 0.6`) while API call in progress
- **Route Parameters**: 
  - Access via `useParams()` from react-router-dom
  - Remember to convert string IDs to numbers when needed for API calls
- **Error Boundaries**: 
  - Not currently implemented; errors in components can break entire UI
  - Planned addition for production stability
- **Auth Header Duplication**: 
  - `getAuthHeaders()` is defined in cartApi.js, userApi.js, and orderApi.js separately
  - Changes to auth header logic must be replicated across all three files
  - Consider extracting to a shared utility
- **Default Toast Duration**: 
  - Changed from 100s to 1s — may be too fast for complex error messages
  - Pass explicit `duration` to `showToast()` for important messages
- **Order Page Product Mapping**: 
  - OrderPage fetches all products via `getProducts()` and matches by `productId`
  - If a product is deleted after order placement, lookup returns `undefined`
  - Consider adding fallback UI for missing products