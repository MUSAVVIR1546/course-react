## React State Batching" Or "React Batch Updates" 
The interviewer might give us the task to create an application for incrementing and decrementing a value. We create it, and then the interviewer gives us the main task, where they define that the increment function is called more than once and ask us what will happen next.

The answer is that React uses batching, which works for optimization. When a function like `setCounter` is called multiple times, React groups all those updates together and updates the value only once. This is the main reason why the `setCounter` value does not update immediately.

If the updated value depends on the previous value, then using the functional form is important.

### Example :-
```javascript
setCounter(prevCounter => prevCounter + 1);
```