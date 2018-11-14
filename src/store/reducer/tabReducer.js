const defaultState = {
    data : [],
    defaultData : [],
    
}

export default (state=defaultState,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "AXIOS_DATA_FULFILLED" : {
            newState.data = action.payload.data.apis
            newState.defaultData = action.payload.data.apis
            return newState
        }
        case "SET_NEWDATA" : {
            newState.data = action.value
            return newState
        }
        case "SET_DEFAULTDATA" : {
            newState.data = newState.defaultData
            return newState
        }
        default : return state
    }
}