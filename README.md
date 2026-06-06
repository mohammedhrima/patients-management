# Patients Management API 🏥

A small **RESTful CRUD API for managing patient records**, built with **Node.js, Express, and
MySQL**, containerized with Docker Compose, and documented with an interactive **Swagger UI**.

## Tech stack

- **Node.js + Express** (ES modules)
- **MySQL** (via the `mysql2` driver, connection pooling)
- **Docker Compose** — runs MySQL with an init script
- **Swagger UI** (`swagger-ui-express`) — interactive API docs
- **pino** — logging · **dotenv** — config · **cors**

## API endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Health check |
| GET | `/patients` | List patients (latest 100) |
| POST | `/patients` | Create a patient |
| GET | `/patients/:id` | Get a patient by id |
| PUT | `/patients/:id` | Update a patient |
| DELETE | `/patients/:id` | Delete a patient |

**Patient body:**

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "address": "123 Main St",
  "diagnosis": "Seasonal flu",
  "phone": "+212600000000",
  "image_url": "https://example.com/photo.jpg"
}
```

## Interactive docs (Swagger)

Once running, open **http://localhost:8000/api-docs** to explore and test every endpoint from the
browser ("Try it out").

## Getting started

### Prerequisites
- Node.js 18+
- Docker (for the MySQL database)

### 1. Configure environment

```sh
cp .env.example .env      # adjust values if needed
```

`.env`:

```
PORT=8000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=letmein
DB_NAME=patientsdb
DB_CONNECTION_LIMIT=10
```

### 2. Start the database (Docker)

```sh
docker compose up -d      # starts MySQL and runs dbinit/init.sql
```

### 3. Install deps & run the API

```sh
npm install
npm start                 # dev (nodemon) → http://localhost:8000
# or: npm run start:prod
```

### Quick test with curl

```sh
# create
curl -X POST http://localhost:8000/patients -H "Content-Type: application/json" \
  -d '{"first_name":"John","last_name":"Doe","email":"john@example.com","address":"123 Main St","diagnosis":"Flu","phone":"+212600000000","image_url":""}'

# list
curl http://localhost:8000/patients
```

## Project structure

```
src/
├── config/mysql.config.js     # MySQL connection pool (mysql2)
├── controller/patient.controller.js
├── query/patient.query.js     # SQL statements
├── route/patient.route.js     # /patients routes
├── domain/response.js         # uniform JSON response shape
├── util/logger.js             # pino logger
├── swagger.js                 # OpenAPI spec for Swagger UI
└── server.js                  # app entry (mounts /api-docs)
dbinit/init.sql                # schema (patients table)
docker-compose.yml             # MySQL service
```

## Notes

A learning project for building a REST API with Node/Express on top of MySQL, with Dockerized
infrastructure and self-documenting endpoints via Swagger.
