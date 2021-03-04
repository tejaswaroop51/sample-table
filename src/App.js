import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import Table from './components/Table';
function App() {
    const [tableInformation, setTableInformation] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const dataPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        "name":"smss.exe",
                        "device":"Stark",
                        "path":"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
                        "status":"scheduled"
                    },
                    {
                        "name":"netsh.exe",
                        "device":"Targaryen",
                        "path":"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
                        "status":"available"
                    },
                    {
                        "name":"uxtheme.dll",
                        "device":"Lanniester",
                        "path":"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
                        "status":"available"
                    },
                    {
                        "name":"cryptbase.dll",
                        "device":"Martell",
                        "path":"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
                        "status":"scheduled"
                    },
                    {
                        "name":"7za.exe",
                        "device":"Baratheon",
                        "path":"\\Device\\HarddiskVolume1\\temp\\7za.exe",
                        "status":"scheduled"
                    }
                ])
            }, 1000)
        })
        dataPromise.then((tableInformation) => {
            setTableInformation(tableInformation);
            setLoading(false);
        })
    }, []);
  return (
    <div className="App">
      <Header />
      <div className="main">
          <Table
            loading={loading}
            data={tableInformation}
          />
      </div>
      <Footer />
    </div>
  );
}

export default App;
