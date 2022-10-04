const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (Nama) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE "Nama"='${Nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByMailAndPhone = async (Email,Telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE "Email"='${Email}' and "Telepon"='${Telepon}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const patchUrlByName = async (Nama,Angkatan,Email,Telepon,Deskripsi,Jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE praktikan_webdev SET "Jenis kelamin"='${Jenis_kelamin}', "Angkatan"='${Angkatan}', "Email"='${Email}', "Telepon"='${Telepon}', "Deskripsi"='${Deskripsi}' WHERE "Nama"='${Nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deleteUrlByMail = async (Email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM praktikan_webdev WHERE "Email"='${Email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM praktikan_webdev WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const createpraktikan = async (Nama,Angkatan,Email,Telepon,Deskripsi,Jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `insert into praktikan_webdev values ('${Nama}','${Jenis_kelamin}','${Angkatan}','${Email}','${Telepon}','${Deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const createBULKpraktikan = async (POM) => {
    try {
        let BAN = []
        JSON.parse(POM,(a,b)=>{BAN.push(b)})
        for (let a=0;a<(BAN.length-1)/7;a++){
            // This is not safe, but it's just an example
            const query = `insert into praktikan_webdev values ('${BAN[a*7]}','${BAN[(a*7)+1]}','${BAN[(a*7)+2]}','${BAN[(a*7)+3]}','${BAN[(a*7)+4]}','${BAN[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating URL');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
            // This is safer. It uses a parameterized query
            // const query = `SELECT * FROM praktikan_webdev WHERE name=$1`;
            // const result = await databaseQuery(query, [name]);    
        }
        return {
            message: 'URL updated successfully',
        };
        
    } catch (error) {
        return error
    }
}
/*
const insertUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO praktikan_webdev (url, name, description) VALUES ('${url}', '${name}', '${description}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO praktikan_webdev (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting URL');
        }
        return {
            message: 'URL inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (url) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM praktikan_webdev WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM praktikan_webdev WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (url, name, description) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE praktikan_webdev SET name='${name}', description='${description}' WHERE url='${url}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE praktikan_webdev SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}
*/
module.exports =  {
    getUrls,
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    createBULKpraktikan,
    /*
    insertUrl,
    deleteUrl,
    updateUrl
    */
}