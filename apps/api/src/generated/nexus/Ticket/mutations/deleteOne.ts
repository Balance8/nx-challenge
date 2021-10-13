import { mutationField, nonNull } from 'nexus'

export const TicketDeleteOneMutation = mutationField('deleteOneTicket', {
  type: 'Ticket',
  args: {
    where: nonNull('TicketWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.ticket.delete({
      where,
      ...select,
    })
  },
})
