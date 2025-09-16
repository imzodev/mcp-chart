# Present - Visor de Presentaciones para Windsurf IDE

Present es una aplicación web moderna diseñada para visualizar presentaciones generadas por Cascade, el agente de IA de Windsurf IDE. La aplicación se integra directamente con el entorno de desarrollo Windsurf para ofrecer una experiencia de visualización de presentaciones fluida y sin fricciones.

## 🚀 Características

- 🧠 Visualización de presentaciones generadas por IA
- 🎨 Soporte para múltiples temas y estilos
- 📱 Diseño completamente responsivo
- ⚡ Carga rápida y navegación fluida
- 🎭 Transiciones entre diapositivas suaves
- 🌐 Compatibilidad con múltiples formatos de presentación
- 🔍 Zoom y navegación táctil

## 🛠️ Tecnologías

- **Frontend**: Next.js 14 con App Router
- **UI**: shadcn/ui + Tailwind CSS
- **Tipado**: TypeScript
- **Gestión de Estado**: React Context + Hooks
- **Animaciones**: Framer Motion
- **Integración**: Diseñado para ejecutarse dentro de Windsurf IDE
- **Generación de Contenido**: Cascade (IA de Windsurf)

## 🚀 Empezando

### Requisitos previos

- Node.js 18+
- Bun (opcional, recomendado)

### Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
bun install
# o
npm install
```

### Desarrollo

Inicia el servidor de desarrollo:

```bash
bun dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
/app
  /(auth)           # Rutas de autenticación
  /dashboard        # Panel de control
  /presentations    # Gestión de presentaciones
  /api              # Endpoints de la API
  /components       # Componentes reutilizables
  /lib              # Utilidades y lógica de negocio
  /styles           # Estilos globales
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙌 Contribución

Las contribuciones son bienvenidas. Por favor, lee nuestras [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.
