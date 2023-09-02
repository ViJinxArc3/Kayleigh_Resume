import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


//import components
import Profile from './components/profile';
import Main from './components/main';

//import assets
import Kb from './assets/images/kb2.jpg';

function App() {
  return (
    <div className="app-container">
      
     <Profile image={Kb} name="Kayleigh Botha" capacity="Fullstack Developer Student" location="Cape Town, WC, RSA" address="bothakayleigh@gmail.com"/>
  <Main />
    </div>
  );
}

export default App;
