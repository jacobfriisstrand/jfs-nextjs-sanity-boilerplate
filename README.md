# Sanity and Next.js

This is a personal [Next.js](https://nextjs.org) boilerplate template bootstrapped with [Sanity.io](https://sanity.io).

## Development Workflow

This project follows an opinionated workflow to maintain code quality and consistency:

### Code Style

- Uses [@antfu/eslint-config](https://github.com/antfu/eslint-config) for strict code formatting and linting
- Enforces kebab-case for filenames (except README.md)
- Uses double quotes and semicolons
- TypeScript-first approach with strict type checking
- Automatic import sorting and organization

### Git Workflow

- Pre-commit hooks run linting and type generation
- Pull requests are automatically linted via GitHub Actions

### Development Practices

- Uses Turbopack for faster development builds
- Automatic TypeScript type generation for Sanity schemas
- Live preview support for Sanity content
- Strict environment variable validation

## Environment Variables

1. Copy the `.env.example` file to create a new `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Fill in the required environment variables in your `.env` file:

   ```
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=your_sanity_dataset
   ```

   You can find these values in your Sanity project settings.

## Getting Started

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Open [http://localhost:3000/admin](http://localhost:3000/admin) to edit content.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run typegen` - Generate TypeScript types from Sanity schemas
