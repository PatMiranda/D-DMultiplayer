$(document).ready(function() {
    $("#myAudio").get(0).play();
     var isPlaying = true;
});

var myAudio = document.getElementById("myAudio");
var isPlaying = false;


function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

var config = {
    apiKey: "AIzaSyBKux44hLQ1eyQ4BUcCQiZsXfEm-NiMIJ0",
    authDomain: "dandd-c6b41.firebaseapp.com",
    databaseURL: "https://dandd-c6b41.firebaseio.com",
    projectId: "dandd-c6b41",
    storageBucket: "",
    messagingSenderId: "492662587984"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
//   Create authentication and user profiles for the database to initialize 2 players
var numPlayers = 2;
 var game_location = "" //add url for the game
 var player_location = "player_list";
 var player_data_location = "player_data"

//  var yourHp = player1.hp;
//  var opponentHP = palyer2.hp;

//  function getMyUserId (){
//      return prompt("Username?", "Guests");
//  }

//  function setGame (myPlayerNumber, myUserId, attackValue){
//         var playerDataRef = new Firebase(game_location).
//         child(player_data_location).child(myPlayerNumber);

//         playerDataRef.set({userId: myUserId, state: "clicked", rpg: myRpg});

//  }

//  function checkWin (yourHP, opponentHP){
//      if (yourHP === 0){
//          youLose();
//      }
//      if (opponentHP === 0){
//          opponentLose();
//      }
//  }
var playerRoll = Math.floor((Math.random()*20)+1);


var druidImage = "Assets/Images/druid.jpg"
var assassinImage =  $("#assassin").attr("src")
var fighterImage = $("#warrior").attr("src")
var wizardImage = $("#wizard").attr("src")
var sorcererImage = "Assets/Images/sorcerer.jpg";
var necromancerImage = "Assets/Images/necromancer.jpg";
var werewolfImage = "Assets/Images/werewolf.jpg";
var hellKnightImage = "Assets/Images/hellknight.jpg";

var player1Name = "";
var player2Name = "";
var player1 = null;
var player2 = null;

var fighterArray =[
    // Druid
   {   fighterClass : "Druid",
        image : druidImage,
        hp : 400,
        ac : 6,
        weapons : [
             {
                name : "Branch of Yggdrisil",
                attack : playerRoll + 7,
                val : "D20 + 7"
            },
             {
                name : "Bound Earth",
                attack : (playerRoll * 3) + 10,
                val : "(D20x3)+10",
                uses : 1
            }
        ]
         },
         // Assassin
    {   fighterClass : "Assassin",
        image : assassinImage,
        hp : 425,
        ac : 7,
        weapons : [
            {name : "Scimitar",
             attack : playerRoll + 10,
            val : "D20 + 10"
            },
            {
        uses : 3,
        name : "Dark Bow",
        attack : playerRoll * 2,
        val : "D20x2"
             }
            ]
       
    },
        // Warrior
    {   fighterClass : "Warrior",
        image : fighterImage,
        hp: 450,
        ac: 7,
        weapons : [
            {name: "Cold Claw",
            attack: playerRoll + 16,
            val : "D20 + 16" 
        }
        ]
    },   
      
         // Wizard
    {   fighterClass : "Wizard",
        image : wizardImage ,
        hp : 375,
        ac : 4, 
        weapons : [
            { name : "Dark Bolt",
            attack : playerRoll + 20,
            uses: 4, 
            val : "D20 + 20"
        },
        {
            name: "Soul Drain",
            attack: playerRoll * 3,
            uses: 2, 
            val : "D20 x 3"
        },
         {
            name: "Staff Strike",
            attack: playerRoll,
            val : "D20"
        },
        ]
           
    },
    //Sorcerer
    {   fighterClass : "Sorcerer",
        image : sorcererImage ,
        hp : 375,
        ac : 4, 
        weapons : [
            { name : "Internal Bleed",
            attack : playerRoll + 20,
            uses: 4, 
            val : "D20 + 20"
        },
        {
            name: "Curse",
            attack: playerRoll * 3,
            uses: 2, 
            val : "D20 x 3"
        },
         {
            name: "Black Blade",
            attack: playerRoll + 7,
            val : "D20+7"
        },
    ]},
    //Necromancer
    {   fighterClass : "Necromancer",
        image : necromancerImage ,
        hp : 450,
        ac : 4, 
        weapons : [
            { name : "Black Flame",
            attack : playerRoll + 20,
            uses: 4, 
            val : "D20 + 20"
        },
        {
            name: "Undead Reach",
            attack: playerRoll * 3,
            uses: 2, 
            val : "D20 x 3"
        },
        ]
    
           
    },
    //HellKnight
    {   fighterClass : "Hell-Knight",
        image : hellKnightImage ,
        hp : 450,
        ac : 6, 
        weapons : [
            { name : "Dark Sword",
            attack : playerRoll + 20,
            uses: 4, 
            val : "D20 + 20"
        },
        {
            name: "Writhing Flame",
            attack: playerRoll * 3,
            uses: 2, 
            val : "D20 x 3"
        },
        ]
    
           
    },
    //Werewolf
    {   fighterClass : "Werewolf",
        image : werewolfImage ,
        hp : 400,
        ac : 4, 
        weapons : [
            { name : "Gnash",
            attack : playerRoll + 27,
            uses: 4, 
            val : "D20 + 27"
        },
        {
            name: "Mawl",
            attack: playerRoll * 3,
            uses: 2, 
            val : "D20 x 3"
        },
        ]
    
           
    },
];

$("#readyPlayer1").on("click", function(){
    if (player1Name == "" && $("#player1Name").val().trim() !== ""){
     player1Name = ($("#player1Name").val().trim()) ;
        // $("#setPlayerName1").text(player1Name);
        $("#player1Name").val("")
         }
    else{
        $("#player1Name").val("")
    }
    database.ref().child("/players/player1/player1Name").set(player1Name);
    database.ref("/players/player1").onDisconnect().remove();
    database.ref('/players/player1/champion1/').on('value', function(snapshot) {
        snapshot.hp;
    })
})
$("#readyPlayer2").on("click", function(){
    if (player2Name == "" && $("#player2Name").val().trim() !==""){
        player2Name = $("#player2Name").val().trim();
        // $("#setPlayerName2").text(player2Name);
        $("#player2Name").val("")

    }
    else {
        $("#player2Name").val("")
    }
    database.ref().child("/players/player2/player2Name").set(player2Name);
    database.ref("/players/player2").onDisconnect().remove();
})

// this prints the names below the submit bar once they are logged in firebase

database.ref("/players/").on("value", function(snapshot) {
	// Check for existence of player 1 in the database
	if (snapshot.child("player1").exists()) {
        $("#setPlayerName1").text(player1Name);
        // player1Name = snapshot.child("/player1Name/")
    }
    if (snapshot.child("player2").exists()){
        $("#setPlayerName2").text(player2Name);
  
    }
});
var player1Image = database.ref('/players/player1/champion1/').on('value', function(snapshot) {
    snapshot.hp;
})

function chooseHero1(){
             $("#druid").on("click", function(){
                if ( player1 == null){
                player1 = fighterArray[0]
                $("#assigned-name1").text(player1Name)
                database.ref().child("players/player1/champion1").set(player1)
                console.log(player1Image)
                }
            })
           $("#assassin").on("click", function(){
                if ( player1 == null){
               player1 = fighterArray[1];
               $("#assigned-name2").text(player1Name)
               database.ref().child("players/player1/champion1").set(player1)

            }
           })
           $("#warrior").on("click", function(){
            if ( player1 == null){
            player1 = fighterArray[2]
            $("#assigned-name3").text(player1Name)
            database.ref().child("players/player1/champion1").set(player1)

            }
        })
       $("#wizard").on("click", function(){
            if ( player1 == null){
           player1 = fighterArray[3];
           $("#assigned-name4").text(player1Name)
           database.ref().child("players/player1/champion1").set(player1)
        }
       })
         
        }
chooseHero1();

function chooseHero2(){
                $("#druid2").on("click", function(){
                    if ( player2 == null){
                    player2 = fighterArray[4]
                    $("#assigned-name12").text(player2Name)
                    database.ref().child("players/player2/champion2").set(player2)
                    console.log(player1Image)
                    makeStart();
                    }
                })
            $("#assassin2").on("click", function(){
                    if ( player2 == null){
                player2 = fighterArray[5];
                $("#assigned-name22").text(player2Name)
                database.ref().child("players/player2/champion2").set(player2)
                makeStart();
                }
            })
             $("#warrior2").on("click", function(){
                if ( player2 == null){
                player2 = fighterArray[6]
                $("#assigned-name32").text(player2Name)
                database.ref().child("players/player2/champion2").set(player2)
                makeStart();
                }
            })
           $("#wizard2").on("click", function(){
                if ( player2 == null){
               player2 = fighterArray[7];
               $("#assigned-name42").text(player2Name)
               database.ref().child("players/player2/champion2").set(player2)
               makeStart();            
            }
           })
           
        }
chooseHero2();

function makeStart (){
        $("#challenger").css("display", "block")
        $("#start-button").css("display", "block")
   
}

// database.ref().on("child_added", function(snapshot) {
//     value = snapshot.val().player1.player1Name
   
//      test(value)
//  })
 


// function test(){
//     console.log("this is the player image " + value)
// }
// var player1Image = database.ref().snapshot.val().players.player1.champion1.image;
// var player1Name = snapshot.val().players.player1.player1Name;
// var player1Class = snapshot.val().players.player1.champion1.fighterClass;
// var player1Hp = snapshot.val().players.player1.champion1.hp;
// var player1Ac = snapshot.val().players.player1.champion1.ac;

// var secondPlayerImage = snapshot.val().players.player2.champion2.image;
// var secondPlayerName = snapshot.val().players.player2.player2Name;
// var secondPlayerClass = snapshot.val().players.player2.champion2.fighterClass;
// var secondPlayerHp = snapshot.val().players.player2.champion2.hp;
// var secondPlayerAc = snapshot.val().players.player2.champion2.ac;



$("#start-button").on("click", function (){
    
        if( player1 !== null && player2 !== null){
            $("#initialInstruct").css("display", "none");
            $("#Game").css("display", "block");
            playerCard1();
            playerCard2();
            makeButtons1();
            makeButtons2();
        
    }
})

function playerCard1 (){
    // player1 = database.ref().child("/players/player1/champion1/");
    $("#player1Image").attr("src", player1.image);
    $("#p1Name").text("Name: " + player1Name);
    $("#p1Class").text("Class: " + player1.fighterClass);
    $("#p1Hp").text("Hit Points: " + player1.hp)
    $("#p1Ac").text("Armor Class: " + player1.ac)
    for (i=0; i < player1.weapons.length; i++){
        var weaponData = $("<p class='cardText'>");
        weaponData.text(player1.weapons[i].name + ": " + player1.weapons[i].val)
        $("#p1Ac").append(weaponData);
    }
    
}
function playerCard2 (){
    // player2 = database.ref().child("players/player1/champion2");
    $("#player2Image").attr("src", player2.image);
    $("#p2Name").text("Name: " + player2Name);
    $("#p2Class").text("Class: " + player2.fighterClass);
    $("#p2Hp").text("Hit Points: " + player2.hp)
    $("#p2Ac").text("Armor Class: " + player2.ac)
    for (i=0; i < player2.weapons.length; i++){
        var weaponData = $("<p class='cardText'>");
        weaponData.text(player2.weapons[i].name + ": " + player2.weapons[i].val)
        $("#p2Ac").append(weaponData);
    }
    
}
 var player1Turn = true;
 var player2Turn = false;

 function makeButtons1 (){
     $("#player1Buttons").empty()
         for (i = 0; i < player1.weapons.length; i++){
            var button1 = $("<button class='weapon1 btn btn-lg btn-dark'><br/>");

            button1.attr("attackpower", player1.weapons[i].attack)
            button1.text(player1.weapons[i].name)
            $("#player1Buttons").append(button1)  
         }
     }

 function makeButtons2 (){
     $("#player2Buttons").empty();
     
         for (i = 0; i < player2.weapons.length; i++){
            var button2 = $("<button class='weapon2 btn btn-lg btn-dark'><br/>");
            button2.attr("attackpower", player2.weapons[i].attack)
            button2.text(player2.weapons[i].name)
            $("#player2Buttons").append(button2)
         }
     }
 

function player1Attack(){
    $(document).on("click", ".weapon1", function(){
        console.log(" weapons clicked");
        // playerRoll =  Math.floor((Math.random()*20)+1);
        var damage =  $(this).attr("attackpower") - player2.ac
        player2.hp = player2.hp - damage
        console.log("new hp is " + player2.hp)
        player1Turn = false;
        player2Turn = true;
        playerCard2();
        checkEndGame();
    })
}
function player2Attack(){
    $(document).on("click", ".weapon2", function(){
        // playerRoll =  Math.floor((Math.random()*20)+1);
        var damage =  $(this).attr("attackpower") - player1.ac
        player1.hp = player1.hp - damage
        console.log("player1 hp is " + player1.hp)
        player1Turn = true;
        player2Turn = false;
        playerCard1(); 
        checkEndGame();
    })
}
player1Attack();
player2Attack();

currentWinner= "";

var player1Wins = 0;
var player2Wins = 0;
function checkEndGame (){
    if (player1.hp <= 0){
        player2Wins++;
        $("#player2Wins").text("Player 2 Victories: " + player2Wins);
        $("#player1Wins").text("Player 1 Victories: " + player1Wins);
        $("#Game").css("display", "none");
        $("#wonGame").css("display", "block");
        currentWinner = player2;
        $("#winnerImage").attr("src", currentWinner.image);
        $("#currentWinner").text(player2Name);
    }
    if (player2.hp <= 0){
        player1Wins++;
        $("#player2Wins").text("Player 2 Victories: " + player2Wins);
        $("#player1Wins").text("Player 1 Victories: " + player1Wins);
        $("#Game").css("display", "none");
        $("#wonGame").css("display", "block");
        currentWinner = player1;
        $("#winnerImage").attr("src", currentWinner.image);
        $("#currentWinner").text(player1Name);
    }
}

function restartGame (){
    $("#wonGame").css("display", "none");
    $("#start-button").css("display", "none");
    $("#challenger").css("display", "none");
    $("#restartGame").css("display", "block")
     player1Name = "";
     player2Name = "";
     player1.hp = 300;
     player2.hp = 300;
     player1 = null;
     player2 = null;
    $("#initialInstruct").css("display", "block");
    $("#assigned-name1").text("");
    $("#assigned-name2").text("");
    $("#assigned-name3").text("");
    $("#assigned-name4").text("");
    $("#assigned-name12").text("");
    $("#assigned-name22").text("");
    $("#assigned-name32").text("");
    $("#assigned-name42").text("");
    $("#setPlayerName1").text("");
    $("#setPlayerName2").text("");
    database.ref("/players/").remove();


}

$("#reStart").on("click", function(){
    restartGame();
})

// removeondisconnect() is a function to look into, it empties player data after leaving the page

// $("#chat-send").on("click", function(event) {
// 	event.preventDefault();

	// First, make sure that the player exists and the message box is non-empty
// 	if ( (player1Name !== "") && ($("#chat-input").val().trim() !== "") ) {
// 		// Grab the message from the input box and subsequently reset the input box
// 		var msg = player1Name + ": " + $("#chat-input").val().trim();
// 		$("#chat-input").val("");

// 		// Get a key for the new chat entry
// 		var chatKey = database.ref().child("/chat/").push().key;

// 		// Save the new chat entry
// 		database.ref("/chat/" + chatKey).set(msg);
// 	}
// });
// database.ref("/chat/").on("child_added", function(snapshot) {
// 	var chatMsg = snapshot.val();
// 	var chatEntry = $("<div>").html(chatMsg);

// 	// Change the color of the chat message depending on user or connect/disconnect event
// 	if (chatMsg.includes("disconnected")) {
// 		chatEntry.addClass("chatColorDisconnected");
// 	} else if (chatMsg.includes("joined")) {
// 		chatEntry.addClass("chatColorJoined");
// 	} else if (chatMsg.startsWith(player1Name)) {
// 		chatEntry.addClass("chatColor1");
// 	} else {
// 		chatEntry.addClass("chatColor2");
// 	}

// 	$("#chatDisplay").append(chatEntry);
// 	$("#chatDisplay").scrollTop($("#chatDisplay")[0].scrollHeight);
