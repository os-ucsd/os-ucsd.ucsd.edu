//Whenever you create a new tutorial add it here
/*HOW TO ADD A TUTORIAL
1.  Have your tutorial in .md form and place it in the tutorials folder (/src/tutorials)
2.  Create a new entry in tutorialMeta.  The key should be the the end of the url for the tutorial
3.  Fill out the required fields:
    a. Title: The title of the tutorial, should match the md file
    b. publish: the date the tutorial was published
    c. authors: the name(s) of the authors along with their github usernames
    d. url: the same as the key
    e. content: type in: require("PATH TO MD")
 */
const tutorialMeta =
{
    "ACS-Website": {
        title: "How to create a Github-synced website as a UCSD Student",
        publish: new Date("2019-12-25T12:00:00Z"),
        authors: { name: "Alex Garcia", github: "asg017" },
        url: "ACS-Website",
        content: require("../tutorials/ACSAWebsite.md")
    },

    "Graffiti-Wall": {
        title: "GIT GUD: Graffiti Wall Tutorial!",
        publish: new Date("2019-12-26T12:00:00Z"),
        authors: { name: "Alex Garcia, Chau Vu, Victor Miranda", github: "os-ucsd" },
        url: "Graffiti-Wall",
        content: require("../tutorials/graffitiwall.md")
    },
    "Bitmoji": {
        title: "Create a Bitmoji Workshop",
        publish: new Date("2019-12-27T12:00:00Z"),
        authors: { name: "Brendan Lau", github: "os-ucsd" },
        url: "Bitmoji",
        content: require("../tutorials/bitmoji.md")
    }
}

export default tutorialMeta;