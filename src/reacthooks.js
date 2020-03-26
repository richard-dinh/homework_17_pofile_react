import React, {useState, useEffect} from 'react'

const App = () => {

  //must bring in useState in order to have a state in React hooks
  //useState returns an array, first being what is in the state, second being a function
  //to access count, syntax woould be countState.count
  //instead of setState, the function is now called setCountState
  const [countState, setCountState] = useState({
    count: 0,
    text: 'hotdog',
    username:'',
    email: '',
    usernameInput: '',
    emailInput: '',
  })

  const handleAddOne = () => {
    //use setCountState to set the state of count
    //note, the set state now takes the whole state object and sets it to what you define below. That means that if you have a text attribute, it gets removed and now countState only has a count attribute
    //To combat the changing of the whole object, use the spread operator (...countState). Will need to spread first as the last action in setCountState will persist. So count will be incremented by 1 instead of being set to 0 again
    setCountState({...countState, count: countState.count + 1})
  }

  const handleAddTwo = () => {
    setCountState({...countState, count: countState.count + 2})
  }

  const handleMultiplyTwo = () => {
    setCountState({ ...countState, count: countState.count * 2})
  }

  const handleDivideTwo = () => {
    setCountState({... countState, count: countState.count / 2})
  }

  const handleOver9000 = () => {
    setCountState({ ...countState, count: 9001})
  }

  const handleReset = () => {
    setCountState({ ...countState, count: 0})
  }
  const handleRandomNum = () => {
    setCountState({ ...countState, count: Math.floor(Math.random() * 101)})
  }

  const handleCornDog = () => {
    setCountState({ ...countState, text: 'Corndog'})
  }

  const handleInputChange = event => {
    setCountState({...countState, [event.target.name]: event.target.value})
  }
  const handleSubmit = event =>{
    event.preventDefault()
    setCountState({ ...countState, username: countState.usernameInput, email: countState.emailInput, usernameInput: '', emailInput: ''})
  }

  // useEffect is a function that takes in a function and an array. You pass the variables in your state in your array, and whatever is wrriten in the function will run whenever any of the variables listed in the array are updated

  // by Default, this always runs at the very beginning because the state needs to be initialized.
  // if nothing is passed in the array, then it will run onece at the beginning of the, similar to a componentDidMount()
  useEffect( () => {

  }, [countState.usernameInput])
  return (
    <>
    <h1>{countState.username ? `Welcome ${countState.username}, your email is ${countState.email}`: ''}</h1>
    <h1>Count : {countState.count}</h1>
    <button onClick = {handleAddOne}>Add 1</button>
    <button onClick = {handleAddTwo}>Add 2</button>
    <button onClick = {handleMultiplyTwo}>Multiply 2</button>
    <button onClick = {handleDivideTwo}>Divide 2</button>
    <button onClick = {handleOver9000}>Over 9000</button>
    <button onClick = {handleReset}>Reset</button>
    <button onClick = {handleRandomNum}>Random Number Between 1 and 100</button>
    <button onClick = {handleCornDog}>Corndog</button>



    <h1>Sign In Form</h1>
    <form>
      <label htmlFor ="username">Username</label>
      <input onChange = {handleInputChange} type = "text" name="usernameInput" value={countState.usernameInput}></input>
      <br/>
      <label htmlFor ="email">Email</label>
        <input onChange={handleInputChange} type = "text" name="emailInput" value={countState.emailInput}></input>
        <br />
      <button onClick = {handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default App