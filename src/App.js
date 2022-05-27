import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Header from './pages/Header';
import PageNotFound from './pages/PageNotFound';
import New from './pages/New';
import Hook from './pages/Hooks'
import LoginPage  from "./pages/LoginPage";
import Lifecycle from "./pages/Lifecycle";
import HooksUseEffects from "./pages/HooksUseEffects";
import WillMount from "./pages/WillMount";
import Toggle from "./pages/Toggle";
//import AuthApi from "./AuthApi";



function App() {
 
// const [auth,setAuth] = React.useState(false);

  return (
   // <AuthApi.Provider value={{auth,setAuth}}>
   <BrowserRouter>
      <Routes>   
      <Route path="/" element={<LoginPage />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/willmount" element={<Toggle />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/hookuseeffect" element={<HooksUseEffects/>}/>
        <Route path="/lifecycle" element={<Lifecycle data="mydata"/>}/>
    
        <Route path="/hook" element={<Hook/>}/>
        <Route path="/new" element={<New />}/>
    
        <Route path="*" exact= "true" element={<PageNotFound/>}/>

      </Routes>
      
   </BrowserRouter>
    //</AuthApi.Provider>
   
  );
}

export default App;
