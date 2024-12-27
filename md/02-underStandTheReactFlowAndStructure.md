## Introduction and Purpose:

The session aims to help understand the **React folder structure**, especially the differences between projects created using **Create React App (CRA)** and **Vite**.  
The main goal is to explain how **React** works with **HTML** by injecting JavaScript into the DOM.

---

## Core Concepts:

- **React Injection**: React dynamically injects JavaScript into the HTML file, which is essential for using React with build tools like **Vite** and **Parcel**.
- **Project Structure**: The folder structure for CRA and Vite projects differs. The important directories are:
  - **`src/`**: Contains main files like `index.js` and `App.js`.
  - **`public/`**: Holds static assets like images and icons, along with important files such as `index.html`, which is the core of the app.
- **Single Page Application (SPA)**: React projects often use a single HTML file (`index.html`), where JavaScript dynamically injects content, making the app a **SPA**.
- **DOM Manipulation**: React efficiently updates or renders components in the DOM, unlike traditional JavaScript which directly manipulates the HTML.

---

## Best Practices:

- **Clean Comments**: Remove unnecessary comments to keep the structure clean.
- **Simplify HTML**: Remove unused meta tags and elements from the HTML for a clearer structure.
- **Handle Disabled JavaScript**: Use `<noscript>` tags to notify users if JavaScript is disabled.

---

## Import and Export:

- **Import and Export** are essential for sharing or including components between files.
- **Uppercase Naming**: Components in React should be named in uppercase (e.g., `App`, `Header`) so that React can differentiate them from regular HTML tags, which are lowercase.
- **Importing Components**: Use `import` to bring components from other files.
- **Exporting Components**: Use `export default` (for default export) or `export` (for named export) to share components.

---

## Functions:

- **React Functions**: Functions in React are used for tasks like event handling, rendering, or managing state.
- **Arrow Functions**: Commonly used in React due to their concise syntax and automatic binding of `this`.

---

## Best Practices:

- **Naming**: Always use uppercase for components and camelCase for other variables.
- **Organize Imports**: Import all dependencies at the top of the file for better readability.
- **Functional Components**: Prefer functional components with hooks like `useState` and `useEffect` over class components for cleaner code.
