# Agregar una pantalla de lista

## Propósito
Agregar una nueva pantalla del tipo **lista** (tabla o tarjetas) a un módulo existente, siguiendo el patrón completo de la arquitectura DDD del proyecto.

## Inputs necesarios
- **Módulo**: nombre del módulo (ej: `product`)
- **Pantalla**: nombre de la vista (ej: `ProductListView`)
- **Tipo de lista**: tabla (`PageTableView`) o tarjetas (`PageCardListView`)
- **Campos del DTO de lista**: qué campos tiene cada ítem de la lista

## Pasos

### 1. DTO de la vista (`presentation/view/models/templates/list-view.ts`)
Asegurate que el template `ListViewDTO` soporta los campos necesarios. Si hay que extenderlo, definí un DTO específico del módulo.

### 2. Builder de vista en el módulo (`modules/<modulo>/presentation/view/builders/<pantalla>/`)
Crear:
- `dto.ts` — extiende `ListViewDTO` con los campos del módulo
- `index.ts` — función que construye el DTO a partir de la entidad de dominio

### 3. Presentation use-case (`modules/<modulo>/presentation/use-case/`)
Crear el use-case que:
1. Llama al `application/use-case` para obtener los datos
2. Usa el builder de vista para transformar a DTO

### 4. Route Handler (`app/api/<modulo>/route.ts`)
Agregar o crear el endpoint que:
1. Llama al presentation use-case
2. Devuelve el DTO serializado como JSON

### 5. Ruta de API (`routes/api/`)
Registrar la URL del nuevo endpoint en `routes/api/index.ts`.

### 6. Vista en `components/view/<modulo>/`
Crear `<PantallaView>.tsx`:
- Recibe como props el DTO de vista
- Usa el template `PageListView` con la variante correspondiente (tabla o tarjetas)
- No hace fetch

### 7. Entrypoint `app/<modulo>/page.tsx`
```tsx
export default function Page() {
  return <FetchListView<MiListViewDTO> ListView={MiPantallaView} />;
}
```

### 8. Ruta de frontend (`routes/app/<modulo>/view.routes.ts`)
Registrar la URL de la nueva pantalla si es una sub-ruta nueva.
