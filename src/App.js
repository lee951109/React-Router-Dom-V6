import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';


function App() {
  return (

  // React-Route-Dom V5
  // <BrowserRouter>
  //   <switch>
  //     <Route path="/" component={ Home } />
  //     <Route path="/profile" component={ Profile } />
  //     <Route path="/profile/:id" component={ Profile } />
  //     <Route path="/about" component={ About } />
  //   </switch>
  // </BrowserRouter>


  //React-Route-Dom V6
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} >
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/about" element={<About />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
