# Todo API

A simple RESTful API for managing todos built with Express and TypeScript.

## Project Structure

```
/src
  /controllers - Request handlers for each endpoint
    /todos - Todo-specific controllers split by operation
  /models - Data models and types
  /routes - API route definitions
app.ts - Express application setup
```

## API Endpoints

- **POST** `/todos` - Create a new todo  
- **GET** `/todos` - List all todos  
- **PATCH** `/todos/:id` - Update a specific todo  
- **DELETE** `/todos/:id` - Delete a specific todo  

## Data Structure

```typescript
Todo {
  id: string;       // Unique identifier
  text: string;     // Todo content
  completed: boolean; // Completion status
}
```

## Implementation Details

- Built with TypeScript for type safety
- Uses Express.js framework
- In-memory storage (resets on server restart)
- Controllers split into separate files for maintainability
- Basic error handling and input validation
- RESTful API design principles

## Running the Project

1. Install dependencies:  
   ```bash
   npm install
   ```

2. Start server:  
   ```bash
   npm start
   ```

3. API will be available at:  
   [http://localhost:3000/todos](http://localhost:3000/todos)

**Note**: This is a basic implementation using in-memory storage. For production use, integrate with a proper database system.
