import { Blip, Quadrant, Ring } from "../models/radar.models";

export const blips: Blip[] = [
    {
        name: "Angular",
        description: "A popular front-end framework for building web applications.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "pnpm",
        description: "A fast, disk space efficient package manager for JavaScript.",
        ring: Ring.Trial,
        quadrant: Quadrant.Tools
    },
    {
        name: "Azure DevOps",
        description: "A suite of development tools for CI/CD pipelines, repositories, and project management.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Terraform",
        description: "Infrastructure as Code tool for provisioning and managing cloud resources declaratively.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Git",
        description: "Distributed version control system for tracking changes in source code.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Tools 
    },
    {
        name: "TypeScript",
        description: "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "C#",
        description: "A modern, object-oriented programming language commonly used for backend and enterprise applications.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "ASP.NET Core",
        description: "A cross-platform framework for building high-performance web APIs and applications with .NET.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "GraphQL",
        description: "A query language for APIs that enables flexible and efficient data fetching.",
        ring: Ring.Assess,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "yarn",
        description: "A JavaScript package manager focused on reliability, deterministic installs via lockfiles, and monorepo workspace support.",
        ring: Ring.Caution,
        quadrant: Quadrant.Tools
    },
    {
        name: "Infrastructure-as-Code",
        description: "The practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "NestJS",
        description: "A progressive Node.js framework for building scalable server-side applications, using TypeScript and Angular-inspired decorators.",
        ring: Ring.Assess,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Domain-Driven Design",
        description: "A software design approach that models complex systems around the core business domain, using a shared language between developers and domain experts.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Unit Testing",
        description: "The practice of writing automated tests for individual units of code to verify correctness in isolation.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "VS Code",
        description: "A lightweight but powerful open-source code editor by Microsoft, with a rich extension ecosystem covering debugging, linting, version control, and language support.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Tools
    },
    {
        name: "Oxlint",
        description: "A Rust-based JavaScript and TypeScript linter built for speed, offering significantly faster lint times than ESLint with a growing rule set.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools
    },
    {
        name: "CQRS",
        description: "An architectural pattern that separates read and write responsibilities into distinct models, improving scalability and clarity in complex domains.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Hexagonal Architecture",
        description: "An architectural style that isolates core business logic from external systems via ports and adapters, improving testability and long-term maintainability.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Docker",
        description: "A containerization platform that packages applications and their dependencies into portable, reproducible containers for consistent deployment across environments.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "ETL Pipelines",
        description: "A data integration pattern for extracting data from sources, transforming it to fit business needs, and loading it into a target system or data store.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Event Sourcing",
        description: "A persistence pattern where state changes are stored as an immutable sequence of events, enabling full audit trails, temporal queries, and event replay.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Projections / Read-optimized Models",
        description: "The practice of deriving purpose-built read models from an event stream or write model, optimizing query performance without compromising the integrity of the write side.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Event-Driven Architecture",
        description: "An architectural paradigm where services communicate by producing and consuming events asynchronously, enabling loose coupling, scalability, and resilience.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "MSSQL",
        description: "Microsoft's enterprise relational database platform, offering robust transactional support, strong .NET integration, and mature tooling for complex data workloads.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Supabase",
        description: "An open-source Backend-as-a-Service platform built on PostgreSQL, providing authentication, real-time subscriptions, storage, and auto-generated APIs.",
        ring: Ring.Assess,
        quadrant: Quadrant.Platforms
    },
    {
        name: "KurrentDB",
        description: "A purpose-built event store database (formerly EventStoreDB) optimised for event sourcing workloads, offering persistent subscriptions and stream-based storage.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Service Bus",
        description: "A fully managed enterprise message broker supporting queues and pub/sub topics, enabling reliable asynchronous communication between decoupled services.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure OpenAI",
        description: "Microsoft's managed Azure service providing access to OpenAI models including GPT-4, with enterprise-grade security, compliance, and regional data residency.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Logic Apps",
        description: "A low-code workflow automation platform for integrating Azure services and third-party systems, though with notable trade-offs in testability and maintainability.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Web Apps",
        description: "A fully managed PaaS hosting platform for web applications and APIs, offering scaling, deployment slots, and deep integration with Azure DevOps pipelines.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Container Apps",
        description: "A serverless container hosting platform on Azure supporting scale-to-zero, GPU workloads, and deployment of containers without managing underlying infrastructure.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Application Insights",
        description: "A cloud-native application performance monitoring service providing real-time telemetry, distributed tracing, and diagnostics deeply integrated with the Azure ecosystem.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
];