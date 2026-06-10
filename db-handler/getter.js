const getter = {
    getAll: async (collection) => {
        return await collection.find().toArray(); // find() returns a cursor, toArray() converts it to an array of documents
    },
    getSome: async (collection, limit = 10) => {
        return await collection.find().limit(limit).toArray(); // find() returns a cursor, limit() limits the number of documents, toArray) converts it to an array of documents
    },
    getOne: async (collection) => {
        return await collection.findOne({});
    },
    getById: async (collection, id) => {
        return await collection.findOne({ id });
    },
    getByTitle: async (collection, title) => {
        return await collection.findOne({ title });
    }
};
export default getter;
