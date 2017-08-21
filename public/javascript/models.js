export class Station {
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
        this.showInfo = false;
    }
}


export class Network {
    constructor(obj) {
        this.stations = [];
        this.position = {
            lat: obj.lat,
            lng: obj.lng
        };
        this.key = obj.key;
        this.defaultAnimation = 2
    }

    addStation(obj) {
        let s = new Station(obj);
        this.stations.push(s);
    }

}
