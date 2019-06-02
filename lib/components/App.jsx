import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import HelloWorld from "./otherComponents/HelloWorld";

const Main = styled.div`
    border: black solid 4px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.initialData,
        };
    }

    render() {
        return (
            <Main>
                <HelloWorld />
            </Main>
        );
    }
}

export default hot(App);
