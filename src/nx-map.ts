
export class NXMap
{
    private _mapProvider: MapRpovider = null;

    constructor(mapRpovider: MapRpovider){
        this._mapProvider = mapRpovider;
        if(this._mapProvider == null)
            this._mapProvider = MapRpovider.GoogleMap;
    }

    initilizeMap():void
    {
        
    }

    initilizeAddress(addressInput, autoCompleteCallback):void
    {

    }
}