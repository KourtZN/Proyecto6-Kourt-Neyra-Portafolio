import './app.css';
import {Header} from '../Components/Header/Header'
import {Footer} from '../Components/Footer/Footer'


function App(props) {

  return (
  <div>
    <Header/>
    <main className="main">
    {props.children}
    </main>
    <Footer/>
  
  </div>
  )
}

export default App;
