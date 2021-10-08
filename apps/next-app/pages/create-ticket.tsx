import { EditTicket } from '@todo-starter/shared/ui';

/* eslint-disable-next-line */
export interface CreateTicketProps {}

export function CreateTicket(props: CreateTicketProps) {
  return (
    <div className="flex justify-center">
      <EditTicket />
    </div>
  );
}

export default CreateTicket;
