import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home'
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route exact path='/' component={Home}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
