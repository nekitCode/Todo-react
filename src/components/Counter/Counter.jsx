import React from 'react';

import './Counter.scss';

const Counter = ({todo}) => {
    let count = 0;
    const checkCompleted = (todo) => {
        todo.map(todos => {
            return count+=Number(todos.completed);
        })
    };

    return (
        <>
            <div className='counter-block'>
                <div className='counter-block__span'>
                    <span>items: {todo.length}</span>
                    <span onChange={checkCompleted(todo)}>Completed: {count}</span>
                </div>
            </div>
                <div className='shadow-block__1'></div>
                <div className='shadow-block__2'></div>
        </>
    )
}

export default Counter;



// import React,{useState} from 'react';

// import './Counter.scss';



// const Counter = ({todo}) => {

//     let [count, setCount] = useState(0);

//     const ff = (todo) => {
//         setCount(todo.map(todos => {
//             return console.log(Number(todos.completed));
//         }))
//     }

//     return (
//         <div className='counter-block'>
//             <div className='counter-block__span'>
//                 <span>items: {todo.length}</span>
//                 <span>Active: </span>
//                 <span onChange={() => ff(todo)}>Completed: {count}</span>
//             </div>
//         </div>
//     )
// }

// export default Counter;