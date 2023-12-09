
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
        description: "script",
        exitKeys: ["openinvitation"],
        exitTexts:["Oh woah!"],
        image: "closedletter.png"
    },

    openinvitation: {
        name: "You're Invited",
        description: "",
        exitKeys: ["stayhome","goparty"],
        exitTexts: [""],
        image: "openletter.png"
    },

    stayhome: {
        name:"You Stayed Home",
        description:"",
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