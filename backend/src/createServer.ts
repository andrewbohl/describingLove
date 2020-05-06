import { GraphQLServer } from 'graphql-yoga';
import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { db } from './db';
// import { typeDefs } from './schema';


// export function createServer () {
//     return new GraphQLServer({
//        typeDefs: typeDefs,//'./schema.graphql', 
//         resolvers: {
//             Query,
//             Mutation
//         },
//         // resolverValidationOptions: {
//         //     requireResolversForResolveType: false
//         // },
//         context: req => ({...req, db}),
//     })
// }
