import { queryField, list } from 'nexus'

export const TicketAggregateQuery = queryField('aggregateTicket', {
  type: 'AggregateTicket',
  args: {
    where: 'TicketWhereInput',
    orderBy: list('TicketOrderByInput'),
    cursor: 'TicketWhereUniqueInput',
    distinct: 'TicketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ticket.aggregate({ ...args, ...select }) as any
  },
})
