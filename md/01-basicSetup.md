# React Project Setup (Create React App + Vite)

## 1. Prerequisites

Install Node.js. Check version:

```
node -v
```

npm (comes with Node.js). Check version:

```
npm -v
```

---

## 2. React Project with Create React App (CRA)

### Create a React project:

```
npx create-react-app project-name
```

Example:

```
npx create-react-app my-react-app
```

- **npx**: Runs the latest version without installing globally.
- **my-react-app**: Your project folder name.

### Go to your project folder:

```
cd my-react-app
```

### Start the development server:

```
npm start
```

- Opens the app in the browser on `localhost:3000`.

---

## 3. React Project with Vite

### Create a React project:

```
npm create vite@latest my-vite-app
```

- **my-vite-app**: Your project folder name.

### Select the framework:

- Choose **React**.
- Select **JavaScript** for a simpler setup.

### Install dependencies:

```
cd my-vite-app
npm install
```

### Start the development server:

```
npm run dev
```

- Opens the app in the browser on `localhost:5173`.

---

## 4. Differences Between CRA and Vite

| **Feature**         | **CRA**              | **Vite**              |
|---------------------|----------------------|-----------------------|
| **Speed**           | Slower               | Much faster           |
| **Setup**           | Easy for beginners   | Modern and minimal    |
| **Use Case**        | Good for small projects | Best for all projects  |
| **Recommendation**  | Beginners            | Recommended for speed |

---

## 5. Basic Edits After Setup

Open `App.js` and replace the default content:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a simple React app.</p>
    </div>
  );
}

export default App;
```

- Save changes and refresh the browser.

---

## Next Steps

- Learn about React components and state.
- Build small projects:
  - Counter app (with +, - buttons).
  - Form handling (inputs and submission).
