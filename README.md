This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# New libraries used in this project:

#### - React Hook Form:

Performance is one of the primary reasons why this library was created. React Hook Form relies on an uncontrolled form, which is the reason why the `register` function captures `ref` and the controlled component has its re-rendering scope with `Controller` or `useController`. This approach reduces the amount of re-rendering that occurs due to a user typing in an input or other form values changing at the root of your form or applications. Components mount to the page faster than controlled components because they have less overhead. As a reference, there is a quick comparison test that you can refer to at [this repo link](https://github.com/bluebill1049/react-hook-form-performance-compare).

installation: pnpm add react-hook-form @hookform/resolvers

## - Zod :

Zod is a TypeScript-first validation library. Using Zod, you can define *schemas* you can use to validate data, from a simple `string` to a complex nested object.

installation : pnpm add zod

## - Zustand:

A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

Don't disregard it because it's cute, it has claws! Lots of time was spent to deal with common pitfalls, like the dreaded [zombie child problem](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children), [React concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md), and [context loss](https://github.com/facebook/react/issues/13332) between mixed renderers. It may be the one state manager in the React space that gets all of these right.

installation : pnpm add zustand


## -React toastofy :


React-Toastify is a popular, free, and MIT-licensed package used to add toast notifications to React applications. Toast notifications are small, temporary pop-up messages that provide feedback to users about actions or events, such as success messages, error alerts, or loading indicators.** **

Key Features and Usage:


* **Installation:** React-Toastify can be installed using npm or yarn:

Code

```
    npm install react-toastify
# or
    yarn add react-toastify
```

* **Basic Setup:** After installation, import the `ToastContainer` component and the `toast` object, along with the required CSS file, into your main application component (e.g., `App.js`):

Code

```
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    function App() {
      const notify = () => toast("Hello World!");

      return (
        <div>
          <button onClick={notify}>Show Toast</button>
          <ToastContainer />
        </div>
      );
    }
```

The `ToastContainer` component renders the actual toast notifications, and the `toast` object is used to trigger them.

* **Types of Toasts:** React-Toastify supports various types of toasts, such as `success`, `error`, `warning`, `info`, and `loading`, each with its own distinct styling.

JavaScript

```
    toast.success("Action successful!");
    toast.error("Something went wrong.");
```

* **Customization:**

  The library offers extensive customization options for styling, positioning, and behavior of toasts. You can configure global options on the `ToastContainer` or pass options directly to individual `toast` calls.
* **Advanced Features:**

  React-Toastify also includes advanced features like limiting the number of displayed toasts, darkmode support, colored themes, and integration with Promises for displaying loading and success/error states for asynchronous operations. It also provides hooks like `onOpen` and `onClose` for custom logic when toasts appear or disappear.


## -Zustand/middleware:

**The Persist middleware enables you to store your Zustand state in a storage** (e.g., localStorage , AsyncStorage , IndexedDB , etc.), thus persisting its data.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

Don't disregard it because it's cute, it has claws! Lots of time was spent to deal with common pitfalls, like the dreaded [zombie child problem](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children), [React concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md), and [context loss](https://github.com/facebook/react/issues/13332) between mixed renderers. It may be the one state manager in the React space that gets all of these right.
