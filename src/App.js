import './App.css';
import { Routes, Route } from 'react-router-dom';
import Timerlayout from "./layouts/Timerlayout.js"
import Router from './routes/Router.js';
import PageNotFound from './layouts/PageNotFound.js';
import DisplayFechData from './layouts/DisplayFechData.js';
import Timer3 from './utility/Timer3.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Timerlayout />} />
        <Route path='/serverdown' element={<Timerlayout />} />
        <Route path='/timer3' element={<Timer3 />} />
        <Route path='/displaydata' element={<DisplayFechData />} />
        <Route path='/route/*' element={<Router />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
