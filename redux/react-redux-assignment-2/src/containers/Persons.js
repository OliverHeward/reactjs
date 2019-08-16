import React, { Component } from 'react';

import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson(this.props.prsns)} />
                {this.props.prsns.map(psn => (
                    <Person 
                        key={psn.id}
                        name={psn.name} 
                        age={psn.age} 
                        clicked={() => this.props.onDeletePerson(psn.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsns: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({type: 'ADD', personData: {name: name, age: age}}),
        onDeletePerson: (id) => dispatch({type: 'DELETE', personElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);