import { queryField, nonNull, list } from 'nexus'

export const TicketFindManyQuery = queryField('findManyTicket', {
  type: nonNull(list(nonNull('Ticket'))),
  args: {
    where: 'TicketWhereInput',
    orderBy: list('TicketOrderByInput'),
    cursor: 'TicketWhereUniqueInput',
    distinct: 'TicketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ticket.findMany({
      ...args,
      ...select,
    })
  },
})
