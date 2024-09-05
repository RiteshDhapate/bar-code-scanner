import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";

function Scanner() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      setResult(decodedText);
      console.log(`Code scanned = ${decodedText}`, decodedResult);
    }

    function getOptimalQrBoxSize() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth < 600) {
        return {
          width: Math.min(screenWidth * 0.8, 300),
          height: Math.min(screenHeight * 0.4, 200),
        }; // Smaller QR box for small screens
      } else {
        return {
          width: Math.min(screenWidth * 0.6, 500),
          height: Math.min(screenHeight * 0.5, 250),
        }; // Larger QR box for bigger screens
      }
    }

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true, // Ensures the same camera is used if the user reopens the scanner
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-reader",
      config,
      false
    );
    html5QrcodeScanner.render(onScanSuccess);

    return () => {
      html5QrcodeScanner.clear();
    };
  }, []);

  return (
    <div className="App">
      <div id="qr-reader" className="main-reader"></div>
      <h1>{result}</h1>
    </div>
  );
}

export default Scanner;
