import logo from './logo.svg';
import './App.css';

function App() {
  const student = {
    firstName: "Đỗ Văn",
    lastName: "Chuân",
    getFullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <h2>{student.getFullName()}</h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
