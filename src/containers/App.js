import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }


    render(){
        const { searchField, onSearchChange, isPending, robots } = this.props;
        const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? 
            <h1 className='tc f3'>Loading</h1> :
            (
            <div className = 'tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll> 
                <ErrorBoundry>
                    <CardList robots = {filterRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
        );
    
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);