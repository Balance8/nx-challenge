import {
  useCreateOneTicketMutation,
  useFindManyTicketQuery,
  useFindManyUserQuery,
  useUpdateOneTicketMutation,
} from '@todo-starter/data-access';
import { useState } from 'react';
import router, { useRouter } from 'next/router';
import { Ticket as TicketType } from '@todo-starter/data-access';
import { error } from 'console';
import ticket from '../ticket/ticket';

/* eslint-disable-next-line */
export interface EditTicketProps {
  data: TicketType;
}

export function EditTicket(props: EditTicketProps) {
  const { data: ticketData } = props;
  const router = useRouter();
  const { id } = router.query;
  const routerUrl = router.asPath;
  const url = routerUrl.split('/')[1];
  const { data, loading: loadingUsers } = useFindManyUserQuery();
  const [title, setTitle] = useState(ticketData?.title || '');
  const [description, setDescription] = useState(ticketData?.description || '');
  const [user, setUser] = useState(ticketData?.user?.id || '');
  const [completed, setCompleted] = useState(ticketData?.completed || false);

  const [createOneTicket, { loading, error }] = useCreateOneTicketMutation({
    variables: {
      data: {
        title: title,
        description: description,
        user: {
          connect: {
            // convert to int
            id: parseInt(user),
          },
        },
        completed: false,
      },
    },
    onCompleted: () => {
      // Send them back to home page
      router.push('/');
      console.log('Ticket created');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [updateOneTicket, { loading: loadingUpdate }] =
    useUpdateOneTicketMutation({
      variables: {
        where: {
          id: parseInt(id),
        },
        data: {
          title: { set: title },
          description: { set: description },
          user: {
            connect: {
              id: parseInt(user),
            },
          },
          completed: { set: completed },
        },
      },
      onCompleted: () => {
        // Send them back to home page
        router.push('/');
        console.log('Ticket updated');
      },
      onError: (error) => {
        console.log(error.message);
      },
    });

  if (loadingUsers) {
    return <div>Loading users...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (loadingUpdate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 py-5 bg-indigo-100 shadow-xl sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {url === 'edit-ticket' ? 'Edit Ticket' : 'Create Ticket'}
          </h3>
          <button
            onClick={() =>
              url === 'edit-ticket' ? updateOneTicket() : createOneTicket()
            }
            className="inline-flex items-center justify-center w-full px-4 py-2 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >
            <svg
              className="w-6 h-6 mr-3 text-white transition duration-150 ease-in-out group-hover:text-indigo-500 group-focus:text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {url === 'edit-ticket' ? 'Edit' : 'Create'}
          </button>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="user"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assignee
                </label>
                <select
                  id="user"
                  name="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select a user</option>
                  {data?.findManyUser.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <div className="flex items-center h-5 pt-10">
                  <input
                    id="completed"
                    aria-describedby="completed-description"
                    name="completed"
                    type="checkbox"
                    onChange={() => setCompleted(!completed)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="completed"
                      className="font-medium text-gray-700"
                    >
                      Completed?
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTicket;
