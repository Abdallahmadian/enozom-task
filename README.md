Train Management API
This is a Node.js + Express + Prisma + MySQL project for managing trains. It provides basic CRUD operations (Create, Read, Update, Delete) for trains and can be tested easily with Postman.
Features
- Express.js server running on http://localhost:3000
- Prisma ORM connected to MySQL
- CRUD API for trains
- Postman collection for easy testing
Project Setup
1. Clone the repository

git clone https://github.com/Abdallahmadian/enozom-task.git
cd enozom-task

2. Install dependencies
npm install
3. Environment Variables
Create a file named .env in the root folder and add your MySQL connection details:

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

Example:

DATABASE_URL="mysql://root:password@localhost:3306/train_system"

Prisma Setup
4. Prisma Schema
The schema is located in prisma/schema.prisma. Example:

model Train {
  train_id   Int     @id @default(autoincrement())
  train_name String
  capacity   Int
}

5. Generate Prisma Client

npx prisma generate

(Optional) To view your database tables in a GUI:

npx prisma studio

Run the Server

node server.js

Server will start at: http://localhost:3000
API Endpoints
1. Get all trains
GET /trains

2. Create a train
POST /trains
Content-Type: application/json

{
  "train_name": "abdo",
  "capacity": 300
}


3. Update a train
PUT /trains/1
Content-Type: application/json

{
  "train_name": "updated",
  "capacity": 400
}


4. Delete a train
DELETE /trains/1

Testing with Postman

1. Open Postman
2. Create a new request collection
3. Add the above GET, POST, PUT, DELETE requests
4. Make sure body type is set to:
   - raw → JSON (for POST & PUT)

Dependencies
- Express — server framework
- Prisma — ORM for MySQL
- MySQL — database
- Postman — API testing


Abdallah Madian
GitHub: https://github.com/Abdallahmadian
