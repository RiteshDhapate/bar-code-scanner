import logo from './logo.svg';
import './App.css';
import {Html5QrcodeScanner} from "html5-qrcode"
import { useEffect, useState } from 'react';
function App() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      setResult(decodedText);
      console.log(`Code scanned = ${decodedText}`, decodedResult);
    }
    var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });
    html5QrcodeScanner.render(onScanSuccess);
  },[])
  return (
    <div className="App">
      <div id="qr-reader" style={{ width: "600px" }}></div>
      <h1>{ result }</h1>
    </div>
  );
}

export default App;
