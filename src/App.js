import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile/Profile'
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <FullName></FullName>
       <Profile></Profile>
       
      </header>
      <footer>
     <Adress></Adress></footer>
    </div></>
  );
}

export default App;
