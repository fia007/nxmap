# Steps to add and use NXMap in your angular project.

# Step 1.
Run following npm command to install chb-na-map package to your angular project.

npm install --save chb-nx-map

# Step 2.
In html, add follwoing script in to the header section

<script src="https://maps.googleapis.com/maps/api/js?key=[YOUR_GOOGLE_API_KEY]&libraries=places&channel=GMPSB_addressselection_v1_cABC"></script>

# Step 3.
Add following declaration to index.d.ts file

declare module 'googlemaps';

# Step 4.
Import googlemaps NXMap in your angular component.

import {} from 'googlemaps';

import { NXMap } from 'chb-nx-map';

# Step 5.
Initialize NXMap and Address Lookup as shown in following code snippet.

![image](https://user-images.githubusercontent.com/112627631/188441120-5d2ffbc6-4453-474a-ab0f-399c71a08c2c.png)

# See code sample in the example/nx-map-example directory.
![image](https://user-images.githubusercontent.com/112627631/188441754-426fb433-ced0-4561-9ceb-4ffab6a81ff9.png)

