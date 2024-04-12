import { startStandaloneServer } from '@apollo/server/standalone'
import {ApolloServer} from '@apollo/server'

import {typedefs} from './schema.js' 
import {resolvers} from './resolvers.js'
import BooksApi from './BooksApi.js'
import connection from './knexfile.js';



const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers:resolvers,
})

const{url} = await startStandaloneServer(server,{
    listen: {port:4000},
    context: async({req})=>{
        const {cache} = server;
        return {
            dataSources:{
                booksApi:new BooksApi(connection.development).GetAllBooks()
            }
        }
    }
})

console.log(`Server ready at ${url}`)