"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NXAddress = void 0;
class NXAddress {
    constructor(address1, address2, cityName, cityCode, provinceName, provinceCode, countryName, countryCode, postCode) {
        this.Address1 = address1;
        this.Address2 = address2;
        this.CityCode = cityCode;
        this.CityName = cityName;
        this.ProvinceCode = provinceCode;
        this.ProvinceName = provinceName;
        this.CountryCode = countryCode;
        this.CountryName = countryName;
        this.PostCode = postCode;
    }
}
exports.NXAddress = NXAddress;
