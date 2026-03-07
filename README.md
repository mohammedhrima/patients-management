# Patients Management API 🏥

A RESTful API for managing patient records in healthcare systems. Perform CRUD operations on patient data with a secure, HIPAA-compliant backend architecture.

## 🎯 What Does It Do?

This API provides a complete backend solution for managing patient information in hospitals, clinics, or healthcare facilities. You can:

- **Register Patients**: Add new patients with personal and medical information
- **View Patient Records**: Retrieve all patients or find specific patients by ID
- **Update Patient Information**: Modify existing patient records, medical history, and contact details
- **Delete Patient Records**: Remove patient data (with proper authorization)
- **Search Patients**: Find patients by name, ID, date of birth, or other criteria
- **Medical History**: Track patient visits, diagnoses, treatments, and prescriptions
- **Appointment Management**: Schedule and manage patient appointments

## 👤 Who Is It For?

- Healthcare IT developers
- Hospital and clinic management systems
- Medical practice administrators
- Healthcare startups building patient management systems
- Students learning healthcare software development
- Developers building telemedicine platforms

## 🚀 How to Use

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- MySQL database
- API testing tool (Postman, Insomnia, or curl)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd patients-management
```

2. Set up MySQL database:
```sql
CREATE DATABASE patients_db;
USE patients_db;
```

3. Configure database connection:

Edit `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/patients_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

4. Build the project:
```bash
mvn clean install
```

5. Run the application:
```bash
mvn spring-boot:run
```

The API will start on `http://localhost:8080`

### API Endpoints

#### Get All Patients
```http
GET /api/patients
```
Returns a list of all patients in the system.

**Response Example:**
```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1985-06-15",
    "gender": "Male",
    "email": "john.doe@email.com",
    "phone": "+1-555-0123",
    "address": "123 Main St, City, State 12345",
    "bloodType": "O+",
    "allergies": ["Penicillin"],
    "emergencyContact": {
      "name": "Jane Doe",
      "relationship": "Spouse",
      "phone": "+1-555-0124"
    },
    "registrationDate": "2024-01-15T10:30:00"
  }
]
```

#### Get Patient by ID
```http
GET /api/patients/{id}
```
Returns detailed information for a specific patient.

**Response:** Full patient record including medical history.

#### Create a New Patient
```http
POST /api/patients
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "dateOfBirth": "1990-03-22",
  "gender": "Female",
  "email": "jane.smith@email.com",
  "phone": "+1-555-0125",
  "address": "456 Oak Ave, City, State 12345",
  "bloodType": "A+",
  "allergies": ["None"],
  "emergencyContact": {
    "name": "Robert Smith",
    "relationship": "Father",
    "phone": "+1-555-0126"
  }
}
```

**Response:** Returns the created patient with assigned ID.

#### Update Patient Information
```http
PUT /api/patients/{id}
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith-Johnson",
  "email": "jane.johnson@email.com",
  "phone": "+1-555-0127",
  "address": "789 Pine St, City, State 12345"
}
```

**Response:** Returns the updated patient record.

#### Delete a Patient
```http
DELETE /api/patients/{id}
```
Removes the patient record (requires proper authorization).

**Response:** 204 No Content on success.

#### Search Patients
```http
GET /api/patients/search?query={searchTerm}
```
Search patients by name, ID, or other criteria.

#### Get Patient Medical History
```http
GET /api/patients/{id}/medical-history
```
Returns complete medical history including visits, diagnoses, and treatments.

### Testing with curl

```bash
# Get all patients
curl http://localhost:8080/api/patients

# Get patient by ID
curl http://localhost:8080/api/patients/1

# Create a new patient
curl -X POST http://localhost:8080/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Michael",
    "lastName": "Brown",
    "dateOfBirth": "1978-11-30",
    "gender": "Male",
    "email": "michael.brown@email.com",
    "phone": "+1-555-0128",
    "address": "321 Elm St, City, State 12345",
    "bloodType": "B+",
    "allergies": ["Latex"]
  }'

# Update patient
curl -X PUT http://localhost:8080/api/patients/1 \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+1-555-9999",
    "address": "New Address, City, State 12345"
  }'

# Delete patient
curl -X DELETE http://localhost:8080/api/patients/1
```

## 🛠️ Technical Stack

- **Spring Boot**: Modern Java framework for building web applications
- **Spring Web MVC**: RESTful web services
- **Spring Data JPA**: Database access and ORM
- **MySQL**: Relational database for patient data
- **Spring Security**: Authentication and authorization
- **Bean Validation**: Input validation and data integrity
- **Lombok**: Reduce boilerplate code
- **Maven**: Dependency management and build tool
- **Java 17**: Programming language

## 📁 Project Architecture

