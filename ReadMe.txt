cd Document\SideProjects
npm create vite@latest react-app
cd react-app
npm install
git init
code .
npm run dev
git add .
git commit -m "initial commit"


//////////////////////////exercise setup
cd documents\sideprocjects
npm create vite@latest react-app
cd react-app
git init
code .
npm run dev
git add .
git commit -m "initial commit"

//////////////////////////exercise 1

//from App.jsx
import React from 'react';
import Counter from './Counter';

function App(){
    return (
        <div>
        <h1>My counter App</h1>
        <Counter/>
        </div>
    )
}
export default App

//from counter.jsx
import React, {useState} from 'react';

function Counter(){
        const [count, setCount] = useState(0);

        function handleClick(){
            setCount(count + 1);
        }

    return(
        <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default Counter




import React from 'react';
import Counter from './Counter';

function App(){
    return(
        <h1> hello this is our counter </h1>
        <Counter/>
    )
}

export default App;


import React, {useState} from 'react';

function Counter(){
    const[count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <h1>counter:{counter}</h1>
        <button onClick = {handleClick}>Increment</button>
    )
}

export default Counter;

\\\\\\\ 2nd exercise

import React, {useState} from 'react'

function Invisible(){
    const[invisibleText, setInvisibleText] = useState(false)

    function handleInvisible(){
        setInvisibleText(!invisibleText)
    }

    return(
        <div>
            <button onClick = {handleInvisible}>{invisibleText ? 'Hide Text' : 'Show Text'}
            {invisibleText && 'you found me'}
        <\div>
    )
}