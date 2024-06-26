﻿# flow-distribution

# Overview
In this assignment, we have implemented a flow distribution algorithm that allocates users to astrologers in a fair and balanced manner. The system also allows toggling the flow for top astrologers, enabling them to receive more or fewer connections as desired.

# Requirements
Node.js
Express.js or any preferred Node.js framework

# Installation
Clone the repository:

```bash
git clone https://github.com/your-username/flow-distribution.git 
```

Navigate to the project directory:

```bash
cd flow-distribution
```

Install dependencies:

```bash
npm install
```
# Usage
Set up environment variables:

Create a .env file in the project root and specify any necessary environment variables.
```bash
PORT=3000
NODE_ENV=development
```
Start the server:

```bash
node server.js
```
Use the provided API endpoints to interact with the system.

# API Endpoints
GET /api/astrologers: List all astrologers.
POST /api/toggleTopAstrologer/:id: Toggle top astrologer status for a specific astrologer.
POST /api/distributeUsers: Add users and distribute them among astrologers.
GET /api/users: Optional endpoint to list all users (for debugging).

# Testing
Unit tests are provided to validate the functionality of the flow distribution algorithm.

Run tests using the command:

```bash
npm test
```
