# express-ts-typeorm-starter

This is a TypeScript-based RESTful API that uses InversifyJS for dependency injection and TypeORM for database interactions. This project is designed to demonstrate a clean and scalable architecture for building Node.js applications.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Dependency Injection](#dependency-injection)
- [Setup and Installation](#setup-and-installation)

## Introduction

This project is built with the following technologies:

- **TypeScript**: For static type checking and modern JavaScript features.
- **Express**: For building the RESTful API.
- **TypeORM**: For database interactions.
- **InversifyJS**: For dependency injection.
- **Reflect-Metadata**: For enabling decorators used by TypeORM and InversifyJS.

## Project Structure

The project is organized as follows:

```
src/
├── application/
│ └── services/
│ └── UserService.ts
├── config/
│ └── container.ts
│ └── config.ts
├── domain/
│ ├── models/
│ │ └── User.ts
│ ├── repositories/
│ │ └── IUserRepository.ts
│ └── services/
│ └── IUserService.ts
├── infrastructure/
│ ├── repositories/
│ │ └── UserRepository.ts
│ └── typeorm/
│ └── entities/
│ └── UserEntity.ts
│ └── ormconfig.ts
├── presentation/
│ ├── controllers/
│ │ └── UserController.ts
│ └── routes/
│ └── UserRoutes.ts
├── app.ts
├── index.ts
└── README.md
```


## Dependency Injection

This project uses **InversifyJS** for dependency injection. The configuration is set up in `config/container.ts`, which binds interfaces to their respective implementations and initializes the TypeORM `DataSource`.

## Setup and Installation

Prerequisites Node.js (>= 14.x) npm or yarn Installation Clone the repository:

```
git clone git@github.com:ArmanHashemi/express-ts-typeorm-starter.git

cd express-ts-typeorm-starter
```

```
npm install
or
yarn install
```
## Running the Application

Compile the TypeScript code:
```
npm start
or
yarn start
```


