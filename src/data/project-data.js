import bitmojiImg from "../images/projects-imgs/bitmoji-wall-img.png";
import osWebsiteImg from "../images/projects-imgs/os-ucsd-website-img.png";
import workshopFacilitatorImg from "../images/projects-imgs/workshop-facilitator-img.png";

let projects_list = [
    {
        title: 'Workshop Facilitator',
        owner: 'OS @ UCSD',
        image: workshopFacilitatorImg,
        description: 'A tool for student orgs to facilitate workshops',
        link: 'https://github.com/os-ucsd/workshop-facilitator',
        linkText: 'LEARN MORE'
    },
    {
        title: 'OS Marketplace',
        owner: 'OS @ UCSD',
        image: '',
        description: 'React App that displayed your projects on GitHub',
        link: 'https://github.com/os-ucsd/os-MarketPlace',
        linkText: 'LEARN MORE'
    },
    {
        title: 'Open Source Website',
        owner: 'OS @ UCSD',
        image: osWebsiteImg,
        description: 'Official website of OS at UCSD',
        link: 'https://github.com/os-ucsd/os-ucsd.ucsd.edu',
        linkText: 'LEARN MORE'
    },
    {
        title: 'Bitmoji',
        owner: 'OS @ UCSD',
        image: bitmojiImg,
        description: 'Adding your Bitmoji on our collection',
        link: 'https://github.com/os-ucsd/bitmoji',
        linkText: 'LEARN MORE'
    }
]

export default projects_list;