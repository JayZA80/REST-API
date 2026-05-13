import { Collection, Document } from "mongodb";

const getter = {
    getAll: async (collection: Collection<Document>) => {
        return await collection.find().toArray(); // find() returns a cursor, toArray() converts it to an array of documents
    },
    getSome: async (collection: Collection<Document>, limit: number = 10) => {
        return await collection.find().limit(limit).toArray(); // find() returns a cursor, limit() limits the number of documents, toArray) converts it to an array of documents
    }, 
    getOne: async (collection: Collection<Document>, query: string) => {
        if (query === '') {
            return await collection.findOne({});
        } else {
            return await collection.findOne({ id: query });
        }
    }
}


export default getter;