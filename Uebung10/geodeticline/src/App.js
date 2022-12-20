import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Airports from './data/Airports.json';
import L, { marker } from "leaflet";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet'
import "./App.css";
import "leaflet/dist/leaflet.css";
import { Grid } from '@mui/material';
import axios from "axios";

var myIcon = L.icon({
  iconUrl: require('./data/Plane_icon.png'),
  iconSize: [20, 20],
  iconAnchor: [20, 20],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});


class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {slat:null, slon:null, elat:null, elon:null, renderStart: false, renderEnd: false, line: null, renderLine: false};
  }


  render() {
    return (
      <>
        <h1>Test</h1>
        <h3>In order to display a geodetic line, you have to select a Startingpoint and an Endpoint. To do that, click on an Airplane-Icon and select it as Start- or Endpont.</h3>
        <MapContainer center={[47.5349, 7.6416]} zoom={8} scrollWheelZoom={true}>

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

          {Airports.map(Airports => (
            <Marker
            key={Airports.fields.icao}
            position={[Airports.fields.geo_point_2d[0],Airports.fields.geo_point_2d[1]]}
            icon={myIcon}>
              <Popup position={[Airports.fields.geo_point_2d[0],Airports.fields.geo_point_2d[1]]} minWidth={300}>
                <div>
                  <div>
                    <h2>{Airports.fields.name_en}</h2>
                    iata: {Airports.fields.iata}<br/>
                    Country: {Airports.fields.country}<br/>
                    Website: <a href={Airports.fields.website} target="_blank">{Airports.fields.website}</a><br/><br/>
                    <Grid container>
                      <Grid>
                        <h3 style={{marginBottom:25}}>Select as:</h3>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid xs="5"style={{marginLeft:7, marginRight:17}}>
                        <Button variant='contained' onClick={() => {this.setState({slat:`${Airports.fields.geo_point_2d[0]}`}); 
                                                                    this.setState({slon:`${Airports.fields.geo_point_2d[1]}`});
                                                                    this.setState({renderStart: true});}}>
                          Departure
                        </Button>
                      </Grid>
                      <Grid xs="5"style={{marginLeft:17}}>
                        <Button variant='contained' onClick={() => {this.setState({elat:`${Airports.fields.geo_point_2d[0]}`}); 
                                                                    this.setState({elon:`${Airports.fields.geo_point_2d[1]}`});
                                                                    this.setState({renderEnd: true});}}>
                          Destination
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Popup>
            </Marker>
          ) )}
          {this.state.renderLine &&<>
            <GeoJSON data={this.state.line} style={{ weight: 2, opacity: '100%', color: 'blue'}}/>
          </>}
        </MapContainer>

        {this.state.renderStart &&
        <>
          <h2>Coordinates of Startingpoint:</h2>
          <p>{this.state.slat} / {this.state.slon}</p>
        </>
        }

        {this.state.renderEnd &&
        <>
          <h2>Coordinates of Endpoint:</h2>
          <p>{this.state.elat} / {this.state.elon}</p>
        </>
        }
        <Button variant='contained' onClick={() => {var url = `https://vm26.sourcelab.ch/geodetic/&?slat=${this.state.slat}&slng=${this.state.slon}&elat=${this.state.elat}&elng=${this.state.elon}`;
                                                    console.log(url)
                                                    axios
                                                      .get(url)
                                                      .then((response) => {
                                                        this.setState({line: response.data, renderLine: true});
                                                      })
        }}>calculate</Button>
        <Button variant='contained' color='error' onClick={() => {this.setState({Line: null, slat:null, slon:null, elat:null,elon:null, renderEnd:false, renderStart:false, renderLine: false})}}>Reset</Button>
      </>
    )
  }
}

export default MyMap;