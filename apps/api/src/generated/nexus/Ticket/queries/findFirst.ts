import { queryField, list } from 'nexus'

export const TicketFindFirstQuery = queryField('findFirstTicket', {
  type: 'Ticket',
  args: {
    where: 'TicketWhereInput',
    orderBy: list('TicketOrderByInput'),
    cursor: 'TicketWhereUniqueInput',
    distinct: 'TicketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ticket.findFirst({
      ...args,
      ...select,
    })
  },
})
