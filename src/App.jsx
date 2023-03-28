import './styles/reset.css';
import './styles/App.css';
import Button from "./components/ui/button/Button";
import Card from './components/ui/card/Card';
import Grid from './components/ui/grid/Grid';
import CountDownSection from './components/section/countDown/CountDownSection';

function App() {
  return (
    <div className='App'>
     <CountDownSection />
    </div>
  );
}
export default App