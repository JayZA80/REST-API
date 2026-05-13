import express from 'express';
import connectToDatabase from './db-handler/connect.js';
import getter from './db-handler/getter.js';
import path from 'path';

const app = express();
app.use(express.static(path.join(process.cwd(), 'public')));
const port = 3000;

const connection = async () => {
  try {
    const collection = await connectToDatabase();
    return collection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

const main = async () => {
    try {
        const collection = await connection();
        console.log(collection);

        app.get('/', async (req, res) => {
            const data = await getter.getSome(collection, 5);
            res.send(data);
        });

        app.get('/info', async (req, res) => {
            const data = await getter.getOne(collection);
            res.send(data);
        });
        // it's best to separate an empty query route and a route with a specific id
        app.get('/info/:id', async (req, res) => {
            const id = req.params.id;
            const data = await getter.getById(collection, id);
            res.send(data);
        });

        app.get('/info/:title', async (req, res) => {
            const title = req.params.title;
            const data = await getter.getByTitle(collection, title);
            res.send(data);
        });

        app.get('/umadacchi', (req, res) => {
            res.sendFile(path.join(process.cwd(), 'public/umapyoi.html'));
        });

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });
        
    } catch (error) {
        throw new Error("Error in main function.");
    }
}

main();
