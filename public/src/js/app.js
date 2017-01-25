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
        //this is a small problem, teststore is undefined first time
        let newsStore = [''];
        if (this.props.testStore !== undefined) {
            newsStore = this.props.testStore;
        }        
        
        return (
            <div>
            <input type='text' ref={(input) => {this.newsInput = input}}/>
            <button onClick={this.addNews.bind(this)}>Add News</button>
            <ul>  
                {newsStore.map((news, index) => <li key={index}>{news}</li>)}
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
