const initialState = {
    name: "This is initial name"
}

const TestReducer = (state = initialState,action) => {
    switch(action.type){
        case "A_TEST_ACTION":
            return { 
                name : action.username
            }
        default:
        return state;
    }
}


export default TestReducer;