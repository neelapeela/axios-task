import './App.css';
import axios from 'axios';

function App() {
  const user = {
    name: 'Neel Madhav Dogra',
    username: 'neelapeela',
    email: 'psneelmadhav@gmail.com'
  }

  //read
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(request=>{
      console.log("READING DATA")
      console.log(request.data)
    })
  
  //create
  axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    .then(request=>{
      console.log("CREATING DATA")
      console.log(request.data)
    })
  
  //delete
  const id = 3
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(request=>{
      console.log("DELETING DATA")
      console.log(request.data)
    })

  //update
  axios.put(`https://jsonplaceholder.typicode.com/users/1`, {user})
    .then(request=>{
      console.log("UPDATING DATA")
      console.log(request.data)
    })

  return (
    <div className="App">
        <h1>Axios Task. (Please open the dev tools console to see axios requests)</h1>
    </div>
  );
}

export default App;
