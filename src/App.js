import React from "react";

// import scss
import "./App.scss";

// import components
import Home from "./components/Hello";

import LayoutDefault from "./components/layouts/LayoutDefault";

// import images
import sampleimg from "./assets/images/smartphone.png";

const App = () => {
    return (
        <LayoutDefault>
            <Home />
            <img src={sampleimg} alt="sampleimg" />
        </LayoutDefault>
    );
};

export default App;
