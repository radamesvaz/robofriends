import React, { Component } from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

    render(){
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? 
            <h1 className='tc f3'>Loading</h1> :
            (
            <div className = 'tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            {/* <Scroll> */}
                <ErrorBoundry>
                    <CardList robots = {filterRobots}/>
                </ErrorBoundry>
            {/*</Scroll>*/}
            </div>
        );
    
    }
   
}

export default App;