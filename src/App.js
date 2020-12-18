import './App.css';
import { useStateValue } from './store/stateProvider';


function App() {
  const [{ msg }, dispatch] = useStateValue();
  console.log(msg);
  return (
    <div className="App">
      {/* All pages components will render here */}
      {/* Header */}
      Welcome to cookbook website. We are currently making delicious food recipes, Once it ready we will show it to you here
    </div>
  );
}

export default App;
