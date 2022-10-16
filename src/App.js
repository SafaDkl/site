import './App.css';
import Home from './pages/Home';
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

function App() {
  return (
    <ScopedCssBaseline>
      <div id="root">
        <Home />
      </div>
    </ScopedCssBaseline>
  );
}

export default App;
