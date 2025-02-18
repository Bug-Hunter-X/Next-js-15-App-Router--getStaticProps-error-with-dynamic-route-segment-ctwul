# Next.js 15 App Router: getStaticProps Error with Dynamic Route Segment

This repository demonstrates a bug in Next.js 15's App Router where `getStaticProps` throws an error when used with a dynamic route segment.  The issue arises when attempting to fetch data based on the dynamic segment within `getStaticProps`.  A proposed solution is included.

## Bug Description

When using the App Router with a route like `/posts/[slug]`, `getStaticProps` fails to receive the `slug` parameter correctly in certain situations, leading to errors or incorrect data retrieval.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a route like `/posts/my-post`.  Observe the error or incorrect data.

## Solution

The provided solution demonstrates a way to correctly access and use dynamic segments within `getStaticProps`. This may involve refactoring how data is fetched and handled, ensuring the dynamic segment is properly accessed and used within the `getStaticProps` function.
