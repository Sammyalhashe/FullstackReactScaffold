import { hot } from "react-hot-loader/root";
import React from "react";
import HelloWorld from "./otherComponents/HelloWorld";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.initialData,
        };
    }

    render() {
        return (
            <div>
                Hello FullStack React + Express!
                <HelloWorld />
            </div>
        );
    }
}

export default hot(App);
