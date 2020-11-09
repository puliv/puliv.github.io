import Menu from './components/Menu';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="box-2">
          <div className="div-top" />
          <h1>Pulié</h1>
          <h3>FRONT END</h3>
          <h3>DEVELOPER</h3>
        </div>
        <div className="box-1">
          <div className="div-top" />
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default App;
