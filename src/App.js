import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main.jsx';
import Products from './products';
import About from './About';


function App() {
  return (
    <>
     {/* <Main/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter> 
      
    </>
  );
}

export default App;
