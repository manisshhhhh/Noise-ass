# Noise-ass

Welcome to Noise-ass! This project is designed to help you manage sleep records. You can add, retrieve, and delete sleep records using the provided API endpoints.

## Getting Started

To get started with Noise-ass, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manisshhhhh/Noise-ass.git

2. Navigate to the project directory:

   ```bash
   cd Noise-ass

3. Install dependencies:
   ```bash
   npm install

### Usage


- Start the server:

   ```bash
   npm run server
The server will start and listen on the port specified in your environment variables or default to port 5000.

##### API ENDPOINTS
   The API provides the following endpoints to manage sleep records:
   
  **1. ADD SLEEP RECORD**
  - **URL** : '/api/sleep'
  - **METHOD**: 'POST'
  - **DESCRIPTION**: Allows users to submit their sleep duration along with a timestamp.
  - **Request**:
    
    ```json
    {
     "userId": "string",
     "hours": "number"
    }
    
  - **Response**:
    
    ```json
    {
    "id": "string",
    "userId": "string",
    "hours": "number",
    "timestamp": "string"
    }
    
   - Example request:
     ```bash
       curl -X POST http://localhost:5000/api/sleep -H "Content-Type: application/json" -d '{"userId":"1234", "hours": 7.5}'

  **2. GET SLEEP RECORDS**
  - **URL** : '/api/sleep/:userId'
  - **METHOD**: 'GET'
  - **DESCRIPTION**: Retrieves a list of all sleep records for a given user, sorted by date.
  - **Response**:
    
    ```json
    [
     {
      "id": "string",
      "userId": "string",
      "hours": "number",
      "timestamp": "string"
     }
    ]

   - Example request:
     ```bash
       curl -X GET http://localhost:5000/api/sleep/user1
  **3. DELETE SLEEP RECORD**
  - **URL** : '/api/sleep/:recordId'
  - **METHOD**: 'DELETE'
  - **DESCRIPTION**: Deletes a specific sleep record by its ID.
  - **Response**: No Content with status 204.

   - Example request:
     ```bash
       curl -X DELETE http://localhost:5000/api/sleep/1
### Project structure
    /
    │
    ├── /backend
    │   │
    │   ├── /controllers
    │   │   └── sleepController.js
    │   │
    │   ├── /data
    │   │   └── sleepData.json
    │   │
    │   ├── /middleware
    │   │   └── errorMiddleware.js
    │   │
    │   ├── /routes
    │   │   └── sleepRoutes.js
    │   │
    │   ├── /__tests__
    │   │   └── sleepControllerTest.js
    │   │       ├── addSleepRecord.test.js
    │   │       ├── deleteSleepRecord.test.js
    │   │       └── getSleepRecord.test.js
    │   │
    │   ├── .babelrc
    │   └── server.js
    │__ .env
    |__ .gitignore
    ├── jest.config.js
    ├── package.json
    └── package-lock.json
### Error Handling
  Custom error handling middleware is used to catch and handle errors in a consistent manner. If an error occurs, the server will respond with a JSON object containing the error message.
### Environment Variables
  Make sure to create a .env file in the root directory of your project and add the necessary environment variables. For example: PORT = 5000
  
      
             
## Running Tests
  ```bash
  npm run test
