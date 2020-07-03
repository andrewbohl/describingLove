const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const {GraphQLServer} = require("graphql-yoga");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: req => ({
        ...req,
        db: new PrismaClient({
            endpoint: "postgresql://postgres:password@localhost:5432/Andrew?schema=public",
            debug: true
        })
    })

});
