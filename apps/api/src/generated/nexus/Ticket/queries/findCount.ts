import { queryField, nonNull, list } from 'nexus'

export const TicketFindCountQuery = queryField('findManyTicketCount', {
  type: nonNull('Int'),
  args: {
    where: 'TicketWhereInput',
    orderBy: list('TicketOrderByInput'),
    cursor: 'TicketWhereUniqueInput',
    distinct: 'TicketScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.ticket.count(args as any)
  },
})
