import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App flex flex-col w-full">
      <div className='background flex flex-col h-screen pl-10 pr-10 xl:pl-20 xl:pr-20'>
        <Navbar className='w-full' />
        <Home className="w-full flex items-center justify-center m-24 bg-black"/>
      </div>
      
    </div>
  );
}

export default App;
