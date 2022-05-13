import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';


const isLogin = true;

function App() {
  return (

  // React-Route-Dom V5
  // <BrowserRouter>
  //  <Link to="/">Home</Link>
  //  <switch>
  //    <Route path="/profile/:id" component={ Profile } />
  //    <Route path="/profile" component={ Profile } />
  //    <Route path="/about" component={ About } />
  //    <Route path="/" exact component={ Home } />
  //    <Route path="/login" 
  //       render={() =>
  //       (isLogin ? <Redirect to="/" /> : <Login />)} />
  //    <Route component={NotFound} />
  //  </switch>
  // </BrowserRouter>


  //React-Route-Dom V6
   <BrowserRouter>
   <Links />
   <NavLinks />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} >
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/login" 
        element={(isLogin ? <Navigate to="/" /> : <Login />)} />
      <Route path="*" element={<NotFound />} />
    </Routes>
     
   </BrowserRouter>
  );
}

export default App;
