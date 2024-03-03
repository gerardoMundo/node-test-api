import { Router } from 'express';
import sql from 'sqlite3';

const router = Router();

router.get('/pets', (request, response) => {
    let db = new sql.Database('./mcu.db');

    db.all('SELECT * FROM Pets ORDER BY id, name',
        (err, rows) => {
            let pets = JSON.stringify(rows);
            response.end(pets);
        } 
    );
});

router.post('/new-pet', (request, response) => {
    const id = request.query.id;
    const name = request.query.name;
    const owner = request.query.owner;
    const species = request.query.species;
    const color = request.query.color;

    let db = new sql.Database('./mcu.db');
    let result = db.run('insert into Pets values(?, ?, ?, ?, ?);',
        [id, name, owner, species, color]
    );

    response.end('Pet created...');
});

router.put('/update-pet', (request, response) => {
    const id = request.query.id;
    const name = request.query.name;
    const owner = request.query.owner;
    const species = request.query.species;
    const color = request.query.color;

    let db = new sql.Database('./mcu.db');
    let result = db.run('delete from Pets set name = ?, owner = ?, species = ?, color = ? where id = ?;',
        [name, owner, species, color]
    );

    response.end('Pet updated...');
});

router.delete('/delete-pet', (request, response) => {
    const id = request.query.id;

    let db = new sql.Database('./mcu.db');
    let result = db.run('delete from Pets where id = ?;',
        [id]
    );

    response.end('Pet deleted...');
});

export default router;