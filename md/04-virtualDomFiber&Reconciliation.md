## Explanation with Examples  

### React's createRoot vs Browser DOM
React's `createRoot` creates its own **Virtual DOM**, which is a copy of the browser DOM. It updates only those parts that need to be updated.  
- **Example**: If you edit a document, you only fix the part where you made a mistake, not the whole document.  

### Browser DOM Reload
The browser reloads its whole DOM, meaning it recreates the entire structure from scratch.  
- **Example**: If one line in an essay needs to be changed, but you rewrite the entire essay instead.  

### Virtual DOM Efficiency
The **Virtual DOM** updates only the parts that need to be updated, not the whole DOM.  
- **Example**: If a tree loses one leaf, you only replace that leaf, not the entire tree.  

### Avoiding Extra Updates
To avoid extra updates, React skips unnecessary updates for values that will soon be updated.  
- **Example**: A delivery tracker refreshes every minute, so you don’t need to check for changes every second.  

### React Fiber Algorithm
In React, a special algorithm called **React Fiber** is used to handle updates efficiently.  

### Reconciliation
The process of differentiating between the Virtual DOM and the browser DOM is called **Reconciliation**.  
- **Example**: A teacher checks only the corrected answers in a student’s homework, not the entire notebook.  

### UI Updates
In React, we don’t have to show every update in the UI immediately. React collects all updates and applies them at once for better performance.  
- **Example**: When baking cookies, you bake a full tray together instead of baking one cookie at a time.

### Network - Dependent Values 
Some values are updated based on network calls or are network-dependent. If you update these values, they can refresh instantly as soon as new data arrives from the network.

**Example:** Ek live cricket score app ko socho. Jab bhi score update hota hai, wo network se turant nayi data lekar refresh ho jata hai. Aapko manually page refresh karne ki zarurat nahi hoti.







