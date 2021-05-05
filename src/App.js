import './App.css';
import React,{useReducer} from "react"
import Components from "./Components/Components"
import Components2 from './Components/Components2';
// import AddPhotos from "./Tests/AddPhotos"
import Drag from "./Components/Drag"
import Parallel from "./Components/Parallel"

export const UserContext = React.createContext();

const initialState = {
  pranavZero: 0,
  active:1,
  story:[],
  activeStory:'',
  post:[]
}

const reducer = (state, action)=>{
  switch(action.type){
    case 'post':
      // console.log(state.post)
      return {...state,post:action.data}
    case 'active': 
      return { ...state, active: action.value }
    case 'story':
      return { ...state,story: action.value }
    case 'updatestory':
      const updatedData = state.story.map((item)=>{
        if(item.id === action.id){
          item.read = true
          }
          // console.log(item)
          return item
        })
        return { ...state, story:updatedData, activeStory:action.image }
  }
}

const Myfunction = () =>{
  return(
    <h1>Hello thisPranav</h1>
  )
}


function App() {
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <UserContext.Provider value={{state:state, dispatch:dispatch}}>
        {/* <Components /> */}
        {/* <Components2 /> */}

        {/* <div style={{marginTop:"200px"}}>
          <Drag top="300"/>
        </div>

        <Drag />
        <Myfunction />
        <Myfunction />
        <Myfunction />
        <Myfunction />
       */}
       <Parallel />
      </UserContext.Provider>
    </div>
  );
}



export default App;
