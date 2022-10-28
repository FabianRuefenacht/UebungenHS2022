import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";
import Grid from "@mui/material/Grid";
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'

const KKW = [["Mühleberg", 7.268042402, 46.968872773, "01.03.1967 - 30.06.1971", "373", "20. Dezember 2019", "https://www.bkw.ch/de/energie/energieproduktion/stilllegung-kernkraftwerk-muehleberg"],
          ["Gösgen", 7.966750757, 47.366075562, "01.12.1973 - 01.02.1979", "1010", "bisher nicht bekannt", "https://www.kkg.ch/"],
          ["Beznau 1", 8.228377528029124, 47.55166449728938, "01.09.1965 - 16.07.1969", "365", "bisher nicht bekannt", "https://www.axpo.com/ch/de/ueber-uns/energiewissen.detail.html/energiewissen/kernkraftwerk-beznau.html"],
          ["Beznau 2", 8.228514013695493, 47.5524273207133, "01.01.1968 - 22.10.1971", "365", "bisher nicht bekannt", "https://www.axpo.com/ch/de/ueber-uns/energiewissen.detail.html/energiewissen/kernkraftwerk-beznau.html"],
          ["Leibstadt", 8.182823992, 47.601455367, "01.01.1974 - 23.05.1984", "1245", "bisher nicht bekannt", "https://www.kkl.ch/home"]]

const KKWCircle = {color: 'blue', weight: 0, fill:true, fillOpacity: 0.2, radius:50000}

function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

return (
  <MapContainer center={[46.900, 8.300]} zoom={8} scrollWheelZoom={true}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <Marker position={[KKW[0][2], KKW[0][1]]}>
        <Popup>
          <Grid container style={{fontSize: 18}}>
            {KKW[0][0]}
          </Grid>
          <Grid container>
            gebaut: {KKW[0][3]}
          </Grid>
          <Grid container>
            Nettoleistung: {KKW[0][4]} MW
          </Grid>
          <Grid container>
            Stillegung: {KKW[0][5]}
          </Grid>
          <Grid container>
            <a target="_plank" href={KKW[0][6]}>weitere Informationen</a>
          </Grid>
        </Popup>
        <Circle center={[KKW[0][2], KKW[0][1]]} pathOptions={KKWCircle} radius={50000}/>
      </Marker>

      <Marker position={[KKW[1][2], KKW[1][1]]}>
        <Popup>
          <Grid container style={{fontSize: 18}}>
            {KKW[1][0]}
          </Grid>
          <Grid container>
            gebaut: {KKW[1][3]}
          </Grid>
          <Grid container>
            Nettoleistung: {KKW[1][4]} MW
          </Grid>
          <Grid container>
            Stillegung: {KKW[1][5]}
          </Grid>
          <Grid container>
            <a target="_plank" href={KKW[1][6]}>weitere Informationen</a>
          </Grid>
        </Popup>
        <Circle center={[KKW[1][2], KKW[1][1]]} pathOptions={KKWCircle} radius={50000}/>
      </Marker>

      <Marker position={[KKW[2][2], KKW[2][1]]}>
        <Popup>
          <Grid container style={{fontSize: 18}}>
            {KKW[2][0]}
          </Grid>
          <Grid container>
            gebaut: {KKW[2][3]}
          </Grid>
          <Grid container>
            Nettoleistung: {KKW[2][4]} MW
          </Grid>
          <Grid container>
            Stillegung: {KKW[2][5]}
          </Grid>
          <Grid container>
            <a target="_plank" href={KKW[2][6]}>weitere Informationen</a>
          </Grid>
        </Popup>
        <Circle center={[KKW[2][2], KKW[2][1]]} pathOptions={KKWCircle} radius={50000}/>
      </Marker>

      <Marker position={[KKW[3][2], KKW[3][1]]}>
        <Popup>
          <Grid container style={{fontSize: 18}}>
            {KKW[3][0]}
          </Grid>
          <Grid container>
            gebaut: {KKW[3][3]}
          </Grid>
          <Grid container>
            Nettoleistung: {KKW[3][4]} MW
          </Grid>
          <Grid container>
            Stillegung: {KKW[3][5]}
          </Grid>
          <Grid container>
            <a target="_plank" href={KKW[3][6]}>weitere Informationen</a>
          </Grid>
        </Popup>
        <Circle center={[KKW[3][2], KKW[3][1]]} pathOptions={KKWCircle} radius={50000}/>
      </Marker>

      <Marker position={[KKW[4][2], KKW[4][1]]}>
        <Popup>
          <Grid container style={{fontSize: 18}}>
            {KKW[4][0]}
          </Grid>
          <Grid container>
            gebaut: {KKW[4][3]}
          </Grid>
          <Grid container>
            Nettoleistung: {KKW[4][4]} MW
          </Grid>
          <Grid container>
            Stillegung: {KKW[4][5]}
          </Grid>
          <Grid container>
            <a target="_plank" href={KKW[4][6]}>weitere Informationen</a>
          </Grid>
        </Popup>
        <Circle center={[KKW[4][2], KKW[4][1]]} pathOptions={KKWCircle} radius={50000}/>
      </Marker>
  </MapContainer>
  );
}

export default App;
