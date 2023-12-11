
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
        exitTexts:["Oh whoa, let's see what's in the letter!"],
        image: "0closedletter.gif"
    },

    openinvitation: {
        name: "You're Invited",
        description: "Hey there slug, welcome to UCSC. Come on down to the East Remote lot field to get started",
        exitKeys: ["stayhome","goparty"],
        exitTexts: ["I'd rather stay home","Sure! That sounds fun!"],
        image: "0openletter.gif"
    },

    stayhome: {
        name:"You Stayed Home",
        description:" 'damn college is lonely I guess I'll go to bed” *lights out*' ",
        exitKeys: ["closedinvitation"],
        exitTexts:["try again"],
        image: "1.0home.gif"
    },

    goparty: {
        name:"The Welcome Party",
        description:"Hey Slug! Welcome to UCSC to get started, head on down to the cornucopia at the east field to find your map.",
        exitKeys: ["checkmap"],
        exitTexts: [""],
        image:"1.1party.gif"
    },

    checkmap: {
        name: "Map of Campus",
        description: "Nice work. You've been invited to a party at Oakes college, it's too late to catch the loop bus, so you'll have to walk.",
        exitKeys: ["goafterparty", "noafterparty"],
        exitTexts: [""],
        // IDK HOW TO ADD AN ALT TEXT TO CREDIT UCSC FOR THE MAP... -jazmine
        // We can add that to sources on our final doc, nt here -scarlett
        image:"map.gif"
    },

    noafterparty: {
        name: "You Returned Home",
        description: "Maybe next quarter.. *lights out*",
        exitKeys: ["closedinvitation"],
        exitTexts: [""],
        image:"1.0home.gif"

    },

    goafterparty: {
        name:"You Decide to Go!",
        description: "Head up to Cowell and Stevenson",
        exitKeys: ["cands"],
        exitTexts: [""],
        image:"1.1partybg.gif"
    },

    cands: {
        name: "Cowell and Stevenson",
        description: "Welcome to Cowell and Steveson college. Cowell Stevenson is home to the Eloise Pickard Smith Gallery as well as home to our Humanities department",
        exitKeys: ["merrill"],
        exitTexts: [""],
        image:"2.3cowsteve.gif"
    },

    merrill: {
        name: "Merrill",
        description: "Hey, glad you got up the hill, Merrill is known for cardiac hill.",
        exitKeys: ["crown"],
        exitTexts: [""],
        image:"2.4merrill.gif"
    },

    crown: {
        name: "Crown",
        description: "Oh no!!! There's a fire, you better make it up to the UCSC fire station at Crown college!",
        exitKeys: ["c9"],
        exitTexts: [""],
        image:"2.5crown.gif"
    },

    c9: {
        name: "College 9",
        description: "phew. Good job making it out of there, why don't you head over to the famous dining hall down at college nine",
        exitKeys: [""],
        exitTexts: [""],
        image:"2.6c9.gif"
    },

    jrl: {
        name: "JRL",
        description: "Congratulations. Welcome to JRL, home to the University Center",
        exitKeys: ["kresge"],
        exitTexts: [""],
        image:"2.6c9.gif"
    },

    kresge: {
        name: "Kresge",
        description: "Welcome to Kresge. Here you can make your way through the forrest to the campus RV park.",
        exitKeys: ["porter"],
        exitTexts: [""],
        image:"2.8kresge.gif"
    },

    porter: {
        name: "Porter",
        description: "You made it to Porter! The arts division. Now you can really have fun, head over to Porter Meadow.",
        exitKeys: ["portermeadows"],
        exitTexts: [""],
        image:"2.9porter.gif"
    },

    portermeadows: {
        name: "Porter Meadows",
        description: "",
        exitKeys: ["takedrugs","nodrugs"],
        exitTexts: [""],
        image:"3.0porterparty.gif"
    },

    takedrugs: {
        name: "You Take the Pills",
        description: "Welcome to the Meadow, someone offers you drugs. What do you do?.",
        exitKeys: ["bananaslug"],
        exitTexts: [""],
        image:"3.1takedrugs.gif"
    },

    nodrugs: {
        name: "it's Not Your Thing",
        description: "hmm, I don’t think so.",
        exitKeys: ["leaveparty"],
        exitTexts:[""],
        image:"1.0home.gif"
    },

    bananaslug: {
        name:"Sammy?!",
        description:"",
        exitKeys:["leaveparty"],
        exitTexts:[""],
        image:"6.1bananaslug.gif"
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