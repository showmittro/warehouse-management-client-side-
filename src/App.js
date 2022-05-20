
import './App.css';
import {  Routes,Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import AddService from './Pages/AddService/AddService';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItem from './MyItem/MyItem';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/addItem" element={ <AddService></AddService> }></Route>
      <Route path="/manageInventories" element={ <ManageInventories></ManageInventories>}></Route>
      <Route path="/myItem" element={ <MyItem></MyItem> }></Route>
      <Route path="/service/:serviceId" element={
        <RequireAuth>
        <ServiceDetails></ServiceDetails>
      </RequireAuth>
      
      }></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    
  </div>
  );
}

export default App;
