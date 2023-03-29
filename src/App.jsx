import './styles/reset.css';
import './styles/App.css';
import CountDownSection from './components/section/countDown/CountDownSection';
import EventSection from './components/section/eventSection/EventSection';
import ConferenceSection from './components/section/conference/ConferenceSection';

function App() {
  return (
    <div className='App'>
     <CountDownSection  until={'2024-05-05'}/>
     <EventSection />
     <ConferenceSection />
    </div>
  );
}
export default App