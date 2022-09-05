# Steps to add and use NXMap in your angular project.

# Step 1.
Run following npm command to install chb-na-map package to your angular project.

npm install --save chb-nx-map

![image](https://user-images.githubusercontent.com/112627631/188445370-e097b7ac-afae-4667-a7af-759c8cdd6270.png)


# Step 2.
In html, add follwoing script in to the header section

<script src="https://maps.googleapis.com/maps/api/js?key=[YOUR_GOOGLE_API_KEY]&libraries=places&channel=GMPSB_addressselection_v1_cABC"></script>

![image](https://user-images.githubusercontent.com/112627631/188445491-6e19c2db-8caa-4ec7-baed-b76304dbbdce.png)


# Step 3.
Add following declaration to index.d.ts file

declare module 'googlemaps';

![image](https://user-images.githubusercontent.com/112627631/188445635-3e26d1c9-efef-4002-9caa-c729e27d40dc.png)


# Step 4.
Import googlemaps and NXMap in your angular component.

import {} from 'googlemaps';

import { NXMap } from 'chb-nx-map';

![image](https://user-images.githubusercontent.com/112627631/188445773-0dd7a8f0-3517-4be2-9985-139b8795baef.png)


# Step 5.
Initialize NXMap and Address Lookup as shown in following code snippet.

![image](https://user-images.githubusercontent.com/112627631/188441120-5d2ffbc6-4453-474a-ab0f-399c71a08c2c.png)

# See code sample in the example/nx-map-example directory.
![image](https://user-images.githubusercontent.com/112627631/188441754-426fb433-ced0-4561-9ceb-4ffab6a81ff9.png)

