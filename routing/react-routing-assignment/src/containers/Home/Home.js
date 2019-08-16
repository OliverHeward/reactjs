import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import NoMatch from '../../components/NoMatch/NoMatch';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header>
                    <nav>
                        <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
                            <li style={{margin: '10px', display: 'inline-block'}}><NavLink to="/users" exact >Users</NavLink></li>
                            <li style={{margin: '10px', display: 'inline-block'}}><NavLink to="/courses" exact>Courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Redirect from="/all-courses" to="/courses"/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default Home;