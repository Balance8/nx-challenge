import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import {
  FindUniqueTicketDocument,
  FindManyTicketDocument,
  Ticket,
} from '@todo-starter/data-access';
import { EditTicket } from '@todo-starter/shared/ui';
import client from '../../apollo';

/* eslint-disable-next-line */
export interface IdProps {
  data: Ticket;
}

export function Id(props: IdProps) {
  const { data } = props;
  return (
    <div className="flex justify-center">
      <EditTicket data={data} />
    </div>
  );
}

export default Id;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await client.query({
//     query: FindManyTicketDocument,
//   });
//   return {
//     paths: data.findManyTicket.map((item) => {
//       return {
//         params: {
//           id: item.id.toString(),
//         },
//       };
//     }),
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps<IdProps> = async ({
  params,
}) => {
  const { data } = await client.query({
    query: FindUniqueTicketDocument,
    variables: {
      where: {
        id: Number(params.id),
      },
    },
  });
  return {
    props: {
      data: data.findUniqueTicket,
    },
  };
};
