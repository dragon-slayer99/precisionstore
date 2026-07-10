# PrecisionStore - Microservice E-Commerce Platform

A production-ready, distributed e-commerce platform built with modern technologies. This project leverages a microservices architecture to provide a scalable, resilient, and maintainable system, featuring a React-based frontend and a robust Spring Boot backend.

## Architecture Overview

The system follows a microservices pattern with a centralized gateway, service discovery, and dedicated services for core business domains.

- **Infrastructure Services**:
  - **Config Server**: Centralized configuration management (Port 8888)
  - **Eureka Server**: Service registry and discovery (Port 8761)
  - **API Gateway**: Entry point for all requests, handling routing and JWT-based authentication (Port 8080)
- **Business Services**:
  - **User Service**: Manages user profiles, registration, and authentication (Port 8081)
  - **Product Service**: Catalog management, inventory, and product details (Port 8082)
  - **Cart Service**: User-specific shopping cart management (Port 8083)
  - **Order Service**: Order processing and history (Port 8084)
- **Frontend**:
  - **Frontend**: Modern React 19 SPA for customer interaction (Port 5173)

## Tech Stack

### Backend (Spring Cloud Ecosystem)
- **Framework**: Spring Boot 4.0.4
- **Java Version**: Java 21
- **Cloud Framework**: Spring Cloud 2025.1.1
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: PostgreSQL 16 (Multi-tenant DB approach - `productdb`, `userdb`, `cartdb`, `orderdb`)
- **Documentation**: SpringDoc OpenAPI (Swagger 3)
- **Build Tool**: Maven (with wrapper)

### Frontend
- **Framework**: React 19 (with React Compiler enabled)
- **Build Tool**: Vite 8
- **Routing**: React Router 7
- **Styling**: CSS Modules (Component-scoped styling)
- **State Management**: React Context API (Auth, Cart, Products, User, Toast)

### Infrastructure & CI/CD
- **Containerization**: Docker & Docker Compose
- **CI/CD**: Jenkins (Parallel multi-stage builds with Maven wrapper)
- **Database**: PostgreSQL 16 with dedicated databases per service (`productdb`, `userdb`, `cartdb`, `orderdb`)

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Java 21+ (for local development)
- Node.js 18+ (for frontend development)
- Maven 3.9+ (or use Maven wrapper)

### Quick Start with Docker
The easiest way to run the entire platform is using Docker Compose:

```bash
docker-compose up --build
```

This will spin up:
- PostgreSQL 16 with pre-initialized databases (`productdb`, `userdb`, `cartdb`, `orderdb`)
- Config Server (Port 8888)
- Eureka Server (Port 8761)
- All backend microservices
- API Gateway (Port 8080 - Entry point)
- Frontend (Port 5173)

### Local Development Setup

If you wish to run services individually for development:

1. **Start Infrastructure**:
   - `config-server`: Port 8888
   - `eureka-server`: Port 8761

2. **Start Backend Services**:
   - `user-service`: Port 8081
   - `product-service`: Port 8082
   - `cart-service`: Port 8083
   - `order-service`: Port 8084

3. **Start API Gateway**:
   - `api-gateway`: Port 8080 (Entry point)

4. **Start Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## API Documentation

Once the services are running, you can access the interactive API documentation (Swagger UI) for each service:

- **Product Service**: `http://localhost:8082/swagger-ui/index.html`
- **User Service**: `http://localhost:8081/swagger-ui/index.html`
- **Cart Service**: `http://localhost:8083/swagger-ui/index.html`
- **Order Service**: `http://localhost:8084/swagger-ui/index.html`
- **Unified (via Gateway)**: `http://localhost:8080/swagger-ui/index.html`

## Project Structure

```text
.
├── api-gateway/          # Central entry point & routing
├── cart-service/         # Cart management logic
├── config-server/        # Centralized configurations
├── db/                   # Database initialization scripts (init.sql)
├── eureka-server/        # Service discovery
├── frontend/             # React 19 Frontend (Vite + React Compiler)
├── order-service/        # Order processing
├── product-service/      # Product catalog
├── user-service/         # User management
├── docker-compose.yml    # Container orchestration
└── Jenkinsfile           # CI/CD pipeline definition
```

## CI/CD Pipeline

The project includes a `Jenkinsfile` that defines a professional CI/CD pipeline:
- **Build & Test**: Parallel stages for each microservice using JDK 21 (via `eclipse-temurin:21-jdk`)
- **Maven Wrapper**: Uses `mvnw` for consistent builds across environments
- **Artifact Stashing**: Efficient artifact management between pipeline stages
- **Docker Integration**: Services built as container-ready artifacts

## Frontend Details

For detailed frontend documentation, see [frontend/README.md](frontend/README.md).

### Frontend Quick Start
```bash
cd frontend
npm install
npm run dev          # Development server (Port 5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Variables
Create a `.env` file in `frontend/`:
```
VITE_API_BASE_URL=http://localhost:8080/api
```

## Database Initialization

The database is initialized via `db/init.sql` which creates four dedicated databases:
- `productdb` - Product catalog
- `userdb` - User management
- `cartdb` - Shopping cart
- `orderdb` - Order processing

Each service connects to its dedicated database for true multi-tenancy at the database level.