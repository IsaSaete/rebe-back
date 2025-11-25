# La Reebe — Backend

### API REST para datos energéticos en tiempo real

Este repositorio (`back-rebe`) contiene el **backend de La Reebe**, una aplicación cuyo objetivo será obtener datos del _Balance Eléctrico_ desde la API pública de la **Red Eléctrica de España (REE)**, almacenarlos en una base de datos PostgreSQL y exponerlos mediante una API REST.

Actualmente, este proyecto se encuentra en su estado inicial, con la instalación base de **NestJS con TypeScript**, un **endpoint de health check** y logs usando `debug`.

---

## 🚀 Tecnologías iniciales

- **NestJS** (framework backend en TypeScript)
- **TypeScript**
- **PostgreSQL** (base de datos prevista)
- **debug** (para logging del servidor)
- **dotenv** (para cargar variables de entorno)

---

## 📦 Estado actual del proyecto

- Servidor NestJS funcional.
- Endpoint de health check: `GET /health` → `{ status: 'ok' }`
- Logs de arranque y errores usando `debug`.
- Test e2e para el health check.

A medida que el desarrollo avance, este README se ampliará con:

- Estructura completa del proyecto
- Documentación de endpoints adicionales
- Integración con la API de REE
- Configuración avanzada de base de datos
- Scripts de despliegue y CI/CD

---

## 📁 Estructura mínima para initial commit

```
back-rebe/
├── src/
│ ├── app.controller.ts
│ ├── app.module.ts
│ └── main.ts
├── test/
│ └── app.e2e-spec.ts
├── package.json
├── tsconfig.json
├── nest-cli.json
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Variables de entorno

Para que la aplicación funcione correctamente, crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`.

Ejemplo de contenido:

- `PORT`: puerto donde se levantará el servidor.
- `DEBUG`: namespace para activar los logs de debug (`debug` package).

---

## 🧩 Scripts iniciales

| Script               | Descripción                                        |
| -------------------- | -------------------------------------------------- |
| `npm run start`      | Inicia la aplicación en modo desarrollo.           |
| `npm run start:dev`  | Inicia la aplicación con recarga automática.       |
| `npm run start:prod` | Inicia la aplicación compilada en modo producción. |
| `npm run build`      | Compila el proyecto a JavaScript en `dist/`.       |
| `npm run test`       | Ejecuta los tests unitarios (Jest).                |
| `npm run test:e2e`   | Ejecuta los tests end-to-end.                      |
| `npm run lint`       | Ejecuta ESLint para analizar el código.            |
| `npm run format`     | Formatea el código con Prettier.                   |

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
