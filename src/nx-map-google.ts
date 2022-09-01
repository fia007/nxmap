import { NXAddress } from "./nx-address";

export class NXMapGoogle
{
    private static addressNameFormat = {
        'street_number': 'short_name',
        'route': 'long_name',
        'locality': 'long_name',
        'administrative_area_level_1': 'short_name',
        'country': 'long_name',
        'postal_code': 'short_name',
        'neighborhood': 'long_name'
        };
    private static componentForm = [
            'location',
            'locality',
            'administrative_area_level_1',
            'country',
            'postal_code',
            'route',
            'neighborhood'
            ];

    constructor(){

    }

    initilizeMap():void
    {
        
    }
    initilizeAddress(addressInput, mapContainer, autoCompleteCallback):void
    {
        const autocomplete = new google.maps.places.Autocomplete(addressInput, {
            fields: ["address_components", "geometry", "name"],
            types: ["address"],
            });

        autocomplete.addListener('place_changed', function () {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                return null;
            }
            
            //document.getElementById('location').value = this.getAddressComp('street_number', place.address_components) + ' '
                //   + this.getAddressComp('route', place.address_components);
            let country = '', countryCode = '', province = '', provinceCode = '', city = '', cityCode = '', address1 = '', address2 = '', postCode = '';
            for (const component of NXMapGoogle.componentForm) {
            // Location field is handled separately above as it has different logic.
                if (component !== 'location') {
                    //document.getElementById(component).value = this.getAddressComp(component, place.address_components);
                    switch(component)
                    {
                        case 'country':
                            country = NXMapGoogle.getAddressComp(component, place.address_components);
                        break;
                        //case 'countryCode':
                        //    countryCode = NXMapGoogle.getAddressComp(component, place.address_components);
                        //break;
                        case 'administrative_area_level_1':
                            province = NXMapGoogle.getAddressComp(component, place.address_components);
                        case 'locality':
                            city = NXMapGoogle.getAddressComp(component, place.address_components);
                        break;
                        case 'route':
                            address1 = NXMapGoogle.getAddressComp(component, place.address_components);
                        break;
                        case 'neighborhood':
                            address2 = NXMapGoogle.getAddressComp(component, place.address_components);
                        break;
                        case 'postal_code':
                            postCode = NXMapGoogle.getAddressComp(component, place.address_components);
                        break;
                    }
                }
            }

            return new NXAddress( address1, address2, city, cityCode, province, provinceCode, country, countryCode, postCode);

        });
    }

    static getAddressComp(type, address_components) : string {
        for (const component of address_components) {
            if (component.types[0] === type) {
                return component[NXMapGoogle.addressNameFormat[type]];
            }
        }
        return '';
    }
}