
	// main.js - final project
    // Author:
    // Date:12/11/23
    // New goals 
    //Create an Array of data with callbacks that activate when buttons are pushed
    //Created with heavy reference from Wes' "Choose Your Own Adventure" game
//////////////////////////////////////////////////////////////////////////////////

//Create a data object in which all of the game information is stored
//the data
rooms = {
    closedinvitation: {
        name: "Your Welcome Letter",
        description: "You've received your invitation to UCSC Welcome Week! ",
        exitKeys: ["openinvitation"],
        exitTexts:["Oh woah, let's see what's in the letter!"],
        image: "0closedletter.png"
    },

    openinvitation: {
        name: "You're Invited",
        description: "Hey there slug, welcome to UCSC. Come on down to the East Remote lot field to get started",
        exitKeys: ["stayhome","goparty"],
        exitTexts: ["I'd rather stay home","Sure! That sounds fun!"],
        image: "0openletter.png"
    },

    stayhome: {
        name:"You Stayed Home",
        description:" 'damn college is lonely I guess I'll go to bed” *lights out*' ",
        exitKeys: ["closedinvitation"],
        exitTexts:[""],
        image: "1.0home.png"
    },

    goparty: {
        name:"The Welcome Party",
        description:"Hey Slug! Let's get started. Head on down to the cornucopia at the east field to begin.",
        exitKeys: ["checkmap"],
        exitTexts: [""],
        image:"1.1party.png"
    },

    checkmap: {
        name: "Map of Campus",
        description: "",
        exitKeys: ["goafterparty", "noafterparty"],
        exitTexts: [""],
        // IDK HOW TO ADD AN ALT TEXT TO CREDIT UCSC FOR THE MAP... -jazmine
        image:"map.jpg"
    },

    noafterparty: {
        name: "You Returned Home",
        description: "",
        exitKeys: ["closedinvitation"],
        exitTexts: [""],
        image:"1.0home.png"

    },

    goafterparty: {
        name:"You Decide to Go!",
        description: "",
        exitKeys: ["cands"],
        exitTexts: [""],
        image:"1.1partybg.png"
    },

    cands: {
        name: "Cowell and Stevenson",
        description: "",
        exitKeys: ["merrill"],
        exitTexts: [""],
        image:""
    },

    merrill: {
        name: "Merrill",
        description: "",
        exitKeys: ["crown"],
        exitTexts: [""],
        image:"2.4merrill.png"
    },

    crown: {
        name: "Crown",
        description: "",
        exitKeys: ["c9"],
        exitTexts: [""],
        image:"2.5crown.png"
    },

    c9: {
        name: "College 9",
        description: "",
        exitKeys: [""],
        exitTexts: [""],
        image:"2.6c9.png"
    },

    jrl: {
        name: "JRL",
        description: "",
        exitKeys: ["kresge"],
        exitTexts: [""],
        image:"2.6c9.png"
    },

    kresge: {
        name: "Kresge",
        description: "",
        exitKeys: ["porter"],
        exitTexts: [""],
        image:"2.8kresge.png"
    },

    porter: {
        name: "Porter",
        description: "",
        exitKeys: ["portermeadows"],
        exitTexts: [""],
        image:"2.9porter.png"
    },

    portermeadows: {
        name: "Porter Meadows",
        description: "",
        exitKeys: ["takedrugs","nodrugs"],
        exitTexts: [""],
        image:"3.0porterparty.png"
    },

    takedrugs: {
        name: "You Take the Pills",
        description: "",
        exitKeys: ["bananaslug"],
        exitTexts: [""],
        image:"3.1takedrugs.png"
    },

    nodrugs: {
        name: "it's Not Your Thing",
        description: "",
        exitKeys: ["leaveparty"],
        exitTexts:[""],
        image:"1.0home.png"
    },

    bananaslug: {
        name:"Sammy?!",
        description:"",
        exitKeys:["leaveparty"],
        exitTexts:[""],
        image:"6.1bananaslug.png"
      },
    }
/////////////////////////HARD STOP//////////////////////////////////////////

//////////Break This Down- Wes' Code///////////////////////////////////////

// global variables
//This is the parameters of the rooms and where the output is placed in the html
var currentRoom = 1;
var lastRoom = 18;
var outputHTMLid = "js-output";

// Print something on the webpage in display area using the parameters given a string to display

function display(string) {
    var element = $("#" + outputHTMLid);
    element.append(string);
}

//cleared display area

function clearDisplayArea() {
    $("#" + outputHTMLid).html("");
}

//takes a room object and displays the current room

function displayCurrentRoom(roomObj) {
    display("<div class='room-image'><img src='img/" + roomObj.image + "'></div>");
    display("<p class='title'>" + roomObj.name + "</p>");
    display("<p class='description'>" + roomObj.description + "</p>");
}

//takes a room object and displays the exit keys

function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room - It also displays the text box for the exit keys
    display("<p>What do you do?:</p><ul class='exits'>");
    for(i = 0; i < roomObj.exitKeys.length; i++) {
       //make sure to have the html match this when working- if this does not show up, you fucked up and need to debug
        exitHTML = "<li onClick='javascript:newRoom(\"" +
                roomObj.exitKeys[i] + "\")'>" + roomObj.exitTexts[i] + "</li>";
        display(exitHTML);
    }
    display("</ul>");
}

//function for the new room that leads to the next room
//this also clears the area and swaps them out with the description and exit keys
function newRoom(nextRoom) {
    currentRoom = nextRoom;
    currentRoomObj = rooms[currentRoom];
    clearDisplayArea();
    displayCurrentRoom(currentRoomObj);
    displayCurrentExits(currentRoomObj);
}

//load webpage and display the first room -MAKE SURE IT MATCHES CORRECTLY
$(document).ready(function() {
    newRoom('closedinvitation');
});