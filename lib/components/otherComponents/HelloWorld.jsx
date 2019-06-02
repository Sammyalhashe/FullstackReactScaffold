import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
    background: teal;
    color: white;
    border: "orange dashed 3px";
`;

const divStyle = {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
};

const testList = {
    margin: "0 auto",
    display: "block",
};

class HelloWorld extends Component {
    constructor() {
        super();
    }
    render() {
        const testList = ["Tis", "is", "a", "list"];
        return (
            <div style={divStyle}>
                <div >
                    <Button>asdf</Button>
                    <ul className="testList">
                        {testList.map((el, index) => {
                            return <li key={index}>{el}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
