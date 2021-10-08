import { Ticket as TicketType } from '@todo-starter/data-access';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface TicketProps {
  data: TicketType;
}

export function Ticket(props: TicketProps) {
  const { data } = props;
  return (
    <div key={data.id} className="flex items-center justify-center px-4 py-8">
      <div className="p-5 bg-indigo-700 rounded shadow-lg md:w-96">
        <div className="grid w-full gap-4 place-items-center">
          <h1 className="pt-6 text-2xl font-bold leading-7 text-white ">
            Title: {data.title}
          </h1>
          <p className="pt-4 text-xl leading-5 text-white ">
            <span className="pr-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
              Description:
            </span>{' '}
            {data.description}
          </p>
          <p className="pt-4 text-xl leading-5 text-white f">
            <span className="pr-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
              Assignee:
            </span>{' '}
            {data.user.name}
          </p>
          <p className="pt-4 text-xl leading-5 text-white f">
            <span className="pr-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
              Task Status:
            </span>{' '}
            {data.completed ? 'Completed' : 'Pending'}
          </p>
        </div>
        <div className="flex items-center justify-between pt-7">
          <Link passHref href="/">
            <button className="p-2 text-xs font-medium leading-3 text-white bg-transparent rounded focus:outline-none hover:opacity-90">
              Go Back
            </button>
          </Link>
          <Link passHref href={`/edit-ticket/${data.id}`}>
            <button className="p-2 text-xs font-medium leading-3 text-indigo-700 rounded bg-gray-50 focus:outline-none hover:opacity-90">
              Edit Ticket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
