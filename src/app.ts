import express, { Request, Response, NextFunction } from 'express';
import routes from './routes/test.routes';
import sql from 'sqlite3';
import { createDataBase } from './db/connection';

const app = express();

let db = new sql.Database('.mcu.db', sql.OPEN_READWRITE, (err) => { 
    if(err && err.message == 'SQLITE_CANTOPEN') {
        db.close();
        console.log('Creating databse...');
        createDataBase();
        return;
    } else if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('DB deplyed with success code: 200');        
    }    
});

app.set('port', 3001);
app.use(express.json());
app.use(routes);

export default app;
