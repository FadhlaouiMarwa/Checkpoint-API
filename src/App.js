import {  Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error';
import Home from './component/Home';
import UserList from './component/UserList';

function App() {
  return (
    <div style={{backgroundColor:"#CDD3D5"}} className="App">
      <ul style={{display:"flex", justifyContent:"space-around"}}>
     <Link to={"/"}><li style={{fontSize:25 }}>La page d'acceuil</li></Link> 
     <Link to={"/users"}><li style={{fontSize:25 }}>La liste des utilisateurs</li></Link>
     </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <div style={{padding:40}}>
     <footer style={{padding:40,justifyContent:"left"}}> Created By Fadhlaoui Marwa @2022</footer>
     </div>
    </div>
  );
}

export default App;
