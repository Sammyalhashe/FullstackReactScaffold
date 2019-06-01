import React, { Component } from "react";

class HelloWorld extends Component {
    constructor() {
        super();
    }
    render() {
        const testList = ["This", "is", "a", "list"];
        return (
            <div>
                <b>Hello World!</b>
                <ul className="testList">
                    {testList.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default HelloWorld;
