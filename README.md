# Sanity and Next.js

This is a personal [Next.js](https://nextjs.org) boilerplate template bootstrapped with [Sanity.io](https://sanity.io).

## Environment Variables

1. Copy the `.env.example` file to create a new `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Fill in the required environment variables in your `.env` file:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
   ```

   You can find these values in your Sanity project settings.

## Getting Started

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Open [http://localhost:3000/studio](http://localhost:3000/admin) to edit content.
