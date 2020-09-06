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
2d. If you DON'T have a faceook url (no facebook event), then put '' as the value
Note: all fields should be strings except imageUrl and consistent with previous formatting
3. Yeah.

HOW TO REMOVE AN EVENT
1. Find your event in the events array.
2. Remove the object representing your event.
3. Remove the import that imports your image (if applicable).
4. Delete the image from events/events-imgs (if applicable).
5. Yeah.
*/

import mongoImage from '../images/events-imgs/mongo.jpeg';
import nodeImage from '../images/events-imgs/nodejs.png';
import reactImage from '../images/events-imgs/react.jpg';
import mernImage from '../images/events-imgs/mern.jpeg';

let events = [
    {
        title: "Open Source Project: Virtual Reef",
        description: "Speaker: Owen Pierce",
        date: "10/6/20",
        startTime: "6:30pm",
        endTime: "7:30pm",
        facebookLink: "",
        location: "TBD"
    },
    {
        title: "Open Source and Higher Education",
        description: "Speaker: Erin Glass",
        date: "10/22/20",
        startTime: "6:30pm",
        endTime: "7:30pm",
        facebookLink: "",
        location: "TBD"
    },
    {
        title: 'Hacktoberfest Kickoff',
        date: '10/3/19',
        startTime: '7:00pm',
        endTime: '8:30pm',
        location: 'some room',
        imageUrl: null,
        facebookLink: 'https://www.facebook.com/events/527698611136531/',
    },
    {
        title: 'Winter 2020 GBM',
        date: '1/17/20',
        startTime: '7:00pm',
        endTime: '8:30pm',
        location: 'Red Shoe Room (PC)',
        imageUrl: null,
        facebookLink: 'https://www.facebook.com/events/726085801248875/',
    },
    {
        title: 'MERN Workshop 1: Express & Node',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: nodeImage,
        facebookLink: '',
    },
    {
        title: 'MERN Workshop 2: MongoDB',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: mongoImage,
        facebookLink: '',
    },
    {
        title: 'MERN Workshop 3: React',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: reactImage,
        facebookLink: '',
    },
    {
        title: 'MERN Workshop 4: All Together',
        date: '1/17/20',
        startTime: '6:00pm',
        endTime: '8:00pm',
        location: 'SSC 300',
        imageUrl: mernImage,
        facebookLink: '',
    },
]

export default events;