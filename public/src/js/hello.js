'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props, content) {
        super(props, content);
        this.state = {
            smth: "Nuquer"
        };
    }
    
    render() {
        return <div><span>Hello {this.props.name} & {this.state.smth}</span></div>;
    }
}

ReactDOM.render(
    <h1>Hello name="Everyone"</h1>,
    document.getElementsById('publish')
);

module.exports = Hello;