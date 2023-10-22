import logo from './images/logo.svg'
import './App.css';
import Main from './components/main';

function App() {
  return (
    <>
      <img src={logo} alt='logo' className='logo'/>
      <Main />
    </>
  );
}

export default App;
