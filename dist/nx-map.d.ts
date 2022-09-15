export declare class NXMap {
    private _mapProvider;
    constructor(mapProvider?: string);
    initilizeMap(mapContainer: any, zoom: any, latlang: any, mapTypeID: any): any;
    initilizeAddress(addressInput: any, mapContainer: any, autoCompleteCallback: any): void;
}
