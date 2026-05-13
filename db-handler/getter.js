const getter = {
    getAll: async (collection) => {
        return await collection.find().toArray(); // find() returns a cursor, toArray() converts it to an array of documents
    },
    getSome: async (collection, limit = 10) => {
        return await collection.find().limit(limit).toArray(); // find() returns a cursor, limit() limits the number of documents, toArray) converts it to an array of documents
    },
    getOne: async (collection, query = '679a84d630136aa0a3e51ccd') => {
        if (query === '') {
            return await collection.findOne({});
        }
        else {
            return await collection.findOne({ id: query });
        }
    }
};
export default getter;
