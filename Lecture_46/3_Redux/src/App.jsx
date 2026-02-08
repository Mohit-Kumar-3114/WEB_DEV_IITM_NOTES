import { useDispatch, useSelector } from "react-redux"
import { decrementLike, incrementLike, incrementLikeByInput } from './redux-store/slices/likeSlice'
import { incrementShare } from './redux-store/slices/shareSlice'

function App(){
  return (
    <>
      <LikeComponent />
      <ShareComponent />
    </>
  )
}

export default App



function LikeComponent(){
  console.log("Like Component Rendered")
  const dispatch = useDispatch()
  const likeStore = useSelector((state)=> state.likeReducer)

  return (
    <>
      <h1>Redux</h1>
      <h2>Like Count: {likeStore.likeCount}</h2>
      <button onClick={() => dispatch(incrementLike())}>Increment Like</button>
      <button onClick={() => dispatch(decrementLike())}>Decrement Like</button>
      <button onClick={() => dispatch(incrementLikeByInput(5))}>Increment Like By 5</button>
    </>
  )
}



function ShareComponent(){
  console.log("Share Component Rendered")
  const dispatch = useDispatch()
  const shareStore = useSelector(function(state){
    return state.shareReducer
  })

  return(
    <>
      <h2>Share Count: {shareStore.shareCount}</h2>
      <button onClick={() => dispatch(incrementShare())}>Increment Share</button>
    </>
  )
}



// Redux is a state management library to manage your app’s state in one central place, making it predictable, 
// easy to update, and easy to debug. Use it when your app has lots of shared data and frequent updates.


// WorkFlow of Redux-
// In Redux, state is not created inside individual components; instead, it is defined in a separate slice file. 
// The Redux store is then provided to the entire application by wrapping the App with the `Provider`, which 
// allows all child components to access the store. When a user interaction occurs, such as a button click, 
// the component dispatches an action using `useDispatch`. This action is handled by the reducer defined inside 
// the slice, where the state update logic lives. The reducer updates the state in the Redux store, and once 
// the store is updated, `useSelector` is used inside components to read the latest state and automatically 
// reflect those changes in the UI.


// Slice- A slice is a single file that contains everything related to one feature’s state. It includes 
// the initial state, reducers (functions that specify how the state changes in response to actions), and
// actions that are automatically generated based on the reducers.


// Provider- The `Provider` component from the `react-redux` library is used to wrap the root component of your
// application. It makes the Redux store available to all nested components, allowing them to access the state 
// and dispatch actions without needing to pass props down manually at every level.

 
// Action- An action is a plain JavaScript object that describes an event or change in the application.


// Reducer- A reducer is a pure function that takes the current state and an action as arguments and returns a 
// new state. It specifies how the state should change in response to a given action. Reducers are typically 
// defined inside a slice file in Redux.