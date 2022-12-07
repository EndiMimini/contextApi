import './App.css';
import Wrapper from './views/Wrapper';
import Form from './components/Form';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <Form/>
      </Wrapper>
    </div>
  );
}

export default App;
