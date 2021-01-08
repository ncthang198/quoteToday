import { ADD, SUB } from "../actions/actions-type"

const initState = {
    number: 0
}

export default countReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD: {
            return {
                number: state.number + payload.value
            }
        }
        case SUB: {
            return {
                number: state.number - payload.value
            }
        }
        default: {
            return state
        }
    }
}