import React from 'react'

// import scss
import './App.scss'

// import components
import Home from './components/Hello'

// import images
import sampleimg from './assets/images/smartphone.png'

const App = () =>{
    return(
        <div>
            <Home />
            <img src={sampleimg} alt="sampleimg" />
        </div>
    )
}

export default App;