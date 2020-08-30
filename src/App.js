import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch('https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/liipi_pyora_fasiliteetit/FeatureServer/0/query?where=HSL_ALUE%20%3D%20\'0\'&outFields=PYORAKAA,PAIKKOJA,TUNNUSFI,HSL_ALUE&outSR=4326&f=json')
    .then(res => res.json())
    .then(res => setData(res.features) )
  }, [])
  
  const listBikes = () => data.map(e => 
    <tr key={e.attributes.TUNNUSFI}>
      <td>{e.attributes.TUNNUSFI}</td>
      <td>{e.attributes.PYORAKAA}</td>
      <td>{e.attributes.PAIKKOJA}</td>
    </tr>
    )
  

  return (
    <div className="App">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nimi</th>
              <th>Pyöriä saatavilla</th>
              <th>Paikkoja vapaana</th>
            </tr>
          </thead>
          <tbody>
            {listBikes()}
          </tbody>
        </table>
      </div>
  )
}

export default App;
