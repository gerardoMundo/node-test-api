import sql from 'sqlite3';

export const createDataBase = () => {
    let db = new sql.Database('.mcu.db', (err) => {
        console.log('Creating database...');

        if(err) {
            console.log(`Error: ${err}`);

            return false;            
        } else {
            console.log('Creating new pet...');
            
            db.exec(
                `create table Pets(
                    id number primary key not null,
                    name text not null,
                    ownwer text not null,
                    species text not null,
                    color text not null
                );
                insert into Pet values('1', 'Josu', 'Jesus Montalvo', 'Dog', 'Brown');
                insert into Pet values('2', 'Motita', 'Eduardo Rivero', 'Cat', 'Black');
                `
            );
        };        
    });
    db.close();
    return true;
};