```
patients-management/
├── src/
│   ├── main/
│   │   ├── java/com/healthcare/patients/
│   │   │   ├── model/
│   │   │   │   ├── Patient.java
│   │   │   │   ├── MedicalHistory.java
│   │   │   │   ├── Appointment.java
│   │   │   │   ├── Prescription.java
│   │   │   │   └── EmergencyContact.java
│   │   │   ├── repository/
│   │   │   │   ├── PatientRepository.java
│   │   │   │   ├── MedicalHistoryRepository.java
│   │   │   │   └── AppointmentRepository.java
│   │   │   ├── service/
│   │   │   │   ├── PatientService.java
│   │   │   │   ├── MedicalHistoryService.java
│   │   │   │   └── AppointmentService.java
│   │   │   ├── controller/
│   │   │   │   ├── PatientController.java
│   │   │   │   ├── MedicalHistoryController.java
│   │   │   │   └── AppointmentController.java
│   │   │   ├── dto/
│   │   │   │   └── (Data Transfer Objects)
│   │   │   ├── security/
│   │   │   │   └── (Security configurations)
│   │   │   └── exception/
│   │   │       └── (Custom exceptions)
│   │   └── resources/
│   │       ├── application.properties
│   │       └── schema.sql
│   └── test/
└── pom.xml
```

### Architecture Layers

1. **Model Layer**: Patient and related entities with JPA annotations
2. **Repository Layer**: Database operations using Spring Data JPA
3. **Service Layer**: Business logic, validation, and HIPAA compliance
4. **Controller Layer**: REST endpoints and HTTP handling
5. **Security Layer**: Authentication, authorization, and data protection
6. **DTO Layer**: Data transfer objects for API requests/responses

## 📊 Data Models

### Patient Entity

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | Long | Primary key | Auto-generated |
| firstName | String | First name | Required, max 50 chars |
| lastName | String | Last name | Required, max 50 chars |
| dateOfBirth | LocalDate | Date of birth | Required, past date |
| gender | String | Gender | Required |
| email | String | Email address | Valid email format |
| phone | String | Phone number | Valid phone format |
| address | String | Home address | Required |
| bloodType | String | Blood type | Optional |
| allergies | List<String> | Known allergies | Optional |
| emergencyContact | EmergencyContact | Emergency contact | Required |
| registrationDate | LocalDateTime | Registration date | Auto-generated |
| lastVisit | LocalDateTime | Last visit date | Auto-updated |

### Medical History Entity

| Field | Type | Description |
|-------|------|-------------|
| id | Long | Primary key |
| patientId | Long | Foreign key to Patient |
| visitDate | LocalDateTime | Date of visit |
| diagnosis | String | Diagnosis |
| treatment | String | Treatment provided |
| prescription | String | Prescribed medications |
| notes | String | Doctor's notes |
| doctorName | String | Attending physician |

## 🔐 Security & Compliance

### HIPAA Compliance Features

- **Data Encryption**: All patient data encrypted at rest and in transit
- **Access Control**: Role-based access control (RBAC)
- **Audit Logging**: All access and modifications logged
- **Data Anonymization**: Support for de-identifying patient data
- **Secure Authentication**: JWT-based authentication
- **Session Management**: Secure session handling

### Security Best Practices

- Password hashing with BCrypt
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CORS configuration
- Rate limiting

## 🧪 Testing

Run tests:
```bash
mvn test
```

Includes:
- Unit tests for service layer
- Integration tests for REST endpoints
- Repository tests
- Security tests
- Validation tests

## 🚀 Deployment

### Build for Production

```bash
mvn clean package
java -jar target/patients-management-0.0.1-SNAPSHOT.jar
```

### Docker Deployment

```dockerfile
FROM openjdk:17-jdk-slim
COPY target/patients-management-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

```bash
docker build -t patients-api .
docker run -p 8080:8080 patients-api
```

### Environment Variables

```bash
export DB_URL=jdbc:mysql://localhost:3306/patients_db
export DB_USERNAME=your_username
export DB_PASSWORD=your_password
export JWT_SECRET=your_secret_key
```

## 📈 Future Enhancements

- [ ] Appointment scheduling system
- [ ] Electronic Health Records (EHR) integration
- [ ] Lab results management
- [ ] Prescription management
- [ ] Insurance information tracking
- [ ] Billing and invoicing
- [ ] Patient portal for self-service
- [ ] Telemedicine integration
- [ ] Medical imaging storage
- [ ] Analytics and reporting
- [ ] HL7/FHIR integration
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please ensure all contributions maintain HIPAA compliance and security standards.

## ⚠️ Important Notice

This is a demonstration project. For production use in healthcare:
- Ensure full HIPAA compliance
- Conduct security audits
- Implement proper backup and disaster recovery
- Obtain necessary certifications
- Consult with healthcare compliance experts

## 📄 License

This project is open source and available for educational purposes. Not intended for production healthcare use without proper compliance review.
