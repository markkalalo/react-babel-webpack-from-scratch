import React, { Children } from "react";

import Header from "./LayoutDefault/Header";
import Footer from "./LayoutDefault/Footer";

const LayoutDefault = (props) => {
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
        </main>
    );
};

export default LayoutDefault;
