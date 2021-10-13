import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('tickets', {
      type: 'Ticket',
      args: {
        where: 'TicketWhereInput',
        orderBy: 'TicketOrderByInput',
        cursor: 'TicketWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TicketScalarFieldEnum',
      },
      resolve(root: any) {
        return root.tickets
      },
    })
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
