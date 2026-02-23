This is a **Next.js 16** project using **TypeScript**, **Tailwind CSS**, and **Supabase**.

## Project Structure

The project follows a domain-driven structure where core logic is separated from the UI.

### Root Directories

- **`app/`**: Next.js App Router directory. Contains the file-system based routing for both the frontend pages and API endpoints (`app/api`).
- **`components/`**: React components.
  - `layout/`: Structural components like headers, sidebars, and wrappers.
  - `ui/`: Reusable, generic UI components (buttons, inputs, cards, etc.).
  - `view/`: Complex, page-specific components that assemble smaller UI components.
- **`core/`**: Base architecture and shared utilities.
  - `api/`: API client configurations and helpers.
  - `db/`: Database connection and configuration (Supabase).
  - `model/`, `repository/`, `service/`: Base classes and interfaces for the application's layered architecture.
  - `errors/`: Custom error classes and handling logic.
- **`lib/`**: Domain-specific business logic, organized by feature (e.g., `course`, `user`, `lesson`).
  - Each folder typically contains the specific models, repositories, services, and types for that domain entity.
- **`routes/`**: Routing configuration, including route maps, permission guards, and navigation utilities.
- **`hooks/`**: Custom React hooks for shared logic.
- **`context/`**: React Context providers for global state management.
- **`mock/`**: Scripts and utilities for generating mock data (using `@faker-js/faker`).
- **`locales/`**: Internationalization (i18n) files.
- **`public/`**: Static assets like images and icons.
- **`supabase/`**: Supabase specific configurations and migrations.

## Key Technologies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Generate mock data (optional):**

    ```bash
    npm run mock:generate:dev
    ```
