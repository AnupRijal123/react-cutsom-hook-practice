import './App.css';
import { useCopyToClipboard } from './hooks/useCopyToClipboard.js';


function App() {
  const handleCopy = useCopyToClipboard();

  const copyText = () => {
    console.log('clicked')
    const textDom = document.querySelector('.text');
    console.log(textDom);
    console.log(textDom.innerHTML);
    handleCopy(textDom.innerHTML);
  }
  return (
    <div>
      <p className="text">hello this is test</p>
      <button onClick={copyText}>copy text</button>
    </div>
  );
}

export default App;
