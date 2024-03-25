import { startStandaloneServer } from '@apollo/server/standalone'
import {ApolloServer} from '@apollo/server'


import {typedefs} from './schema.js' 

const server = new ApolloServer({
    typeDefs: typedefs
})

const{url} = await startStandaloneServer(server,{
    listen: {port:4000}
})

console.log(`Server ready at ${url}`)