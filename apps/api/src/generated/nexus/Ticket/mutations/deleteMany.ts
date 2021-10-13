import { mutationField, nonNull } from 'nexus'

export const TicketDeleteManyMutation = mutationField('deleteManyTicket', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TicketWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.ticket.deleteMany({ where } as any)
  },
})
