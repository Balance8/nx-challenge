# Ticket Project

This project explores what it means to combine Nx/Nextjs/Prisma/Graphql and Nexus auto code generation. It features Code first Schema Generation, with end-to-end type safety provided by Prisma and Nexus. This project highlights code splitting and sharing from NX workspaces and allows multiple web apps to consume a single graphql endpoint and render/edit/update data as they see fit.

This project also showcases how incredibly reusable tailwind is when you are looking for a consistent code quality for CSS.

I completed this project (part one and part two) in 5 hours.

## Run Locally

Clone the project

```bash
git clone git@github.com:Balance8/nx-challenge.git
```

Cd into the project

```bash
cd nx-challenge
```

Install dependencies

```bash
yarn
//or
npm install
```

create an .env file at the root with this variable

```bash
DATABASE_URL="file:/tmp/todo-starter/todo.db"
```

Then run these commands

```bash
pal g --config apps/api/pal.js
yarn nx run-many --target=generate-gql --all
yarn nx run-many --target=serve --all --parallel
```

If you recieve an error, delete the dist folder as well as `apps/api/src/generated/nexus.ts` & `apps/api/src/generated/schema.graphql`

Re-run `yarn nx run-many --target=serve --all --parallel`

## Screenshots

**Home Page:**
![App Screenshot](https://i.imgur.com/CD7nO7Q.png)

**Create Page:**
![App Screenshot](https://i.imgur.com/yBMnmX3.png)

**Ticket Page:**
![App Screenshot](https://i.imgur.com/cEvTYMM.png)

**Edit Page:**
![App Screenshot](https://i.imgur.com/tz7ivP1.png)

**Database Relationships**
![App Screenshot](https://imgur.com/YQo9iVi)

## Running Tests

To run tests, run the following command

```bash
  yarn nx run next-app-e2e:e2e --no-exit
```

Make Sure you have the API running in the background or else the three tests will fail.

## Create Ticket

```javascript
it('Create Ticket', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:4200/');
  cy.get('.mt-5 > :nth-child(1) > .flex').should('be.visible');
  cy.get('.mt-5 > :nth-child(1) > .flex').click();
  cy.get('.py-5').should('be.visible');
  cy.get('#title').clear();
  cy.get('#title').type('New Ticket');
  cy.get('#user').select('1');
  cy.get('#description').clear();
  cy.get('#description').type('New Test');
  cy.get('#completed').should('not.be.checked');
  cy.get('.inline-flex').click();
  /* ==== End Cypress Studio ==== */
});
```

## Check Filtering

```javascript
/* ==== Test Created with Cypress Studio ==== */
it('Check Filtering', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.w-40 > .flex').should('have.text', 'Pending');
  cy.get('.w-40 > .flex').click();
  cy.get('.w-40 > .flex').should('have.text', 'Done');
  cy.get(
    '[href="/ticket/1"] > :nth-child(2) > .focus\\:outline-none > .relative > .flex > #comments'
  ).should('be.checked');
  /* ==== End Cypress Studio ==== */
});
```

## Edit Ticket

```javascript
/* ==== Test Created with Cypress Studio ==== */
it('Edit Ticket', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="/ticket/3"]').should('be.visible');
  cy.get('[href="/ticket/3"]').click();
  cy.get('.p-5').should('be.visible');
  cy.get('.text-indigo-700').click();
  cy.get('#user').select('1');
  cy.get('#user').should('have.id', 'user');
  cy.get('.inline-flex').click();
  /* ==== End Cypress Studio ==== */
});
```

## Further Reading

I would highly encourage a read into these blog posts about this topic:

- https://vitaterna.ca/using-apollo-prisma-and-nexus-with-react-in-an-nx-workspace?fbclid=IwAR3gzsgf2W-qz7Hp0v_j_hTczCwMPBAfmOtRRa0MkVflJtmozHP2wATY-i4

and

- https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613
