import { objectType } from 'nexus'

export const Ticket = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Ticket',
  definition(t) {
    t.int('id')
    t.string('description')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
    t.boolean('completed')
    t.string('title')
  },
})
