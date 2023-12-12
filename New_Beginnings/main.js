
	// main.js - final project
    // Author: Group 15
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
        //button: ""
    },

    openinvitation: {
        name: "You're Invited",
        description: "Hey there slug, welcome to UCSC. Come on down to the East Remote lot field to get started",
        exitKeys: ["stayhome","goparty"],
        exitTexts: ["I'd rather stay home","Sure! That sounds fun!"],
        image: "0openletter.gif"
        //button: ""
    },

    stayhome: {
        name:"You Stayed Home",
        description:" 'Damn college is lonely- I guess I'll go to bed' *lights out* ",
        exitKeys: ["closedinvitation"],
        exitTexts:["Restart"],
        image: "1.0home.gif"
        //button: ""
    },

    goparty: {
        name:"The Welcome Party",
        description:"Hey Slug! Welcome to UCSC to get started, head on down to the cornucopia at the east field to find your map.",
        exitKeys: ["checkmap"],
        exitTexts: ["Oh Sweet! I can't wait to meet my fellow slugs!"],
        image:"1.1party.gif"
        //button: ""
    },

    checkmap: {
        name: "Map of Campus",
        description: "Nice work. You've been invited to a party at Porter Meadows, it's too late to catch the loop bus, so you'll have to walk.",
        exitKeys: ["goafterparty", "noafterparty"],
        exitTexts: ["Whoa! This campus is massive! Guess I can skip leg day from now on.", "Nah, you've had enough social interaction and you decide to Walk home."],
        // IDK HOW TO ADD AN ALT TEXT TO CREDIT UCSC FOR THE MAP... -jazmine
        // We can add that to sources on our final doc, nt here -scarlett
        image:"map.gif"
       // button: ""
    },

    noafterparty: {
        name: "You Returned Home",
        description: "'Maybe next quarter..' *lights out*",
        exitKeys: ["closedinvitation"],
        exitTexts: ["Restart"],
        image:"1.0home.gif"
       // button: ""

    },

    goafterparty: {
        name:"You Decide to Go!",
        description: "Head up to Cowell and Stevenson",
        exitKeys: ["cands"],
        exitTexts: ["The uphill walk gives you a leg cramp."],
        image:"1.1partybg.gif"
       // button: ""
    },

    cands: {
        name: "Cowell and Stevenson",
        description: "Welcome to Cowell and Steveson college. Cowell Stevenson is home to the Eloise Pickard Smith Gallery as well as home to our Humanities department",
        exitKeys: ["merrill"],
        exitTexts: ["The Gallery is closed this late but you make note of its hours to visit again later!"],
        image:"2.3cowsteve.gif"
        //button: ""
    },

    merrill: {
        name: "Merrill",
        description: "Hey, glad you got up the hill, Merrill is known for cardiac hill.",
        exitKeys: ["crown"],
        exitTexts: ["'Strenuous workout' indeed- you feel like you're going into cardiac arrest."],
        image:"2.4merrill.gif"
       // button: ""
    },

    crown: {
        name: "Crown",
        description: "Oh no!!! There's a fire, you better make it up to the UCSC fire station at Crown college!",
        exitKeys: ["c9"],
        exitTexts: ["Oh wait it was a false alarm-someone in the dorms burnt their pizza pockets... but it's better to be safe than sorry!"],
        image:"2.5crown.gif"
       // button: ""
    },

    c9: {
        name: "College 9",
        description: "Phew. You did a good job making it out of the would-be pizza pocket disaster of '23... Why don't you head over to the famous dining hall down at college nine",
        exitKeys: ["jrl"],
        exitTexts: ["It closed at 11! You barely make it but have enough time to grab a few of your own pizza pockets..."],
        image:"2.6c9.gif"
       // button: ""
    },

    jrl: {
        name: "JRL",
        description: "Congratulations. Welcome to JRL, home to the University Center",
        exitKeys: ["kresge"],
        exitTexts: ["You feel a strong sense of community and take a moment to bask in it before moving on. The pizza pockets burn your mouth a little."],
        image:"2.7jrl.gif"
        //button: ""
    },

    kresge: {
        name: "Kresge",
        description: "Welcome to Kresge. Here you can make your way through the forest to the campus RV park.",
        exitKeys: ["porter"],
        exitTexts: ["Bigfoot totally lives here."],
        image:"2.8kresge.gif"
        //button: ""
    },

    porter: {
        name: "Porter",
        description: "You made it to Porter! The arts division. Now you can really have fun, head over to Porter Meadow.",
        exitKeys: ["portermeadows"],
        exitTexts: ["You can see the party!"],
        image:"2.9porter.gif"
        //button: ""
    },

    portermeadows: {
        name: "Porter Meadows",
        description: "Welcome to the Meadow! There is a huge party with dancing and loud music! After showing off your amazing breakdancing skills for a bit, you strike up some conversation with your peers around you. They love your dance moves! You talk with the group for a while and eventually someone offers you some funky pills. 'Elevates the Santa Cruz Slug Experience' they say. They leave it up for you to decide, which is cool because peer pressure is lame. You think about it for a moment...What do you do?.",
        exitKeys: ["takedrugs","nodrugs"],
        exitTexts: ["When in Rome!", "Nah, Thanks but not my thing."],
        image:"3.0porterparty.gif"
        //button: ""
    },

    takedrugs: {
        name: "You Take the Drugs",
        description: "What's the worst thing that could happen! This is what college is about right?",
        exitKeys: ["bananaslug"],
        exitTexts: ["Whoaaaa- You start to feel funnnnnnnnnnnyyyyyyyyyyy"],
        image:"3.1takedrugs.gif"
       // button: "Drug Trip"
    },

    nodrugs: {
        name: "it's Not Your Thing",
        description: "Hmmm, I think I'll pass.",
        exitKeys: ["leaveparty"],
        exitTexts:["You spend a few more hours dancing into the early morning with your new group of friends! Some of them are even in the same college as you! You collect contact information and safely Uber home because you are a responsible young adult."],
        image:"3.0keeppartying.gif"
        //button: ""
    },

    bananaslug: {
        name:"Sammy?!",
        description:"Your vision begins to fog and you blink a few times before looking around. Everything seems larger around you. You feel like te world is in slow motion...What the heck! You are small and in slow motion! With a growing frustration you realize you've been turned into a banana slug! The mascot of the university! This wasn't what you thought it meant to elevate the Santa Cruz Slug experience! Oh well.. " ,
        exitKeys:["closedinvitation"],
        exitTexts:["Slug Ending-Restart"],
        image:"6.1bananaslug.gif"
        //button: ""
      },

      leaveparty: {
        name:"You Leave the Party",
        description:"As you lay in bed, content in your covers and ready for sleep, you glance over at your alarm clock. It reads 4:26 A.M. Your heart immediately sinks as you remember that your first 8am class starts today. Welcome to the University of Santa Cruz, Banana Slug!",
        exitKeys:["closedinvitation"],
        exitTexts:["True Ending-Restart"],
        image:"7.0lastbushome.gif"
        //button: ""
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
    //display("<button>" + roomObj.button + "</button>");
}

//takes a room object and displays the exit keys

function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room - It also displays the text box for the exit keys
    display("<p>You:</p><ul class='exits'>");
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
/////////////////////////////Drug trip//////////////////////////////////////////////
//see if you can add a button into the array to change colors during the drug trip
//ask ilia
//Object.onCLick= function(){
    //document.getElementById('drugtrip')
//};
//load webpage and display the first room -MAKE SURE IT MATCHES CORRECTLY
$(document).ready(function() {
    newRoom('closedinvitation');
});