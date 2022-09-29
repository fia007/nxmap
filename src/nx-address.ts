export class NXAddress
{
    public Address1: string;
    public Address2: string;
    public CityName: string;
    public CityCode: string;
    public ProvinceName: string; 
    public ProvinceCode: string;
    public CountryName: string; 
    public CountryCode: string;
    public PostCode:string;
    public Latitude: number;
    public Longtitude: number;
    constructor(
        address1: string,
        address2: string,
        cityName: string,
        cityCode: string,
        provinceName: string, 
        provinceCode: string,
        countryName: string, 
        countryCode: string,
        postCode:string, 
        latitude: number, 
        longtitude: number)
        {
            this.Address1 = address1;
            this.Address2 = address2;
            this.CityCode = cityCode;
            this.CityName = cityName;
            
            this.ProvinceCode = provinceCode;
            this.ProvinceName = provinceName;
            this.CountryCode = countryCode;
            this.CountryName = countryName;
            this.PostCode = postCode;

            this.Latitude = latitude;
            this.Longtitude = longtitude;
        }
}