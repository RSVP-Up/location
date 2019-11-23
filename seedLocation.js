// {
// 	eventId:
// 	location_name:
// 	Address: {
// 		Address_1:
// 		Address_2:
// 		City:
// 		State:
// 		Zip:
// 		Country:
//     }
// Geo: {
// 		Lat:
// 		Long:
// }
// 	how_to_find_us: string
// }
​
​
const faker = require('faker')
​
var locations = [];
​
// Helper function to keep the coordinates within the US
var randomCoordinates = (min, max) => {
  return min + Math.random()*(max - min);
}

for (let i = 0; i < 100; i++) {
    let eventId = i;
    let location_name = faker.company.companyName();
    let address_1 = faker.address.streetAddress();
    let address_2 = faker.address.secondaryAddress();
    let city = faker.address.city();
    let state = faker.address.stateAbbr();
    let zip = faker.address.zipCode();
    let country = faker.address.country();
    // These coordinates will keep the latitude and Longitude inside the US
    let lat = randomCoordinates(30, 48);
    let long = randomCoordinates(-80, -117);
    let how_to_find_us = faker.lorem.sentence();
​
    let eventLocation = {
        eventId,
        location_name,
        address: {
            address_1,
            address_2,
            city,
            state,
            zip,
            country
        },
        geo: {
            lat,
            long
        },
        how_to_find_us
    }
    locations.push(eventLocation);
}