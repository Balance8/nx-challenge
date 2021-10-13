import { mutationField, nonNull } from 'nexus'

export const TicketUpsertOneMutation = mutationField('upsertOneTicket', {
  type: nonNull('Ticket'),
  args: {
    where: nonNull('TicketWhereUniqueInput'),
    create: nonNull('TicketCreateInput'),
    update: nonNull('TicketUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ticket.upsert({
      ...args,
      ...select,
    })
  },
})
