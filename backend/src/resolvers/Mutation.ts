import { intArg, objectType, stringArg } from 'nexus'

export const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
  
        t.field('createItem', {
        type: 'Item',
        args: {
            name: stringArg({ nullable: false }),
            description: stringArg(),
            price: intArg(),
            currency: stringArg(),
        },
        resolve: (parent, args, ctx, info) => {
            return ctx.prisma.item.create({
                data: {
                    ...args
                },
            })
        },
        })
    },
});

// export const Mutation = {
//     async createItemssss(parent, args, ctx, info){
//         const item = await ctx.prisma.item.createItem({
//             data: {
//                 ...args
//             }
//         }, info);
//         return item;
//     }

// };

// module.exports = Mutation;