### What are Props in React?

**Props (short for properties)** are a mechanism used in React to pass data from a parent component to a child component. They are like function parameters that accept values in the future, similar to how function arguments work.

### Key Points about Props:

1. **Props are data** sent from parent components to child components.
   
2. **Props work by adding values/properties** to child components. This allows you to customize the behavior or appearance of child components.

3. **Props are reusable**. For example, in your code, you create a card in Tailwind, store this card in a file, and export it. When you import and call this card in React, it works. But, you can call this card component **many times** and pass different props (data) each time to change the content.

4. To **show props data**, we inject these props into the HTML document where the child component is rendered. The data passed through props will be displayed based on how it is used inside the child component.

---

