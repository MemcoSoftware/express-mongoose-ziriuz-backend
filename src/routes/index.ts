/**
 * Root Router
 * Redirections to Routers
 */
import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';
import usersRouter from './UserRouter';
import authRouter from './AuthRouter'
import tecnicosRouter from './TecnicoRouter';
import rolesRouter from './RolesRouter';

import sedesRouter from './SedeRouter';


// Server Instance

let server = express();


// Router Instance

let rootRotuer = express.Router();

// Activate request to http://localhost:8000/api

rootRotuer.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api')
    // Send Hello World
    res.send('Welcome to API Restful Express + Nodemon + Jest + TS + React + Swagger + Mongoose');
});


// Redirections to Routers & Controllers

server.use('/', rootRotuer); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter
// Add more routes to the app
server.use('/users', usersRouter) // http://localhost:8000/api/users  --> userRouter
// Auth routes
server.use('/auth', authRouter); // http://localhost:8000/api/auth  --> authRouter
// Tecnicos routes
server.use('/tecnicos',tecnicosRouter);// http://localhost:8000/api/tecnicos  --> tecnicosRouter
server.use('/sedes', sedesRouter)
server.use('/roles', rolesRouter) // http://localhost:8000/api/tecnicos  --> rolesRouter
export default server;