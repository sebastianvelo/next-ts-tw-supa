# next-ts-tw-supa

Template de Next.js con TypeScript, Tailwind CSS y Supabase, organizado bajo principios de **Domain-Driven Design (DDD)**.

---

## Estructura general

```
/
├── app/                    # Entrypoints de Next.js (páginas y layouts)
│   └── api/                # Route Handlers de Next.js (backend)
├── modules/                # Módulos de dominio (DDD)
├── components/             # Componentes React reutilizables
│   ├── layout/             # Componentes de orquestación de fetch
│   ├── ui/                 # Sistema de diseño (atoms, molecules, organisms, templates)
│   └── view/               # Pantallas que reciben props del backend
├── presentation/           # DTOs y parsers globales de vistas
├── routes/                 # Mapeo de rutas (frontend → API)
├── core/                   # Abstracciones transversales (API, repositorios, servicios)
├── db/                     # Clientes de base de datos (Supabase / en memoria)
├── errors/                 # Manejo centralizado de errores
└── locales/                # Traducciones i18n
```

---

## `modules/` — Lógica de negocio (DDD)

Cada módulo representa un **bounded context** de la aplicación y se divide en cuatro capas:

```
modules/
├── auth/           # Autenticación (login, sesión, tokens)
├── authorization/  # Permisos y control de acceso
├── layout/         # Datos generales de la página (sidebar, header, menú)
└── <modulo>/       # Módulo de dominio específico (ej: user)
    ├── application/    # Casos de uso (orquestan domain + infra)
    │   ├── dto/        # DTOs de entrada/salida de los casos de uso
    │   ├── service/    # Servicios de aplicación
    │   └── use-case/   # Implementaciones de casos de uso
    ├── domain/         # Modelos y contratos del dominio
    │   ├── model/      # Entidades y value objects
    │   └── repository.ts  # Interfaz del repositorio
    ├── infra/          # Implementaciones de infraestructura
    │   └── repository/ # Implementación concreta del repositorio (Supabase, memoria, etc.)
    └── presentation/   # Capa de presentación del módulo
        ├── locales/    # Traducciones del módulo
        ├── use-case/   # Casos de uso de presentación (construyen vistas)
        └── view/
            └── builders/
                ├── home/       # Builder de la vista principal (dto.ts + index.ts)
                └── layout/     # Builder del layout (dto.ts + index.ts + sections/)
```

### Cómo fluye una petición

```
app/api/<modulo>/route.ts
  → presentation/use-case (del módulo)
    → application/use-case
      → domain/repository (interfaz)
        → infra/repository (Supabase / memoria)
```

El **presentation use-case** construye el DTO de vista listo para ser consumido por el frontend.

---

## `app/` — Entrypoints de Next.js

Cada ruta de Next.js tiene dos archivos clave:

| Archivo | Responsabilidad |
|---|---|
| `layout.tsx` | Usa `FetchLayoutWithId` para obtener y renderizar el layout del módulo con su sidebar/header |
| `page.tsx` | Usa `FetchCurrentView` o `FetchListView` para obtener y renderizar la vista concreta |

```
app/
├── layout.tsx          # Layout raíz (providers globales)
├── page.tsx            # Página de inicio
├── login/              # Pantalla de login
├── users/
│   ├── layout.tsx      # Obtiene y renderiza el layout del usuario
│   └── page.tsx        # Obtiene y renderiza la vista home del usuario
└── api/
    ├── auth/           # Endpoint de autenticación
    ├── layout/         # Endpoint del layout general
    └── users/          # Endpoint de la vista de usuarios
```

---

## `app/api/` — Route Handlers (backend de Next.js)

Cada endpoint llama al **presentation service** del módulo correspondiente y devuelve el DTO de vista.

```
app/api/
├── auth/route.ts       → modules/auth/presentation
├── layout/route.ts     → modules/layout/presentation
└── users/route.ts      → modules/user/presentation
```

---

## `routes/` — Mapeo de rutas

Centraliza las URLs tanto del frontend como de la API interna.

```
routes/
├── api/        # URLs de los Route Handlers de Next.js (app/api/...)
├── app/        # URLs de las rutas de Next.js (app/...)
├── config/     # Configuración base de rutas
├── types/      # Tipos y segmentos de rutas
├── utils/      # Helpers (ej: pathOf)
└── view/       # Re-export unificado de rutas de frontend
```

Se importan como `API.USERS.BY_ID` (para llamadas al backend) y `ROUTES.USER.HOME` (para navegación).

---

## `components/layout/` — Fetch Orchestrators

Componentes genéricos que abstraen el patrón fetch + loading + render:

| Componente | Cuándo usarlo |
|---|---|
| `FetchLayoutWithId` | En `layout.tsx`: obtiene el layout de un módulo por ID y renderiza `PageLayout` con `children` |
| `FetchCurrentView<T>` | En `page.tsx`: obtiene la vista actual del módulo y renderiza el `View` correspondiente |
| `FetchListView<T>` | En `page.tsx`: obtiene una lista paginada y renderiza un `ListView` (tabla o tarjetas) |

---

## `components/view/` — Pantallas

Componentes React que reciben **exclusivamente props del backend** (DTO de vista). No hacen fetch propio.

```
components/view/
├── login/          # Vista de login
└── user/
    ├── UserHomeLayout.tsx   # Layout del usuario (sidebar, header)
    └── home/                # Vista home del usuario
```

---

## `components/ui/templates/` — Templates de UI

Modelos de plantillas reutilizables que el backend puede indicar como tipo de vista. Sus DTOs viven en `presentation/view/models/templates/`.

| Template | DTO |
|---|---|
| `list/PageListView` | `presentation/view/models/templates/list-view.ts` |
| `form/PageFormView` | `presentation/view/models/templates/` |
| `multi/` | `presentation/view/models/templates/multi-section-view.ts` |
| `tabs/` | — |

---

## `presentation/` — DTOs globales de vistas

Contiene los modelos, parsers y utilidades para construir vistas, compartidos entre módulos.

```
presentation/view/
├── models/
│   ├── main/       # DTO del layout principal (LayoutDTO)
│   ├── atoms/      # Modelos base (botones, badges, etc.)
│   ├── form/       # Modelos de formularios
│   ├── molecules/  # Modelos de componentes compuestos
│   ├── organisms/  # Modelos de secciones complejas
│   └── templates/  # Modelos de plantillas (list-view, multi-section-view)
├── parsers/        # Transformadores de entidades a DTOs
├── queries/        # Helpers para construir queries
├── registry/       # Registro de templates disponibles
└── utils/          # Utilitarios de presentación
```

---

## `core/` — Abstracciones transversales

Infraestructura base no ligada a ningún módulo de negocio.

```
core/
├── api/        # Cliente HTTP base y helpers de fetch
├── errors/     # Tipos y manejo de errores
├── logging/    # Logger
├── model/      # Modelos base (entidad, etc.)
├── repository/ # Clase base de repositorio
├── service/    # Clase base de servicio
└── types/      # Tipos globales
```

---

## `db/` — Clientes de base de datos

```
db/
├── Tables.ts       # Enum con los nombres de las tablas de Supabase
├── supabase/       # Cliente de Supabase
└── memory/         # Implementación en memoria (para desarrollo/testing)
```
