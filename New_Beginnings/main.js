
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
        exitTexts:["Oh woah!"],
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
        image: ""
    },

    goparty: {
        name:"The Welcome Party",
        description:"",
        exitKeys: ["checkmap"],
        exitTexts: [""],
        image:""
    },

    checkmap: {
        name: "Map of Campus",
        description: "",
        exitKeys: ["goafterparty", "noafterparty"],
        exitTexts: [""],
        image:""
    },

    noafterparty: {
        name: "You Returned Home",
        description: "",
        exitKeys: ["closedinvitation"],
        exitTexts: [""],
        image:""
    },

    goafterparty: {
        name:"You Decide to Go!",
        description: "",
        exitKeys: ["cands"],
        exitTexts: [""],
        image:""
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
        image:""
    },

    crown: {
        name: "Crown",
        description: "",
        exitKeys: ["c9"],
        exitTexts: [""],
        image:""
    },

    c9: {
        name: "College 9",
        description: "",
        exitKeys: [""],
        exitTexts: [""],
        image:""
    },

    jrl: {
        name: "JRL",
        description: "",
        exitKeys: ["kresge"],
        exitTexts: [""],
        image:""
    },

    kresge: {
        name: "Kresge",
        description: "",
        exitKeys: ["porter"],
        exitTexts: [""],
        image:""
    },

    porter: {
        name: "Porter",
        description: "",
        exitKeys: ["portermeadows"],
        exitTexts: [""],
        image:""
    },

    portermeadows: {
        name: "Porter Meadows",
        description: "",
        exitKeys: ["takedrugs","nodrugs"],
        exitTexts: [""],
        image:""
    },

    takedrugs: {
        name: "You Take the Pills",
        description: "",
        exitKeys: ["bananaslug"],
        exitTexts: [""],
        image:""
    },

    nodrugs: {
        name: "it's Not Your Thing",
        description: "",
        exitKeys: ["leaveparty"],
        exitTexts:[""],
        image:""
    },

    bananaslug: {
        name:"Sammy?!",
        description:"",
        exitKeys:["leaveparty"],
        exitTexts:[""],
        image:""
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
    // loop over all the exitKeys for this room
    display("<p>Choose your next move:</p><ul class='exits'>");
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