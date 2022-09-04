import { NXMapGoogle } from "./nx-map-google"
import { NXMapProvider } from "./nx-map-provider";

export class NXMap
{
    //private _mapProvider: MapProvider = null;
    //private googleMap: NXMapGoogle = new NXMapGoogle();
    private _mapProvider: NXMapProvider = null;
    constructor(mapProvider: string = "GOOGLE" ){
        //this._mapProvider = mapRpovider;
        //if(this._mapProvider == null)
        //    this._mapProvider = MapProvider.GoogleMap;
        
        this._mapProvider = new NXMapGoogle();
    }

    initilizeMap():void
    {
        this._mapProvider.initilizeMap();
    }

    //initilizeAddress(addressInput, mapContainer: HTMLDivElement = null, autoCompleteCallback):void
    initilizeAddress(addressInput, mapContainer, autoCompleteCallback):void
    {
        this._mapProvider.initilizeAddress(addressInput, mapContainer, autoCompleteCallback);
    }
}