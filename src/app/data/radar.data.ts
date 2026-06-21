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
        quadrant: Quadrant.Tools
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
        quadrant: Quadrant.Tools,
        comment: "There is nothing wrong with yarn, but it was just outclassed by pnpm."
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
        quadrant: Quadrant.Tools,
        comment: "I used to use WebStorm or other JetBrains IDEs, but basically consolidated all my development work into VS Code (aside from .NET)"
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
        ring: Ring.Assess,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Docker",
        description: "A containerization platform that packages applications and their dependencies into portable, reproducible containers for consistent deployment across environments.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms,
        comment: "Although Docker is clearly the adopted standard for containerization, I just have some basic knowledge gaps that I never had the time to fill. Thus, Trial for me."
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
        quadrant: Quadrant.Platforms, 
        comment: "I switched to Supabase from Firebase for private projects. So far it got the job done."
    },
    {
        name: "KurrentDB",
        description: "A purpose-built event store database (formerly EventStoreDB) optimised for event sourcing workloads, offering persistent subscriptions and stream-based storage.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms,
        comment: "A database built for event sourcing. Simple enough to use, but just terrible in production. Maybe if they improve the Ops tooling I'll revisite it.."
    },
    {
        name: "Azure Service Bus",
        description: "A fully managed enterprise message broker supporting queues and pub/sub topics, enabling reliable asynchronous communication between decoupled services.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure OpenAI",
        description: "Microsoft's managed Azure service providing access to OpenAI models, with enterprise-grade security, compliance, and regional data residency.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Logic Apps",
        description: "A low-code workflow automation platform for integrating Azure services and third-party systems, though with notable trade-offs in testability and maintainability.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms,
        comment: "Regarding low-code engines one of the better ones, as it's actually version controlled and has decent monitoring and debugging capabilities, but still has the same flaws as every low-code engine."
    },
    {
        name: "Azure Web Apps",
        description: "A fully managed PaaS hosting platform for web applications and APIs, offering scaling, deployment slots, and deep integration with Azure DevOps pipelines.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms,
        comment: "Super easy to use and getting the job done. I just wish you could better understand what the underlying infrastructure is doing from time to time."
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
    {
        name: "Azure SQL",
        description: "A fully managed cloud database service based on the MSSQL engine, offering built-in high availability, automated backups, and native integration with the Azure platform.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
        {
        name: "CI/CD",
        description: "The practice of automating build, test, and deployment pipelines to enable frequent, reliable software delivery.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Renovate Bot",
        description: "An automated dependency update tool that raises pull requests for outdated packages, with highly configurable scheduling, grouping, and auto-merge rules.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools,
        comment: "Hey maybe I've never seen it properly configured but I'm spending more time overlooking its doing than just doing minor updates every second sprint myself.."
    },
    {
        name: "AI Coding Assistant",
        description: "The practice of leveraging large language model-powered tools to assist with code generation, refactoring, documentation, and problem solving during development.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Claude",
        description: "Anthropic's AI assistant, used for code generation, architectural reasoning, documentation, and complex problem solving across the development lifecycle.",
        ring: Ring.Trial,
        quadrant: Quadrant.Tools
    },
    {
        name: "GitHub Copilot",
        description: "An AI-powered coding assistant integrated directly into VS Code, offering inline code completions, chat, and context-aware suggestions backed by OpenAI models.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools
    },
    {
        name: "Microservices Architecture",
        description: "An architectural style that structures an application as a collection of small, independently deployable services each responsible for a specific business capability.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "gRPC",
        description: "A high-performance, contract-first RPC framework using Protocol Buffers for efficient binary serialization, well suited for internal service-to-service communication.",
        ring: Ring.Trial,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Quantum Development Kit",
        description: "Microsoft's SDK for quantum computing, including the Q# language and Azure Quantum integration, currently limited to simulation and early experimentation for most real-world workloads.",
        ring: Ring.Caution,
        quadrant: Quadrant.LanguagesAndFrameworks,
        comment: "I haven't used it for 2 years now so maybe it changed but last time I used it, the developer experience was just really bad."
    },
    {
        name: "Medallion Architecture",
        description: "A data design pattern that organises a data lakehouse into Bronze (raw), Silver (cleaned), and Gold (business-ready) layers, progressively refining data quality and structure.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Low-Code Engines",
        description: "Platforms that enable application development through visual configuration and minimal hand-written code, trading long-term flexibility and testability for short-term delivery speed.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms,
        comment: "Every year there is a new one and they all have the same problem not matter how flexible the building blocks are. There comes the point, where you need more flexibility that the engine can't give you and you end up with messy hacky solution."
    },
    {
        name: "Azure Storage Account",
        description: "Azure's foundational cloud storage service supporting blobs, queues, tables, and file shares, providing durable and highly available object storage for a wide range of workloads.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Azure Key Vault",
        description: "A managed Azure service for securely storing and accessing secrets, certificates, and cryptographic keys, with fine-grained access control and full audit logging.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Microsoft Teams App Development",
        description: "Building integrated Teams applications spanning bots, messaging extensions, tabs, adaptive cards, and SSO — leveraging the Teams extensibility model within the Microsoft 365 ecosystem.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Microsoft Graph API",
        description: "Microsoft's unified REST API surface for accessing data and services across Microsoft 365, including users, mail, calendar, Teams, and SharePoint — enabling deep integration with the Microsoft ecosystem.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Platforms
    },
    {
        name: "Transcription Pipelines",
        description: "The practice of orchestrating end-to-end audio-to-text workflows covering capture, transcription, post-processing, and storage — enabling structured, searchable output from spoken content such as meetings, calls, or recordings.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Entity Framework Core",
        description: "Microsoft's official ORM for .NET, enabling database access through strongly typed C# models with support for migrations, LINQ queries, and deep integration with ASP.NET Core.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Dapper",
        description: "A lightweight .NET micro-ORM that extends IDbConnection with convenient query mapping, offering fine-grained SQL control and high performance for scenarios where EF Core's abstraction is too heavy.",
        ring: Ring.Assess,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Visual Studio",
        description: "Microsoft's full-featured IDE supporting a wide range of languages and platforms including C#, C++, F#, and more, offering advanced debugging, profiling, and designer tooling that complements VS Code for heavier backend and enterprise workloads.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Tools
    },
    {
        name: "DbUp",
        description: "A lightweight .NET library for managing and executing SQL migration scripts, providing explicit, version-controlled schema changes as a transparent alternative to convention-based ORM migrations.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools
    },
    {
        name: "Azure Data Factory",
        description: "A cloud-based ETL and data integration service for orchestrating and automating data movement and transformation pipelines.",
        ring: Ring.Caution,
        quadrant: Quadrant.Platforms,
        comment: "It's a production ready service for ETL pipelines, it just got its quirks and overall the developer experience is not great. Also the debugging experience is just terrible."
    },
    {
        name: "Microsoft Entra ID",
        description: "Microsoft's cloud identity platform, used here specifically from a developer perspective — covering App Registrations, OAuth2/OIDC auth flows, scopes, and service principal configuration for securing applications and API access.",
        ring: Ring.Trial,
        quadrant: Quadrant.Platforms
    },
    {
        name: "NgRx",
        description: "A reactive state management library for Angular applications based on the Redux pattern, using actions, reducers, selectors, and effects to manage complex application state in a predictable, testable way.",
        ring: Ring.Trial,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "SemVer",
        description: "A versioning convention that encodes breaking changes, new features, and patches into a structured MAJOR.MINOR.PATCH scheme, enabling predictable dependency management and clear communication of change impact across teams and consumers.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Progressive Delivery",
        description: "The practice of releasing software incrementally and safely to reduce deployment risk. Covers Feature Flags, Canary Deployments, Blue/Green Deployments, and Zero-Downtime Deployments.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Architecture Decision Records",
        description: "A lightweight documentation practice for capturing significant architectural decisions, their context, and consequences — creating a historical log that helps teams understand why a system is shaped the way it is.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques,
        comment: "ADRs are a nice way to document why a team made a decision at a certain point in time. However, I experienced that  the discoverability of information is just not great if a system is documented over tens or hundreds of ADRs. Asking your AI Assistant might help, but it is still not ideal."
    },
    {
        name: "xUnit",
        description: "A modern, extensible unit testing framework for .NET, offering a clean test lifecycle, parallel test execution, and strong integration with the broader .NET testing ecosystem.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Kreya",
        description: "A modern API client with first-class gRPC support alongside REST and other protocols, offering a clean UI, environment management, and project-based organisation as a compelling alternative to Postman for gRPC-heavy workflows.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools
    },
    {
        name: "HTTP Client Files",
        description: "Plain-text .http files for defining and executing API requests directly within the IDE, keeping API calls version-controlled alongside the codebase and eliminating the need for external tooling.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools,
        comment: "I really started to like this approach. I hope more IDEs pick it up."
    },
    {
        name: "Backend for Frontend",
        description: "An architectural pattern where a dedicated backend service is created per client, tailoring API shape and data aggregation to the specific needs of that frontend rather than exposing a general-purpose API.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "API Gateway",
        description: "An infrastructure pattern providing a single entry point for client traffic, handling cross-cutting concerns such as authentication, rate limiting, routing, and SSL termination.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "arc42",
        description: "A pragmatic, lightweight template for documenting software and system architecture, structuring documentation around 12 sections covering context, building blocks, runtime behaviour, and architectural decisions.",
        ring: Ring.Assess,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Anti-Corruption Layer",
        description: "A structural pattern that isolates a bounded context from external systems or legacy models by introducing a translation layer, preventing foreign concepts and data shapes from leaking into the core domain.",
        ring: Ring.Trial,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Draw.io",
        description: "A free, widely adopted diagramming tool for creating architecture diagrams, flowcharts, and system maps.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Tools
    },
    {
        name: "Excalidraw",
        description: "A lightweight, open-source whiteboard tool for creating informal hand-drawn style diagrams, well suited for quick architectural sketches, whiteboarding sessions, and collaborative ideation.",
        ring: Ring.Trial,
        quadrant: Quadrant.Tools
    },
    {
        name: "Storybook",
        description: "An open-source tool for building and documenting UI components in isolation, providing a sandboxed environment for visual development, interactive controls, and component testing independent of the main application.",
        ring: Ring.Assess,
        quadrant: Quadrant.Tools
    },
    {
        name: "Structured Logging",
        description: "The practice of emitting log entries as machine-readable, key-value data rather than plain text strings — enabling reliable querying, filtering, and alerting in log aggregation platforms.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques
    },
    {
        name: "Team Topologies",
        description: "A model for designing team structures and interactions around four fundamental team types — stream-aligned, platform, enabling, and complicated subsystem — to reduce cognitive load and optimise the flow of change through an organisation.",
        ring: Ring.Assess,
        quadrant: Quadrant.Techniques,
        comment: ""
    },
    {
        name: "GraphQL Federation",
        description: "An architectural approach for composing multiple independent GraphQL APIs into a single unified graph, enabling teams to own and evolve their schema slice autonomously without exposing that complexity to consumers.",
        ring: Ring.Assess,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "Shift-Left Security",
        description: "The practice of integrating security activities earlier in the development lifecycle — including threat modelling, static analysis, and dependency scanning in CI — rather than treating security as a gate at release time.",
        ring: Ring.Assess,
        quadrant: Quadrant.Techniques,
        comment: "It just makes everybodies life easier if you include security aspects from the beginning of the development process. If you include it from the beginning it will barely influence your team's velocity. On the other hand, if you plan it for the end of your project, it'll be a huge pain or will simply not be done at all."
    },
    {
        name: "Defense in Depth",
        description: "A security architecture principle of layering multiple independent controls across infrastructure, application, and data tiers, ensuring no single point of failure exposes the system.",
        ring: Ring.Adopt,
        quadrant: Quadrant.Techniques,
        comment: "This might sounds advanced but it's basically just following best practices. Setup your network zones and policies correctly, use dedicated service principals with only the required permissions, make use of built-in encryption-in-transit and encryption-at-rest mechanisms and you're good to go."
    },
    {
        name: "Rust",
        description: "A systems programming language focused on memory safety, performance, and concurrency without a garbage collector.",
        ring: Ring.Assess,
        quadrant: Quadrant.LanguagesAndFrameworks,
        comment: "As someone who struggled with C++ in the past, I'm having an easier time with Rust. Noneheless, I've never done more than some tutorials from 'The Book'."
    },
];