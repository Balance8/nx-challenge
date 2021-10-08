import React from 'react';
import { SortOrder, useFindManyTicketQuery } from '@todo-starter/data-access';

/* eslint-disable-next-line */
export interface TodoItemListProps {}

export function TodoItemList(props: TodoItemListProps) {
  const { data, loading, error } = useFindManyTicketQuery({
    variables: {
      orderBy: {
        id: SortOrder.Desc,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.findManyTicket.map(({ id, description, completed }) => (
        <li key={id}>
          {description} - <strong>{completed ? 'Done' : 'Not Done'}</strong>
        </li>
      ))}
      hello
    </ul>
  );
}

export default TodoItemList;
