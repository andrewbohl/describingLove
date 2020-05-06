import { intArg, objectType, stringArg } from 'nexus'

export const Query = objectType({
    name: 'Query',
    definition(t) {
        t.crud.item()

        t.list.field('getAllItems', {
        type: 'Item',
        resolve: (_parent, _args, ctx) => {
            return ctx.prisma.item.findMany({})
            },
        })
        
    },
});
