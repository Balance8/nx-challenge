import { useFindManyTicketQuery } from '@todo-starter/data-access';

import Link from 'next/link';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  const router = useRouter();
  const id = router.asPath.split('/')[1];
  const sortOrder = id === '#show' ? true : false;
  const { data, loading, error } = useFindManyTicketQuery({
    variables: {
      where: {
        completed: {
          equals: !!sortOrder,
        },
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex justify-center">
      <div className="grid gap-4 place-items-stretch md:grid-cols-2 sm:grid-cols-1 ">
        {data?.findManyTicket.map((ticket) => (
          <Link passHref href={`/ticket/${ticket.id}`}>
            <div
              key={ticket.id}
              className="grid max-w-4xl grid-cols-2 gap-4 px-6 py-5 space-x-3 space-y-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 hover:shadow-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="">
                Assigned to: {ticket.user.name} - Id: {ticket.id}
              </div>
              <div className="">
                <a className="focus:outline-none">
                  <span className="inset-0 " aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    Title: {ticket.title}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    Description: {ticket.description}
                  </p>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        checked={ticket.completed}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Completed?
                      </label>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
