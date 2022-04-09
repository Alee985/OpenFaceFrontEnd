import Topbar from './modules/Topbar/Topbar';
import Content from './modules/Content/Content';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Content/>
    </div>
  );
}

export default App;
