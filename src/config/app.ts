import express, { Application } from 'express';
import bodyParser from 'body-parser';
import userRoutes from '@presentation/routes/UserRoutes';

const app: Application = express();

app.use(bodyParser.json() as any); // Use body-parser's JSON middleware
app.use(bodyParser.urlencoded({ extended: true }) as any); // Use body-parser's URL-encoded middleware
app.use('/users', userRoutes);

export default app;
