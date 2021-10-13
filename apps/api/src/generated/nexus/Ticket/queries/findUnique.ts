import { queryField, nonNull } from 'nexus'

export const TicketFindUniqueQuery = queryField('findUniqueTicket', {
  type: 'Ticket',
  args: {
    where: nonNull('TicketWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.ticket.findUnique({
      where,
      ...select,
    })
  },
})
