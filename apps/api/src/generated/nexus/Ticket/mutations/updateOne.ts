import { mutationField, nonNull } from 'nexus'

export const TicketUpdateOneMutation = mutationField('updateOneTicket', {
  type: nonNull('Ticket'),
  args: {
    where: nonNull('TicketWhereUniqueInput'),
    data: nonNull('TicketUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.ticket.update({
      where,
      data,
      ...select,
    })
  },
})
