// OpenAPI spec for the Patients Management API (served via swagger-ui-express at /api-docs)
const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Patients Management API",
    version: "1.0.0",
    description:
      "A simple CRUD REST API for managing patient records (Express + MySQL).",
  },
  servers: [{ url: "http://localhost:8000", description: "Local server" }],
  tags: [{ name: "Patients", description: "Patient CRUD operations" }],
  paths: {
    "/": {
      get: {
        summary: "Health check",
        responses: { 200: { description: "API is up" } },
      },
    },
    "/patients": {
      get: {
        tags: ["Patients"],
        summary: "List all patients",
        responses: { 200: { description: "An array of patients" } },
      },
      post: {
        tags: ["Patients"],
        summary: "Create a new patient",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PatientInput" },
            },
          },
        },
        responses: {
          201: { description: "Patient created" },
          500: { description: "Server error" },
        },
      },
    },
    "/patients/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
          description: "Patient id",
        },
      ],
      get: {
        tags: ["Patients"],
        summary: "Get a patient by id",
        responses: {
          200: { description: "The patient" },
          404: { description: "Not found" },
        },
      },
      put: {
        tags: ["Patients"],
        summary: "Update a patient",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PatientInput" },
            },
          },
        },
        responses: {
          200: { description: "Patient updated" },
          404: { description: "Not found" },
        },
      },
      delete: {
        tags: ["Patients"],
        summary: "Delete a patient",
        responses: {
          200: { description: "Patient deleted" },
          404: { description: "Not found" },
        },
      },
    },
  },
  components: {
    schemas: {
      PatientInput: {
        type: "object",
        required: ["first_name", "last_name", "email"],
        properties: {
          first_name: { type: "string", example: "John" },
          last_name: { type: "string", example: "Doe" },
          email: { type: "string", example: "john.doe@example.com" },
          address: { type: "string", example: "123 Main St, Casablanca" },
          diagnosis: { type: "string", example: "Seasonal flu" },
          phone: { type: "string", example: "+212600000000" },
          image_url: {
            type: "string",
            example: "https://example.com/photo.jpg",
          },
        },
      },
      Patient: {
        allOf: [
          { $ref: "#/components/schemas/PatientInput" },
          {
            type: "object",
            properties: {
              id: { type: "integer", example: 1 },
              created_at: { type: "string", format: "date-time" },
            },
          },
        ],
      },
    },
  },
};

export default swaggerSpec;
