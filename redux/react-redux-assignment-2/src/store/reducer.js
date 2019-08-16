const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            const newPerson = {
                id: Math.random(), 
                name: action.personData.name, 
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case 'DELETE':
        const updatedArray = state.persons.filter(person => person.id !== action.personElId);
            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
}

export default reducer;