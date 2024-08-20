# node-ms-DDD-template

This project is a User Management API built with Node.js, following Domain-Driven Design (DDD), using Inversify for dependency injection, TypeScript for static typing, and `inversify-express-utils` for integration with Express.

Project structure

The project follows a DDD architecture, separating responsibilities into different layers:

* src/domain: Contains domain entities, repositories, and services.
* src/application: Contains services.
* src/infrastructure: Contains controllers, middlewares, validators and repository implementations
* src/setup: Contains interfaces, utils and Inversify configuration.
* src/index.ts: Application entry point.

```bash
src
├── application
│   └── services
│       ├── UserAppService.ts
│       └── index.ts
├── domain
│   ├── entities
│   │   ├── User.ts
│   │   └── index.ts
│   ├── repositories
│   │   ├── IUserRepository.ts
│   │   └── index.ts
│   ├── services
│   │   ├── UserService.ts
│   │   └── index.ts
│   └── value-objects
├── infrastructure
│   ├── api
│   │   ├── Server.ts
│   │   ├── controllers
│   │   │   ├── UserController.ts
│   │   │   └── index.ts
│   │   ├── middlewares
│   │   │   ├── CommonMiddleware.ts
│   │   │   ├── ErrorMiddleware.ts
│   │   │   └── index.ts
│   │   └── validators
│   │       ├── UserValidators.ts
│   │       ├── Validation.ts
│   │       └── index.ts
│   └── repositories
│       ├── UserRepository.ts
│       └── index.ts
└── setup
    ├── DependencyContainer.ts
    ├── Envs.ts
    ├── Symbols.ts
    ├── index.ts
    ├── interfaces
    │   ├── DTOs
    │   │   ├── IUserDTO.ts
    │   │   └── index.ts
    │   ├── ICommon.ts
    │   └── index.ts
    └── utils
        ├── Http.ts
        └── index.ts
```

## Prerequisites

- Node.js (v16 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pablorg9/node-ms-DDD-template.git
   cd user-management-api
   ```

2. Install the dependencies:

    ```bash
   yarn install
   ```

3. Build de project:

    ```bash
   yarn build
   ```

3. Run locally:

    ```bash
   yarn local
   ```


## What is Domain-Driven Design (DDD)?

Domain-Driven Design (DDD) is a software development approach focused on modeling complex business domains by closely aligning the software with the business needs and processes. It emphasizes collaboration between domain experts and developers to ensure that the software accurately reflects the domain it is meant to serve.

### Key Concepts of DDD

- **Domain**: The subject area to which your software is applied. It encompasses the core business logic and rules.
- **Entities**: Objects that have a distinct identity within the domain, represented by unique identifiers.
- **Value Objects**: Immutable objects that represent a concept but do not have an identity, such as a date range or a monetary amount.
- **Repositories**: Abstractions that encapsulate the logic for retrieving and storing aggregates.
- **Services**: Operations or behaviors that do not naturally fit within an entity or value object, often representing domain logic that involves multiple objects.

### Benefits of DDD

- **Alignment with Business Goals**: By focusing on the core domain, DDD ensures that the software meets real business needs.
- **Improved Communication**: DDD promotes a shared language (Ubiquitous Language) that is used by both domain experts and developers, reducing misunderstandings.
- **Modularity**: DDD encourages the creation of well-defined modules, making the system easier to understand, develop, and maintain.

### Applying DDD in This Project

In this project, DDD principles are applied by:

- **Domain Layer**: Contains the core business logic, including entities, value objects, and domain services.
- **Application Layer**: Contains the use cases that orchestrate the application logic without dealing with infrastructure concerns.
- **Infrastructure Layer**: Implements repositories, data sources, and integrates with external services, ensuring the separation of concerns.

By following DDD, the project aims to be both scalable and maintainable, while remaining closely aligned with the business domain it is designed to serve.

## Adding New Features

* Domain: Add new entities and repositories in src/domain.
* Application: Create new use cases in src/application/services.
* Infrastructure: Implement repositories, controllers.
* Setup: update Inversify configuration, utils and interfaces

## Best practices and good to know

### 1. Code Formatting with Prettier
This project is currently working with prettier to format the code
### 2. Commit Linting with Husky
Before commit, we check if the commit message has the right structure and we format the code
### 3. Code Linting with ESLint
ESLint with custom rules
### 4. Process Management with PM2
pm2 to managment easily a node.js instance
### 5. Docker Image
Docker image for development and production