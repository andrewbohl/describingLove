import { nexusPrismaPlugin } from 'nexus-prisma'
import { intArg, makeSchema, objectType, stringArg } from 'nexus'
import { Query } from './resolvers/Query'
import { Mutation } from './resolvers/Mutation'

const Item = objectType({
  name: 'Item',
  definition(t) {
    t.model.currency()
    t.model.name()
    t.model.description()
    t.model.id()
    t.model.price()
  },
})

const Weapon = objectType({
    name: "Weapon",
    definition(t) {
        t.model.class()
        t.model.damage()
        t.model.itemID()
        t.model.properties()
        t.model.weaponID()
        t.model.Item()
    }
})




export const schema = makeSchema({
  types: [Item, Weapon, Query, Mutation],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/../src/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  
})

