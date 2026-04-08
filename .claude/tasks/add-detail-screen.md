# Agregar una pantalla de detalle / home

## Propósito
Agregar una nueva pantalla de **detalle o home** de un recurso (vista única, no lista) a un módulo existente.

## Inputs necesarios
- **Módulo**: nombre del módulo (ej: `course`)
- **Pantalla**: nombre de la vista (ej: `CourseHomeView`)
- **Campos del DTO**: qué información muestra la vista

## Pasos

### 1. Builder de vista (`modules/<modulo>/presentation/view/builders/<pantalla>/`)
Crear:
- `dto.ts` — tipo TypeScript con los props que necesita la vista
- `index.ts` — función que recibe la entidad de dominio y devuelve el DTO

### 2. Application use-case (`modules/<modulo>/application/use-case/`)
Si no existe, crear el caso de uso que recupera la entidad del repositorio.

### 3. Presentation use-case (`modules/<modulo>/presentation/use-case/`)
Crear el use-case que:
1. Llama al application use-case
2. Usa el builder para construir el DTO

### 4. Route Handler (`app/api/<modulo>/route.ts`)
Crear o extender el endpoint:
```ts
export async function GET(req: Request) {
  const dto = await presentationUseCase.execute(req);
  return NextResponse.json(dto);
}
```

### 5. Ruta de API (`routes/api/`)
Registrar el endpoint en `routes/api/index.ts`:
```ts
const API_MODULO = {
  HOME: "/api/<modulo>",
};
```

### 6. Vista (`components/view/<modulo>/<pantalla>/`)
Crear `<PantallaView>.tsx`:
- Recibe como props el DTO
- Renderiza la UI (puede usar templates de `components/ui/templates/`)
- No hace fetch

### 7. Entrypoint `app/<modulo>/page.tsx`
```tsx
export default function Page() {
  return <FetchCurrentView<MiViewDTO> View={MiPantallaView} />;
}
```

### 8. Ruta de frontend (`routes/app/<modulo>/view.routes.ts`)
Registrar la URL si es una sub-ruta nueva.
