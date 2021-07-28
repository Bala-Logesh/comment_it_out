import { BrowserRouter as Router } from 'react-router-dom'
import './css/utils.css'
import './css/App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

const App = () => {

  return (
    <Router>
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Main />
        </div>
      </div>
    </Router>
  )
};

export default App;
