# Microservice E-Commerce Platform

A production-ready, distributed e-commerce platform built with modern technologies. This project leverages a microservices architecture to provide a scalable, resilient, and maintainable system, featuring a React-based frontend and a robust Spring Boot backend.

## Architecture Overview

The system follows a microservices pattern with a centralized gateway, service discovery, and dedicated services for core business domains.

- **Infrastructure Services**:
  - **Eureka Server**: Service registry and discovery.
  - **Config Server**: Centralized configuration management.
  - **API Gateway**: Entry point for all requests, handling routing and JWT-based authentication.
- **Business Services**:
  - **User Service**: Manages user profiles, registration, and authentication.
  - **Product Service**: Catalog management, inventory, and product details.
  - **Cart Service**: User-specific shopping cart management.
  - **Order Service**: Order processing and history.
- **Frontend**:
  - **E-commerce Frontend**: Modern React SPA for customer interaction.

## Tech Stack

### Backend (Spring Cloud Ecosystem)
- **Framework**: Spring Boot 4.0.4
- **Java Version**: Java 21
- **Cloud Framework**: Spring Cloud 2025.1.1
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: PostgreSQL 16 (Multi-tenant DB approach)
- **Documentation**: SpringDoc OpenAPI (Swagger 3)
- **Build Tool**: Maven

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 8
- **Routing**: React Router 7
- **Styling**: Vanilla CSS (Modern interactive UI)
- **Compiler**: React Compiler enabled

### Infrastructure & CI/CD
- **Containerization**: Docker & Docker Compose
- **CI/CD**: Jenkins (Parallel multi-stage builds)
- **Database**: PostgreSQL with dedicated databases for each service (`productdb`, `userdb`, `cartdb`, `orderdb`)

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Java 21+ (for local development)
- Node.js (for frontend development)
- Maven 3.9+

### Quick Start with Docker
The easiest way to run the entire platform is using Docker Compose:

```bash
docker-compose up --build
```

This will spin up:
- PostgreSQL 16 with pre-initialized databases.
- All backend microservices.
- The infrastructure servers (Config & Eureka).

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
   cd ecommerce_frontend
   npm install
   npm run dev
   ```

## API Documentation

Once the services are running, you can access the interactive API documentation (Swagger UI) for each service:

- **Product Service**: `http://localhost:8082/swagger-ui/index.html`
- **User Service**: `http://localhost:8081/swagger-ui/index.html`
- **Cart Service**: `http://localhost:8083/swagger-ui/index.html`
- **Order Service**: `http://localhost:8084/swagger-ui/index.html`
- **Unified**: `http://localhost:8080/swagger-ui/index.html`

## Project Structure

```text
.
├── api-gateway/          # Central entry point & routing
├── cart-service/         # Cart management logic
├── config-server/        # Centralized configurations
├── eureka-server/        # Service discovery
├── order-service/        # Order processing
├── product-service/      # Product catalog
├── user-service/         # User management
├── ecommerce_frontend/   # React 19 Frontend
├── db/                   # Database initialization scripts
├── docker-compose.yml    # Container orchestration
└── Jenkinsfile           # CI/CD pipeline definition
```

## CI/CD Pipeline

The project includes a `Jenkinsfile` that defines a professional CI/CD pipeline:
- **Build & Test**: Parallel stages for each microservice using JDK 21.
- **Docker Integration**: Services are built as container-ready artifacts.
- **Stashing**: Efficient artifact management between pipeline stages.


