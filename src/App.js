// import logo from './logo.svg';
// import './App.css';
// import {Html5QrcodeScanner} from "html5-qrcode"
// import { useEffect, useState } from 'react';
// function App() {
//   const [result, setResult] = useState(null);
//   useEffect(() => {
//     function onScanSuccess(decodedText, decodedResult) {
//       setResult(decodedText);
//       console.log(`Code scanned = ${decodedText}`, decodedResult);
//     }
//     var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
//       fps: 10,
//       qrbox: 250,
//     });
//     html5QrcodeScanner.render(onScanSuccess);
//   },[])
//   return (
//     <div className="App">
//       <div id="qr-reader" className="main-reader"></div>
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default App;



// import logo from "./logo.svg";
// import "./App.css";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import { useEffect, useState } from "react";

// function App() {
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     function onScanSuccess(decodedText, decodedResult) {
//       setResult(decodedText);
//       console.log(`Code scanned = ${decodedText}`, decodedResult);
//     }

//     function getOptimalQrBoxSize() {
//       if (window.innerWidth < 600) {
//         return { width: 300, height: 100 }; // Adjusted for small screens
//       } else {
//         return { width: 500, height: 150 }; // Adjusted for larger screens
//       }
//     }

//     const config = {
//       fps: 10,
//       qrbox: getOptimalQrBoxSize(),
//       rememberLastUsedCamera: true, // Ensures the same camera is used if the user reopens the scanner
//     };

//     const html5QrcodeScanner = new Html5QrcodeScanner(
//       "qr-reader",
//       config,
//       false
//     );
//     html5QrcodeScanner.render(onScanSuccess);

//     return () => {
//       html5QrcodeScanner.clear();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <div id="qr-reader" className="main-reader"></div>
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      setResult(decodedText);
      console.log(`Code scanned = ${decodedText}`, decodedResult);
    }

    function getResponsiveQrBoxSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        return { width: 200, height: 80 }; // Small devices (e.g., phones in portrait mode)
      } else if (screenWidth >= 480 && screenWidth < 768) {
        return { width: 300, height: 100 }; // Medium devices (e.g., larger phones, small tablets)
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        return { width: 400, height: 120 }; // Larger tablets and small laptops
      } else {
        return { width: 500, height: 150 }; // Desktops and larger screens
      }
    }

    const config = {
      fps: 10,
      qrbox: getResponsiveQrBoxSize(),
      rememberLastUsedCamera: true,
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
    <div className="App" style={{ padding: "20px" }}>
      <div
        id="qr-reader"
        className="main-reader"
        style={{ maxWidth: "100%", margin: "auto" }}
      ></div>
      <h1 style={{ wordBreak: "break-word" }}>{result}</h1>
    </div>
  );
}

export default App;
