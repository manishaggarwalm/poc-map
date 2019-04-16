/*global google*/

import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
  Polygon,
  Circle,
  Rectangle,
  Polyline,
} from 'react-google-maps';
import { DrawingManager } from 'react-google-maps/lib/components/drawing/DrawingManager';
import MarkerWithInfoWindow from './marker-with-info-window';

class Map extends Component {
  renderMarkers = (markers) =>
    markers.map((marker) => (
      <MarkerWithInfoWindow
        key={marker.position.lat}
        position={marker.position}
        content={marker.content}
      />
    ));

  render() {
    const coords = [
      { lat: 41.85258, lng: -87.35141 },
      { lat: 41.856795, lng: -87.554298 },
      { lat: 41.95258, lng: -87.454298 },
    ];

    var outerCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
    ];

    var innerCoords = [
      { lat: 28.745, lng: -70.579 },
      { lat: 29.57, lng: -67.514 },
      { lat: 27.339, lng: -66.668 },
    ];

    const MapWithADirectionsRenderer = compose(
      withProps({
        containerElement: (
          <div
            style={{
              height: '500px',
              overflow: 'hidden',
              position: 'relative',
            }}
          />
        ),
        googleMapURL:
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyjJq4plBVuf3fzcxnH-UDsMxgnGvS1ms&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100%' }}>Loading</div>,
        mapElement: <div style={{ height: '100%', width: '70%' }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();

          DirectionsService.route(
            {
              destination: new google.maps.LatLng(41.85258, -87.65141),
              optimizeWaypoints: true,
              origin: new google.maps.LatLng(41.85073, -87.954298),
              provideRouteAlternatives: true,
              travelMode: google.maps.TravelMode.DRIVING,
              waypoints: [
                {
                  location: new google.maps.LatLng(41.75073, -87.854298),
                },
                {
                  location: new google.maps.LatLng(41.65073, -87.654298),
                },
              ],
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
              } else {
                //console.error(`error fetching directions ${result}`);
              }
            }
          );
        },
      })
    )((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
      >
        <DrawingManager
          // onCircleComplete={(a) => console.log(a)}
          // defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={{
            circleOptions: {
              clickable: false,
              editable: true,
              fillColor: '#ffff00',
              fillOpacity: 1,
              strokeWeight: 5,
              zIndex: 1,
            },
            drawingControl: true,
            drawingControlOptions: {
              drawingModes: [
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
              ],
              position: google.maps.ControlPosition.TOP_CENTER,
            },
          }}
        />
        {props.directions && (
          <DirectionsRenderer
            editable
            draggable
            directions={props.directions}
            panel={document.getElementById('panel')}
          />
        )}
        <div id="panel" />
        {this.renderMarkers([
          { content: 'Manish', position: { lat: 41.756795, lng: -87.954298 } },
          { content: 'Manish', position: { lat: 41.656795, lng: -87.954298 } },
          { content: 'Manish', position: { lat: 41.566795, lng: -87.954298 } },
          { content: 'Manish', position: { lat: 41.856795, lng: -87.954298 } },
          { content: 'Manish', position: { lat: 41.956795, lng: -87.954298 } },
        ])}
        <Polygon
          draggable
          editable
          path={coords}
          key={1}
          options={{
            fillColor: '#000',
            fillOpacity: 0.4,
            strokeColor: '#000',
            strokeOpacity: 1,
            strokeWeight: 1,
          }}
          onClick={() => {
            //console.log('Polygon Clicked');
          }}
        />
        <Circle
          draggable
          editable
          center={new google.maps.LatLng(41.75073, -88.15)}
          radius={9000}
          options={{
            fillColor: '#f00',
            strokeColor: '#f00',
          }}
        />
        <Rectangle
          draggable
          editable
          bounds={{
            east: -87.754298,
            north: 41.75073,
            south: 41.95073,
            west: -87.954298,
          }}
        />
        <Polygon
          draggable
          editable
          paths={[outerCoords, innerCoords]}
          key={2}
          options={{
            fillColor: '#000',
            fillOpacity: 0.4,
            strokeColor: '#000',
            strokeOpacity: 1,
            strokeWeight: 1,
          }}
          onClick={() => {
            //console.log('Polygon Clicked');
          }}
        />
        <Polyline
          draggable
          editable
          path={[
            { lat: 41.65258, lng: -87.55141 },
            { lat: 41.75258, lng: -87.56141 },
            { lat: 41.85258, lng: -87.57141 },
            { lat: 41.906795, lng: -87.554298 },
          ]}
        />
      </GoogleMap>
    ));

    return <MapWithADirectionsRenderer />;
  }
}
export default Map;
