import logo from './logo.svg';
import './App.css';
import {Html5QrcodeScanner} from "html5-qrcode"
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
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
    </div>
  );
}

export default App;
