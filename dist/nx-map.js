"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NXMap = void 0;
const nx_map_google_1 = require("./nx-map-google");
class NXMap {
    constructor(mapProvider = "GOOGLE") {
        //this._mapProvider = mapRpovider;
        //if(this._mapProvider == null)
        //    this._mapProvider = MapProvider.GoogleMap;
        //private _mapProvider: MapProvider = null;
        //private googleMap: NXMapGoogle = new NXMapGoogle();
        this._mapProvider = null;
        this._mapProvider = new nx_map_google_1.NXMapGoogle();
    }
    initilizeMap(mapContainer, zoom, latlang, mapTypeID) {
        return this._mapProvider.initilizeMap(mapContainer, zoom, latlang, mapTypeID);
    }
    //initilizeAddress(addressInput, mapContainer: HTMLDivElement = null, autoCompleteCallback):void
    initilizeAddress(addressInput, mapContainer, autoCompleteCallback) {
        this._mapProvider.initilizeAddress(addressInput, mapContainer, autoCompleteCallback);
    }
}
exports.NXMap = NXMap;
