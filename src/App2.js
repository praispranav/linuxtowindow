import React,{ useReducer, useContext } from 'react'
import MainComponent from './Components2/MainComponent'

export const UserContext = React.createContext()

const initialState = {
    scroll:0,

}

const reducer = (state, action) => {
    switch(action.type){
        case 'scroll':
            return { ...state, scroll: action.value }
    }
}

export default function App2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{state: state, dispatch: dispatch}}>
            <div>
                <MainComponent />
            </div>
        </UserContext.Provider>
    )
}
