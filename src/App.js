
import './App.css';
import Accordion from './Components/HowTo/Accordion/Accordion';
import IconBar from './Components/HowTo/IconBar/IconBar';
import MenuIcon from './Components/HowTo/MenuIcon/MenuIcon';
import Tabs from './Components/HowTo/Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <IconBar/>
      <MenuIcon/>
      <Accordion/>
      <Tabs/>
    </div>
  );
}

export default App;
