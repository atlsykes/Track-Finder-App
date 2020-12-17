const nodeGeoCoder = require("node-geocoder");
const options = {
  provider: "openstreetmap",
};
const geoCoder = nodeGeoCoder(options);

let address = "4770 Lee Waters Rd, Marietta, GA 30066";

function getGeoCode(address) {
  geoCoder
    .geocode(address)
    .then((res) => {
      //   console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

getGeoCode(address);
