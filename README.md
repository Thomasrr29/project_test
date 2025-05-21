Catálogo de Animales
Descripción
Este proyecto es un monorepo que contiene tanto el frontend como el backend de una aplicación web para gestionar un catálogo digital de animales. Permite visualizar, agregar, editar y eliminar animales, así como acceder a información detallada de cada especie.
Características

Listado de animales en un grid responsivo
Visualización detallada de cada animal
Enlace directo a búsqueda en Wikipedia
Funcionalidad CRUD completa (Crear, Leer, Actualizar quedo pendiente, Eliminar)
Base de datos para almacenamiento persistente
Documentación de API con Swagger

Tecnologías utilizadas
Frontend

React + Vite
TypeScript
React Router para navegación
Axios para peticiones HTTP
Tailwind CSS para estilos

Backend

NestJS
TypeScript
TypeORM
PostgreSQL
Swagger para documentación de API

📁 Estructura del proyecto
🚀 Backend (NestJS)
project/
├── 📂 dist/                          # Archivos compilados
├── 📂 node_modules/
├── 📂 src/
│   ├── 🐾 animals/                   # Módulo de animales
│   │   ├── 📋 dto/
│   │   │   ├── create-animal.dto.ts
│   │   │   └── update-animal.dto.ts
│   │   ├── 🏛️ entities/
│   │   │   └── animal.entity.ts
│   │   ├── 🎮 animals.controller.ts
│   │   ├── 📦 animals.module.ts
│   │   └── 🔧 animals.service.ts
│   ├── 🔗 common/                    # Recursos compartidos
│   │   └── http-exception.filters.ts
│   ├── ⚙️ config/                    # Configuraciones
│   │   └── persistance.module.ts
│   ├── 📝 types/                     # Definiciones de tipos
│   │   └── animal.types.enum.ts
│   ├── 🏠 app.module.ts              # Módulo principal
│   └── 🚀 main.ts                    # Punto de entrada
├── 🧪 test/                          # Tests
├── 🚫 .env                           # Variables de entorno
├── 🚫 .gitignore                     # Archivos ignorados por Git
├── 📋 .prettierrc                    # Configuración Prettier
├── 🔧 eslint.config.mjs              # Configuración ESLint
├── 🏗️ nest-cli.json                  # Configuración Nest CLI
├── 📦 package-lock.json
├── 📦 package.json
├── 📖 README.md
├── ⚙️ tsconfig.build.json
└── ⚙️ tsconfig.json
💻 Frontend (React + Vite)
project_frontend/
├── 📂 node_modules/
├── 📂 public/                        # Archivos públicos estáticos
├── 📂 src/
│   ├── 🔌 api/                       # Configuración de API
│   │   └── ApiConfig.ts
│   ├── 🎨 assets/                    # Recursos estáticos
│   │   └── react.svg
│   ├── 🧩 components/                # Componentes reutilizables
│   │   ├── ➕ createComponent.tsx
│   │   ├── ❌ ErrorComponent.tsx
│   │   ├── 🦶 footerComponent.tsx
│   │   ├── 🎯 headerComponent.tsx
│   │   ├── 📋 ListAnimals.tsx
│   │   ├── ⏳ Loading.tsx
│   │   ├── 🎭 renderAnimals.tsx
│   │   └── 🔍 searchByIdAnimal.tsx
│   ├── 🪝 hooks/                     # Custom hooks
│   │   └── useData.ts
│   ├── 📄 pages/                     # Páginas principales
│   ├── 🔧 services/                  # Servicios para API
│   │   └── apiServices.ts
│   ├── 📝 types/                     # Definiciones de tipos TypeScript
│   │   ├── animalsTypes.ts
│   │   └── props.ts
│   ├── 🏠 App.tsx                    # Componente principal
│   ├── 📄 index.css                  # Estilos globales
│   └── 🚀 main.tsx                   # Punto de entrada
├── 🌍 .env                           # Variables de entorno
├── 🚫 .gitignore                     # Archivos ignorados por Git
├── 🔧 eslint.config.js               # Configuración ESLint
├── 📄 index.html                     # HTML principal
├── 📦 package-lock.json
├── 📦 package.json
├── 📖 README.md
├── 📱 tsconfig.app.json
├── 🔧 tsconfig.json
├── 📱 tsconfig.node.json
└── ⚡ vite.config.ts                # Configuración Vite
🎯 Componentes Frontend Detallados
ComponenteDescripciónResponsabilidad🎭 renderAnimals.tsxLista de animalesRenderiza el grid de tarjetas de animales➕ createComponent.tsxFormulario de creaciónPermite crear nuevos animales🔍 searchByIdAnimal.tsxBúsqueda por IDBusca un animal específico📋 ListAnimals.tsxContenedor de listaManeja el estado de la lista❌ ErrorComponent.tsxManejo de erroresMuestra mensajes de error⏳ Loading.tsxEstado de cargaIndica procesos en progreso🎯 headerComponent.tsxEncabezadoNavegación principal🦶 footerComponent.tsxPie de páginaInformación adicional
🏗️ Arquitectura Backend
MóduloDescripción🐾 Animals ModuleCRUD completo para gestión de animales⚙️ Config ModuleConfiguración de base de datos y variables🔗 Common ModuleFiltros, pipes y utilidades compartidas📝 Types ModuleEnums y tipos personalizados
Instalación

Clona el repositorio:

bash git clone [https://github.com/tu-usuario/catalogo-animales.git](https://github.com/Thomasrr29/project_test.git)

Configura el backend (NestJS):

bash cd project
npm install

# Configura las variables de entorno
# Crea un archivo .env basado en .env.example

Configura el frontend (React + Vite):

bash cd ../project_frontend
npm install

Inicia el proyecto:

Backend:
bash cd project
npm run start
# o para modo desarrollo:
npm run start
Frontend:
bash cd project_frontend
npm run dev

Accede a la aplicación:

Frontend: http://localhost:5173
API Backend: http://localhost:3000/animals
Documentación API: http://localhost:3000/api



API
El backend proporciona una API RESTful con los siguientes endpoints:
Animales

GET /animals - Obtener todos los animales
GET /animals/:id - Obtener un animal específico
POST /animals/create - Crear un nuevo animal
PATCH /animals/:id - Actualizar un animal existente
DELETE /animals/:id - Eliminar un animal

La documentación completa de la API está disponible en http://localhost:3000/api usando Swagger UI.
