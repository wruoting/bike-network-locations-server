import { default as React, Component} from 'react';
import ReactDOM from 'react-dom';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from "lodash";
import Helmet from "react-helmet";

class Station {
	constructor(obj) {
		this.emptySlots = obj.emptySlots;
		this.freeBikes = obj.freeBikes;
		this.id = obj.id;
		this.key = obj.name;
		this.timestamp = obj.timestamp;
		this.position = {
			lat: obj.lat,
			lng: obj.lng
		}
	}
}


class Network {
	constructor(obj) {
		this.stations = [];
		this.position = {
			lat: obj.lat,
			lng: obj.lng
		};
		this.key = obj.key;
		this.defaultAnimation =  2
	}

	addStation(obj) {
		let s = new Station(obj);
		this.stations.push(s);
	}

}


class GettingStartedExample extends Component {
	constructor(props) {
        super(props)
        
		this.dummyNetwork = new Network({lat: 49.8225, lng: 19.044444, key: "BBBike"});

		this.dummyNetwork.addStation({lat: 49.815247, lng: 19.044895, name: "08 Plac Mickiewicza", timestamp: "2017-08-20T20:33:24.186000Z", id: "34eff3b3b29182f81ba630f51b1a0637", emptySlots: 6, freeBikes: 6});

		this.dummyNetwork.addStation({lat: 49.830307, lng: 19.043732, name: "02 Dworzec PKS", timestamp: "2017-08-20T20:33:24.177000Z", id: "a0c8e551bca2632f7b78035df4e9d715", emptySlots: 0, freeBikes: 12});
		this.dummyNetwork.addStation({lat: 49.82578, lng: 19.031815, name: "04 Starostwo Powiatowe", timestamp: "2017-08-20T20:33:24.182000Z", id: "30c883777ca09556b00ee7764fc268a5", emptySlots: 7, freeBikes: 5});
        this.dummyNetwork.addStation({lat: 49.805598, lng: 19.057252, name: "11 ul. \u0141agodna/Z\u0142ote \u0141any", timestamp: "2017-08-20T20:33:24.189000Z", id: "4b875887b47798686ce74666a7c39d41", emptySlots: 3, freeBikes: 6});
        this.networks = [this.dummyNetwork]
		this.state = {
			markers: this.networks,
		};

		this.handleMapLoad = this.handleMapLoad.bind(this);
		this.handleMapClick = this.handleMapClick.bind(this);
		this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
		this.handleMarkerClick = this.handleMarkerClick.bind(this);

	}
    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }


    /*
     *    * This is called when you click on the map.
     *       * Go and try click now.
     *          */
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];
        this.setState({
            markers: nextMarkers,
        });
    }

    handleMarkerClick(targetMarker) {
        /*
         *      * All you modify is data, and the view is driven by data.
         *           * This is so called data-driven-development. (And yes, it's now in
         *                * web front end and even with google maps API.)
         *                     */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        console.log("handleMarkerClick", targetMarker);
        console.log("handleMarkerClick", nextMarkers);
        
        this.setState({
            markers: this.networks[targetMarker].stations,
        });
    }

    handleMarkerRightClick(targetMarker) {
        /*
         *      * All you modify is data, and the view is driven by data.
         *           * This is so called data-driven-development. (And yes, it's now in
         *                * web front end and even with google maps API.)
         *                     */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
	    console.log("handleMarkerRightClick", targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }


    render() {
        let Map = withGoogleMap(props => (
            <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
            >
            {props.markers.map((marker, index) => (
                        <Marker
                        key={index}
                        {...marker}
                        onClick={() => props.onMarkerClick(index)}
                        />
                        ))}
            </GoogleMap>
            ));
        
        
        return (
                <div style={{height: `100%`}}>
                <Helmet
                title="Getting Started"
                />
                <Map
                containerElement={
                    <div style={{ height: `500px` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                onMapLoad={this.handleMapLoad}
                onMapClick={this.handleMapClick}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerRightClick={this.handleMarkerRightClick}
                />
                </div>
               );
    }


}

ReactDOM.render(
    <GettingStartedExample />,
    document.getElementById('container')
);
