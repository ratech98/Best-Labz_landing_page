import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from '../src/components/pages/layout'
import Home from '../src/components/pages/home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
