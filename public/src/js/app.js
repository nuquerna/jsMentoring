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
        console.log(this.props.testStore);
        
        return (
            <div>
            <input type='text' ref={(input) => {this.newsInput = input}}/>
            <button onClick={this.addNews.bind(this)}>Add News</button>
            <ul>
            </ul>
            {this.props.testStore.map((news, index) => <li key={index}>{news}</li>)}
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