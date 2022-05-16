import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Login></Login>
      <Register></Register>
    </div>
  );
}

export default App;
