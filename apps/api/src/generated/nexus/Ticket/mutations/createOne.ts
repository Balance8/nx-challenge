import { mutationField, nonNull } from 'nexus'

export const TicketCreateOneMutation = mutationField('createOneTicket', {
  type: nonNull('Ticket'),
  args: {
    data: nonNull('TicketCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.ticket.create({
      data,
      ...select,
    })
  },
})
