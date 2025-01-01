import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

const AnotherElement=(
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank",},
    'Click me to visit Google !'
)

createRoot(document.getElementById('root')).render(
 
    <>
    <App />
    {/* <MyApp/> */}
    </>
    // AnotherElement
    // reactElement
    
 
)
