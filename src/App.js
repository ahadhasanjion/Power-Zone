import './App.css';
import Header from './Components/Header/Header';
import Exercise from './Components/Exercise/Exercise';
import Faq from './Components/Faq/Faq';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <Faq></Faq>
      
    </div>
  );
}

export default App;
