"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NXMapGoogle = void 0;
const nx_address_1 = require("./nx-address");
const nx_map_provider_1 = require("./nx-map-provider");
class NXMapGoogle extends nx_map_provider_1.NXMapProvider {
    constructor() { super(); }
    //Map functionality needs to be written
    initilizeMap(mapContainer, zoom, latlang, mapTypeID) {
        let gMap = new google.maps.Map(mapContainer, {
            zoom: zoom,
            center: latlang,
            mapTypeId: mapTypeID
        });
        return gMap;
    }
    initilizeAddress(addressInput, mapContainer, autoCompleteCallback) {
        const autocomplete = new google.maps.places.Autocomplete(addressInput, {
            fields: ["address_components", "geometry", "name"],
            types: ["address"],
        });
        let map = null;
        let marker = null;
        if (mapContainer != null) {
            map = new google.maps.Map(mapContainer, {
                zoom: 11,
                center: { lat: 37.4221, lng: -122.0841 },
                mapTypeControl: false,
                fullscreenControl: true,
                zoomControl: true,
                streetViewControl: true
            });
            marker = new google.maps.Marker({ map: map, draggable: false });
        }
        autocomplete.addListener('place_changed', function () {
            if (marker != null)
                marker.setVisible(false);
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                return null;
            }
            let country = '', countryCode = '', province = '', provinceCode = '', city = '', cityCode = '', address1 = '', address2 = '', postCode = '';
            for (var component in NXMapGoogle.componentForm) {
                var formElment = NXMapGoogle.componentForm[component];
                let ele = null;
                let value = '';
                for (let k = 0; k < formElment.params.length; k++) {
                    ele = formElment.params[k];
                    for (var i = 0; i < place.address_components.length; i++) {
                        var addressType = place.address_components[i].types[0];
                        let prm = ele.param;
                        if (prm == addressType) {
                            var val = place.address_components[i][ele.format];
                            if (val != '') {
                                //if OR operator is set then dont update value if it is already found
                                if (formElment.operator != '||')
                                    value = value + formElment.seprator + val;
                                else {
                                    if (value == '') {
                                        value = val;
                                    }
                                }
                            }
                        }
                    }
                }
                ;
                switch (component) {
                    case 'address1':
                        address1 = value;
                        break;
                    case 'address2':
                        address2 = value;
                        break;
                    case 'city':
                        city = value;
                        break;
                    case 'citycode':
                        cityCode = value;
                        break;
                    case 'state':
                        province = value;
                        break;
                    case 'statecode':
                        provinceCode = value;
                        break;
                    case 'country':
                        country = value;
                        break;
                    case 'countrycode':
                        countryCode = value;
                        break;
                    case 'postalcode':
                        postCode = value;
                        break;
                }
            }
            let address = new nx_address_1.NXAddress(address1, address2, city, cityCode, province, provinceCode, country, countryCode, postCode);
            autoCompleteCallback(address);
            if (map != null) {
                NXMapGoogle.renderAddress(map, marker, place);
            }
        });
    }
    static renderAddress(map, marker, place) {
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    }
}
exports.NXMapGoogle = NXMapGoogle;
NXMapGoogle.componentForm = {
    address1: { seprator: ' ', params: [{ param: 'street_number', format: 'short_name' }, { param: 'route', format: 'long_name' }] },
    address2: { seprator: ' ', params: [{ param: 'subpremise', format: 'long_name' }, { param: 'neighborhood', format: 'long_name' }] },
    city: { operator: '||', seprator: '', params: [{ param: 'locality', format: 'long_name' }, { param: 'postal_town', format: 'long_name' }, { param: 'sublocality ', format: 'long_name' }, { param: 'sublocality_level_1', format: 'long_name' }] },
    citycode: { operator: '||', seprator: '', params: [{ param: 'locality', format: 'short_name' }, { param: 'postal_town', format: 'short_name' }, { param: 'sublocality ', format: 'short_name' }, { param: 'sublocality_level_1', format: 'short_name' }] },
    state: { seprator: '', params: [{ param: 'administrative_area_level_1', format: 'long_name' }] },
    statecode: { seprator: '', params: [{ param: 'administrative_area_level_1', format: 'short_name' }] },
    country: { seprator: '', params: [{ param: 'country', format: 'long_name' }] },
    countrycode: { seprator: '', params: [{ param: 'country', format: 'short_name' }] },
    postalcode: { seprator: '', params: [{ param: 'postal_code', format: 'short_name' }] }
};
