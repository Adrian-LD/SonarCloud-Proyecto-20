# 🎬 Puntualo.com — Red Social Cultural

[![Coverage Status](https://coveralls.io/repos/github/Adrian-LD/SonarCloud-Proyecto-20/badge.svg?branch=main)](https://coveralls.io/github/Adrian-LD/SonarCloud-Proyecto-20?branch=main)

**Puntualo** es una red social innovadora desarrollada por el **Equipo 20** del proyecto SYTW.  
Está pensada para los amantes del entretenimiento —libros, películas y series— que desean compartir sus experiencias culturales, descubrir nuevas obras y conectar con otros usuarios con gustos similares.   

---

## 🧑‍💻 Equipo de Desarrollo

| Integrante | Rol | Contacto |
|-------------|-----|-----------|
| **Saray García Campos** | Desarrolladora Frontend | alu0101544724@ull.edu.es |
| **Víctor Rodríguez Dorta** | Desarrollador Backend | alu0101540153@ull.edu.es |
| **Adrián León Díaz** | Desarrollador| alu0101495668@ull.edu.es |


---

## 📖 Descripción general del proyecto

El proyecto consiste en el desarrollo de una **red social cultural** orientada a los amantes del entretenimiento (libros, películas y series), que buscan compartir y descubrir nuevas experiencias.

El objetivo es ofrecer un espacio donde los usuarios puedan:

- Registrar las obras que han visto o leído.  
- Puntuarlas en una escala del **1 al 10**.  
- Compartir sus opiniones con amigos y otros usuarios.  
- Recibir **recomendaciones cruzadas** (por ejemplo, un libro basado en tus gustos de películas).  






## 🧩️ Stack Tecnológico (MEVN)

El proyecto está basado en el **stack MEVN** (MongoDB, Express.js, Vue.js y Node.js), una combinación moderna que permite trabajar todo el sistema en **JavaScript** y ofrece gran escalabilidad.

| Tecnología | Función | Descripción |
|-------------|----------|-------------|
| **MongoDB** | Base de datos | Sistema NoSQL que almacena documentos en formato JSON. |
| **Express.js** | Framework backend | Manejo de rutas, peticiones y APIs REST. |
| **Vue.js** | Framework frontend | Interfaz interactiva basada en componentes reutilizables. |
| **Node.js** | Entorno servidor | Ejecución eficiente, escalable y basada en eventos. |


---

### 🧪 Pasar pruebas con Coverage

1. **Instalar las dependencias necesarias.**  
   ```bash
    npm run test:coverage
---

## Calidad de Código — SonarCloud y cobertura

Se ha añadido un workflow de GitHub Actions `CI - Tests, Coverage, SonarCloud` en `.github/workflows/ci.yml` que:

- Instala dependencias en la raíz, `client/` y `server/`.
- Ejecuta los tests y genera reportes de coverage (client: `npm run test:coverage`).
- Sube los reportes de coverage a Codecov (si configuras `CODECOV_TOKEN`).
- Ejecuta un análisis de SonarCloud.

Para habilitar SonarCloud en tu repositorio sigue estos pasos:

1. El owner del repositorio debe autorizar la aplicación SonarCloud en GitHub (hacer el repositorio público si deseas usar la versión gratuita de SonarCloud).
2. En el panel de SonarCloud crea el proyecto y obtén:
   - `SONAR_ORGANIZATION`
   - `SONAR_PROJECT_KEY` (o configura el `sonar-project.properties`)
   - `SONAR_TOKEN`
3. En el repositorio de GitHub ve a `Settings > Secrets and variables > Actions` y crea los secretos:
   - `SONAR_TOKEN` (token de SonarCloud)
   - `SONAR_ORGANIZATION` (slug de la organización en SonarCloud)
   - `SONAR_PROJECT_KEY` (clave del proyecto en SonarCloud)
   - Opcional: `CODECOV_TOKEN` (solo necesario para repositorios privados en Codecov)

También se incluye un archivo `sonar-project.properties` en la raíz con valores de plantilla. Ajusta `sonar.projectKey` y `sonar.organization` si lo prefieres.

Notas sobre Codecov/Coveralls:

- El workflow sube cobertura a Codecov usando `codecov/codecov-action@v4`. Si prefieres Coveralls, puedo añadir una alternativa que use `coverallsapp/github-action`.


## 🧠 Ejecución del proyecto

A continuación se describen los pasos para ejecutar **tanto el backend como el frontend** del proyecto.

> ⚠️ Nota: Los comandos exactos pueden variar según la configuración final.  

### 🧩 Backend
1. Clonar el repositorio del proyecto.  
   ```bash
   git clone git@github.com:SyTW2526/Proyecto-E20.git
   cd backend
### 🧩 Fronted 



