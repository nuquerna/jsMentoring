'use strict';

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    addNews() {
        this.props.onAddNews(this.newsInput.value);
        this.newsInput.value = '';
    }

    render() {
        return (
            <div>
            <input type='text' ref={(input) => {this.newsInput = input}}/>
            <button onClick={this.addNews.bind(this)}>Add News</button>
            <ul>
            <li>
            </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
     }),
    dispatch => ({
        onAddNews: (newsName) => dispatch({type: 'ADD_NEWS', newsName: newsName})
    })
)(App);
