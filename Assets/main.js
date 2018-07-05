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

// var config = {
//     apiKey: "AIzaSyBKux44hLQ1eyQ4BUcCQiZsXfEm-NiMIJ0",
//     authDomain: "dandd-c6b41.firebaseapp.com",
//     databaseURL: "https://dandd-c6b41.firebaseio.com",
//     projectId: "dandd-c6b41",
//     storageBucket: "",
//     messagingSenderId: "492662587984"
//   };
//   firebase.initializeApp(config);

//   var database = Firebase.database()
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

var player1Name = "";
var player2Name = "";
var player1 = "";
var player2 = "";

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
                val : "2xD20 + 7"
            },
             {
                name : "Bound Earth",
                attack : (playerRoll * 3) + 10,
                val : "(2xD20x3)+10",
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
            val : "2xD20 + 10"
            },
            {
        uses : 3,
        name : "Dark Bow",
        attack : playerRoll * 2,
        val : "2xD20x2"
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
            val : "2xD20 + 16" 
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
            val : "2xD20 + 20"
        },
        {
            name: "Soul Drain",
            attack: playerRoll * 3,
            uses: 2, 
            val : "2xD20 x 3"
        },
         {
            name: "Staff Strike",
            attack: playerRoll,
            val : "2xD20"
        },
        ]
           
    }
];

$("#readyPlayer1").on("click", function(){
    if (player1Name == ""){
     player1Name = ($("#player1Name").val().trim()) ;
        $("#setPlayerName1").text(player1Name);
        $("#player1Name").val("")
         }
    else{
        $("#player1Name").val("")
    }

})
$("#readyPlayer2").on("click", function(){
    if (player2Name == ""){
        player2Name = $("#player2Name").val().trim();
        $("#setPlayerName2").text(player2Name);
        $("#player2Name").val("")

    }
    else {
        $("#player2Name").val("")
    }

})

function chooseHero1(){
             $("#druid").on("click", function(){
                if ( player1 == ""){
                console.log("clicked")
                player1 = fighterArray[0]
                $("#assigned-name1").text(player1Name)
                console.log(player1)
                }
            })
           $("#assassin").on("click", function(){
                if ( player1 == ""){
               player1 = fighterArray[1];
               $("#assigned-name2").text(player1Name)
            }
           })
        }
chooseHero1();

function chooseHero2(){
             $("#warrior").on("click", function(){
                if ( player2 == ""){
                console.log("clicked")
                player2 = fighterArray[2]
                $("#assigned-name3").text(player2Name)
                console.log(player2)
                }
            })
           $("#wizard").on("click", function(){
                if ( player2 == ""){
               player2 = fighterArray[3];
               $("#assigned-name4").text(player2Name)
            }
           })
        }
chooseHero2();

$("#start-button").on("click", function (){
    
        if( player1 !== "" && player2 !== ""){
            $("#initialInstruct").css("display", "none");
            $("#Game").css("display", "block");
            playerCard1();
            playerCard2();
            makeButtons1();
            makeButtons2();
        
    }
})
function playerCard1 (){
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

//   function turnOrder (){
//       if (player1Turn = true){
//           player1Attack();
//           var turnText1 =  $("<h3>")
//           turnText1.text("Your Turn")
//           $("#player1Buttons").append(turnText1)
//       }
//       else if (player2Turn = true){
//           player2Attack();
//           var turnText2 = $("<h3>")
//           turnText2.text("Your Turn")
//           turnText1.text("")
//           $("#player2Buttons").append(turnText2)
//       }
//   }      

//   turnOrder();
currentWinner= "";

function checkEndGame (){
    if (player1.hp <= 0){
        $("#Game").css("display", "none");
        $("#wonGame").css("display", "block");
        currentWinner = player2;
        $("#winnerImage").attr("src", currentWinner.image);
        $("#currentWinner").text(player2Name);
    }
    if (player2.hp <= 0){
        $("#Game").css("display", "none");
        $("#wonGame").css("display", "block");
        currentWinner = player1;
        $("#winnerImage").attr("src", currentWinner.image);
        $("#currentWinner").text(player1Name);
    }
}

function restartGame (){
    $("#wonGame").css("display", "none");
     player1Name = "";
     player2Name = "";
     player1 = "";
     player2 = "";
    $("#initialInstruct").css("display", "block");
    $("#assigned-name1").text("");
    $("#assigned-name2").text("");
    $("#assigned-name3").text("");
    $("#assigned-name4").text("");
    $("#setPlayerName1").text("");
    $("#setPlayerName2").text("");

}

$("#reStart").on("click", function(){
    restartGame();
})





