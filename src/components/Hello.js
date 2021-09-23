import React from "react";
import { HelloItem } from "../data/HelloItem";

const Hello = () => {
    return (
        <div>
            {HelloItem.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Hello;
