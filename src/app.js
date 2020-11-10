import express from 'express';
import morgan from 'morgan';
import pkg from './../package.json';


// Routers imports
import productsRoute from './routes/products.routes';
import authRoute from './routes/auth.routes';
import usersRoute from './routes/users.routes';

const app = express();



// middlewares
app.use(morgan('dev')); // muestra peticiones por consola
app.use(express.json())


// Routes add

app.use('/products',productsRoute);
app.use(authRoute);
app.use('user',usersRoute);

app.get('/', (req, res) => {
    res.json({
        name: pkg.name,
        autor: pkg.author,
        description: pkg.description,
        version: pkg.version
    });
});


export default app;


