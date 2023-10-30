

const PATH = "http://localhost:4000";
const INITIAL_USER_DATA = {
    NAME: "Sina",
    LAST_NAME_1: "Majnoon",
    LAST_NAME_2: "",
    EMAIL:"sina.majnoonhjk@gmail.com",
    TITLE: "Frontend Developer",
    DESCRIPTION:"Front-end developer focused on creating Web applications. I really like different projects that solve real problems.",
    CV_URL:"http://localhost:4000/database/CMD/sina.majnoonhjk@gmail.com/sina-majnoon-cv.pdf",
    PLATFORMS: [
        {
            NAME:"",
            ICON:"",
            URL:""
        }
    ],
    ABOUT_ME:"",
    SKILLS:[
        {name:"Typescript", value: 10},
    ],
    ACADEMIC_DATA: [
        {
            INFORMATION: "2022-Madrid Adecco",
            TITLE: "Full stack web programming",
            SKILLS: ["Fundamentals of web development","Javascript","Databases","Frontend: ReacrJS","backend: NodeJS-PHP-JSP"]
        }
    ],
    EXPERIENCES: [
        {
            INFORMATION: "January 2018 - October 2021 (Turkey)",
            TITLE: "CNC machine programmer",
            SKILLS: ["Programming of CNC machines and machining"]   
        }
    ],
    LANGUAGES: [
        {
            LANGUAGE: "Spanish",
            LEVEL: "B2",
        }
    ],
    PROJECTS: [
        {
            NAME:"Card Game",
            IMAGE:"http://localhost:4000/database/CMD/sina.majnoonhjk@gmail.com/juegodecartas.png",
            TITLE:"Javascript-nodeJS-HTML-CSS",
            DESCRIPTION:"",
            URLS:[
                {
                    TYPE: "C",
                    NAME:"WEB URL",
                    DESCRIPTIN: "is an exciting online game for 2 or more players. To get started, players must register for the first time, choosing a username and photo. They can then invite other online players to join the fun. The object of the game is to have the sum of 11 with your cards and in addition there are three special cards, such as the J card, which can collect all cards except the K and Q cards, and the Q card. can only pick up the Q, while the K card can only pick up the K. Each player starts with four cards, which they can only see, and four cards on the table. As the game progresses, they are new cards are dealt and points are tracked until all 52 cards are used up.",
                    URL: "https://shadowed-ionized-capri.glitch.me/"
                },
                {
                    TYPE: "W",
                    NAME:"WEB URL",
                    DESCRIPTIN: "is an exciting online game for 2 or more players. To get started, players must register for the first time, choosing a username and photo. They can then invite other online players to join the fun. The object of the game is to have the sum of 11 with your cards and in addition there are three special cards, such as the J card, which can collect all cards except the K and Q cards, and the Q card. can only pick up the Q, while the K card can only pick up the K. Each player starts with four cards, which they can only see, and four cards on the table. As the game progresses, they are new cards are dealt and points are tracked until all 52 cards are used up.",
                    URL: "https://shadowed-ionized-capri.glitch.me/"
                }
            ],
            MEDIA: [
                {
                    TYPE:"",
                    URL: "",
                    DESCRIPTION: ""
                }
            ]
        }
    ]
}

export default function Portfolify_API() {
    this.USER_DATA = undefined;
    this.COLORS = undefined;
    this.FONT = undefined;

    this.getUserData = () => {
        return this.USER_DATA;
    }
    this.getColors = () => {
        return this.COLORS;
    }
    this.getFont = () => {
        return this.COLORS;
    }
    this.setUserData = (userData = INITIAL_USER_DATA) => {
        this.USER_DATA = userData;
    }
    this.setColors = (colors = ["","","","","",""]) => {
        this.COLORS = colors;
    }
    this.setFont = (font = "") => {
        this.FONT = font; 
    }
}
Portfolify_API.prototype.getData = function(userID = "AGT78OH90F") {
    const this_ = this;
    return new Promise((resolve,reject)=> {
        const http = new XMLHttpRequest();
        const formData = new FormData();
        formData.append("userID", userID);
        http.open("GET", PATH + "/user?id=" + userID, true);
        http.onreadystatechange = function() {
            if(http.readyState === 4 && http.status === 200) {
                const data = JSON.parse(http.responseText);
                if (data.error)
                    reject({error: data.error});
                this_.setUserData(data.data.userData);
                this_.setColors(data.data.colors);
                this_.setFont(data.data.font);
                resolve({error: null});
            }
        }
        http.send(formData);
    })
}

export {Portfolify_API,INITIAL_USER_DATA,PATH};

