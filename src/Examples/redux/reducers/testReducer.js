const initialState = {
    name: "This is initial name"
}

const testReducer = (state = initialState,action) => {
    switch(action.type){
        case "TEST_ACTION":
            return { 
                username : action.username
            }
        default:
        return state;
    }
}


export default testReducer;