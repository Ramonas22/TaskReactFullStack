import './App.css';
import Appbar from './components/Appbar';
import Message from './components/Message'
import Notification from './components/Notification'

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Message/>
      <Notification/>
    </div>
  );
}

export default App;
