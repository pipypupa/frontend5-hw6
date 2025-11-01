import events from "./upcoming-events.json";
import { PageBoard } from "./components/PageBoard";
import "./App.css";
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageBoard
        title="24th Core Worlds Coalition Conference"
        events={events}
      />
    </div>
  );
}

export default App;