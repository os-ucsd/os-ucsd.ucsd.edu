/*
Holds data for all events that will be depicted on the home and events page
events is an array of objects, with each object representing a single event

HOW TO ADD AN EVENT
1. Go to the bottom of the list and add a new object as the last element
2. Add the following fields: name, date, startTime, endTime, location, imageUrl, facebookUrl
2a. If you have an image you want to display, put the image into src/events/events-imgs
and then import it from './events-imgs/your-image'
2b. Add the name of the import (like mongoImage) as the value of imageUrl
2c. If you DON'T have an image, put null as the value for imageUrl
Note: all fields should be strings except imageUrl and consistent with previous formatting
3. Yeah.

HOW TO REMOVE AN EVENT
1. Find your event in the events array.
2. Remove the object representing your event.
3. Remove the import that imports your image (if applicable).
4. Delete the image from events/events-imgs (if applicable).
5. Yeah.
*/

import mongoImage from './events-imgs/mongo.jpeg';
import nodeImage from './events-imgs/nodejs.png';
import reactImage from './events-imgs/react.jpg';
import mernImage from './events-imgs/mern.jpeg';

let events = [
    {
        name: 'Hacktoberfest Kickoff',
        date: '10/3/19',
        startTime: '7:00pm',
        endTime: '8:30pm',
        location: 'some room',
        imageUrl: null,
        facebookUrl: 'https://www.facebook.com/events/527698611136531/',
    },
    {
        name: 'Winter 2020 GBM',
        date: '1/17/20',
        startTime: '7:00pm',
        endTime: '8:30pm',
        location: 'some room',
        imageUrl: null,
        facebookUrl: '',
    },
    {
        name: 'MERN Workshop 1: Express & Node',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: nodeImage,
        facebookUrl: '',
    },
    {
        name: 'MERN Workshop 2: MongoDB',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: mongoImage,
        facebookUrl: '',
    },
    {
        name: 'MERN Workshop 3: React',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: reactImage,
        facebookUrl: '',
    },
    {
        name: 'MERN Workshop 4: All Together',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: mernImage,
        facebookUrl: '',
    },
    {
        name: 'Test',
        date: '12/27/19',
        startTime: '6:00pm',
        endTime: '8:30pm',
        location: 'SSC 300',
        imageUrl: null,
        facebookUrl: '',
    }
]

export default events;