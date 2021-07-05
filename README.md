# Template

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Styling with [Tailwind](https://tailwindcss.com/)
- Fetching/Caching with [React-Query](https://react-query.tanstack.com)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## How to setup your own app using this template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npx](https://github.com/npm/npx) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/sesteva/nextjs
```

## Rendering Options

Once you execute `yarn build`, a summary of what has been generated will be produced as the example below.

You will notice some pages have been generated statically as there is no usage of getStaticProps (fetching data at build time) or getInitialProps/getServerSideProps (fetching data at runtime server side)

```
Page                              Size     First Load JS
┌ ○ /                             2.16 kB        75.7 kB
├   /_app                         0 B            73.5 kB
├ ○ /404                          3.18 kB        76.7 kB
├ λ /api/hello                    0 B            73.5 kB
└ ○ /top-headlines                3.72 kB        77.2 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

```

If you would like to deploy everything as a SPA, you will need to run `yarn export` instead. In this case a single rendering strategy is used, client-side rendering.


