import { Component } from '@angular/core';
import {} from 'googlemaps';
import { NXMap } from 'chb-nx-map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nx-ma-example';
  nxMap: NXMap = new NXMap("GOOGLE");

  ngOnInit(): void {
    this.nxMap.initilizeAddress(document.getElementById("txtAddressSearch"), null, (address: any) => {this.addressSelected(address)});
  }

  addressSelected(address: any)
    { 
      if(address == null)
            return;

        document.getElementById('txtAddress1')?.setAttribute('value', address.Address1);
        document.getElementById('txtAddress2')?.setAttribute('value', address.Address2);
        document.getElementById('txtCityCode')?.setAttribute('value', address.CityCode);
        document.getElementById('txtCityName')?.setAttribute('value', address.CityName);
        document.getElementById('txtProvCode')?.setAttribute('value', address.ProvinceCode);
        document.getElementById('txtProvinceName')?.setAttribute('value', address.ProvinceName);
        document.getElementById('txtCountryCode')?.setAttribute('value', address.CountryCode);
        document.getElementById('txtCountryName')?.setAttribute('value', address.CountryName);
        document.getElementById('txtPostalCode')?.setAttribute('value', address.PostCode);

        console.log(
        'Address 1: ' + address.Address1 +
        'Address 2: ' + address.Address2 +
        'City Code: ' + address.CityCode +
        'City Name: ' + address.CityName +
        'Province Code: ' + address.ProvinceCode +
        'Province Name: ' + address.ProvinceName +  
        'Country Code: ' + address.CountryCode +
        'Country Name: ' + address.CountryName +
        'Post Code: ' + address.PostCode
      );
      
    }

}
