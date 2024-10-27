import './App.css';
import { Routes, Route } from 'react-router-dom';
import Timerlayout from "./layouts/Timerlayout.js"
import Router from './routes/Router.js';
import PageNotFound from './layouts/PageNotFound.js';
import UserForm from './utility/UserForm.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Timerlayout />} />
        <Route path='/userform' element={<UserForm />} />
        <Route path='/route/*' element={<Router />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
