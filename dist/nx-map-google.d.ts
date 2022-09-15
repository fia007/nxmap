import { NXMapProvider } from "./nx-map-provider";
export declare class NXMapGoogle extends NXMapProvider {
    protected static componentForm: {
        address1: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        address2: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        city: {
            operator: string;
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        citycode: {
            operator: string;
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        state: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        statecode: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        country: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        countrycode: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
        postalcode: {
            seprator: string;
            params: {
                param: string;
                format: string;
            }[];
        };
    };
    constructor();
    initilizeMap(mapContainer: any, zoom: any, latlang: any, mapTypeID: any): any;
    initilizeAddress(addressInput: any, mapContainer: any, autoCompleteCallback: any): void;
    private static renderAddress;
}
