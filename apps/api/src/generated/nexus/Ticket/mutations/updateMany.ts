import { mutationField, nonNull } from 'nexus'

export const TicketUpdateManyMutation = mutationField('updateManyTicket', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TicketWhereInput',
    data: nonNull('TicketUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.ticket.updateMany(args as any)
  },
})
