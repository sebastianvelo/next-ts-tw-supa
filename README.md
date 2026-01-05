# template

This is a **Next.js 16** project using **TypeScript**, **Tailwind CSS**, and **Supabase**.

## Project Structure

The project follows a domain-driven structure where core logic is separated from the UI.

### Root Directories

- **`app/`**: Main application routes using Next.js App Router.
  - `api/`: Backend API route handlers (e.g., REST endpoints).
  - `[feature]/`: Frontend pages organized by feature (e.g., `login/`, `user/`).
- **`components/`**: Reusable UI building blocks.
  - `layout/`: Structural components (e.g., `Header`, `Sidebar`, `Shell`).
  - `ui/`: Primitive design system components (e.g., `Button`, `Input`, `Card`).
  - `view/`: Feature-specific visual compositions (e.g., `UserList`, `CourseDetail`).
- **`context/`**: Global state management providers.
  - `[feature]/`: React Contexts for global concerns (e.g., `auth`, `theme`, `toast`).
- **`core/`**: Base architecture and infrastructure.
  - `api/`: HTTP client wrappers and fetch utilities.
  - `db/`: Database clients and configuration (Supabase).
  - `errors/`: Core error types and exception handling classes.
  - `model/`, `service/`: Base abstract classes defining the architectural layers.
- **`errors/`**: Application-level error definitions.
  - `app/`: Domain-specific error dictionaries (e.g., `auth.errors.ts`).
  - `codes.ts`: Centralized enum of all application error codes.
- **`hooks/`**: Custom React hooks.
  - `api/`: Data fetching hooks and SWR wrappers.
  - `form/`: Form logic and validation hooks.
- **`lib/`**: Domain-specific business logic modules.
  - `[domain]/`: Self-contained feature modules (e.g., `user`, `course`) containing their own `Model`, `Repository`, and `Service` implementations.
- **`locales/`**: Internationalization assets.
  - `es/`, `en/`: JSON files containing translation strings.
- **`public/`**: Static assets.
  - `images/`: Publicly accessible images and icons.
- **`routes/`**: Centralized routing configuration.
  - `api/`: proper API route definitions.
  - `app/`: Client-side route constants and navigation helpers.
- **`supabase/`**: Database management.
  - `migrations/`: SQL files for database schema changes and versioning.

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
