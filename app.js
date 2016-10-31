window.onload = function () {

  var alphabet = 
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is NBA Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Artists";
    } 
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [

        [
        "celtics",
        "nets",
        "knicks",
        "sixers",
        "raptors",
        "bulls",
        "cavaliers",
        "pistons",
        "pacers",
        "bucks",
        "hawks",
        "hornets",
        "heat",
        "magic",
        "wizards",
        "mavericks",
        "rockets",
        "grizzlies",
        "pelicans",
        "spurs",
        "nuggets",
        "timberwolves",
        "thunder",
        "trailblazers",
        "jazz",
        "warriors",
        "clippers",
        "lakers",
        "suns",
        "kings"
        ],

        [
        "harry-potter",
        "jurassic-park",
        "finding-nemo",
        "toy-story",
        "the-incredibles",
        "the-lion-king",
        "star-wars",
        "sprited-away",
        "charlie-brown",
        "the-avengers",
        "the-jungle-book",
        "the-martian",
        "the-little-mermaid",
        "nightmare-before-christmas",
        "corpse-bride",
        "avatar",
        "titanic",
        "inception",
        "friday",
        "fargo",
        "the-silence-of-the-lambs",
        "coming-to-america",
        "gladiator",
        "space-jam",
        "my-neighbor-totoro",
        "despicable-me",
        "shrek",
        "pulp-fiction",
        "lord-of-the-rings",
        "fantastic-mr-fox"
        ],


        [
        "beyonce",
        "kanye-west",
        "jay-z",
        "rihanna",
        "drake",
        "childish-gambino",
        "pharrell",
        "dj-khaled",
        "common",
        "nas",
        "chance-the-rapper",
        "action-bronson",
        "gucci-mane",
        "skepta",
        "the-weeknd",
        "yg",
        "j-cole",
        "french-montana",
        "frank-ocean",
        "method-man",
        "prince",
        "michael jackson",
        "gorillaz",
        "camron",
        "asap-rocky",
        "adele",
        "kendrick-lamar",
        "travis-scott",
        "wu-tang",
        "rza"
        ]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        [
        "another great franchise",
        "lin",
        "havent won a championship since 73",
        "2nd place in 2001",
        "curry's dad played here",
        "the goat of the 90's",
        "uncle drew",
        "team wallace",
        "malice at the palace",
        "the team no one picks",
        "just got howard",
        "used to be the bobcats",
        "taking my talent to south beach",
        "shaq started here",
        "agent zero",
        "og nash",
        "yaooooo",
        "big bears",
        "nola",
        "defensive team of the year",
        "team melo",
        "kg",
        "new school sonics",
        "pippen used to be here",
        "barkley",
        "stacked team",
        "all they do is dunk",
        "one of the greatest franchises",
        "amare",
        "remember stajakovich"
        ],
        
        [
        "the boy who lived",
        "rawr",
        "just keep swimming",
        "andy",
        "where's my supersuit",
        "long live the king",
        "luke",
        "my parents turned to pigs",
        "good grief",
        "squad up",
        "beloved childrens book",
        "they left him",
        "sold her voice",
        "is it a spooky movie or a xmas one",
        "i married a dead person",
        "highest grossing film",
        "jack and rose",
        "you jump i jump",
        "bye felisha",
        "iowa mystery",
        "lector",
        "prince hakeem",
        "are you not entertained",
        "bug bunny straight dunking on you",
        "big fluffy spirit",
        "minions",
        "get off my swamp",
        "say what again",
        "for mordor",
        "sly like a ---"
        ],
        
        [
        "the queen",
        "i am a god",
        "used to push snow by the oz",
        "always working",
        "stay in his feelings",
        "community star",
        "bbc and ice cream",
        "that one friend who snapchats everything",
        "used to be on good music",
        "qb's finest",
        "kit kat",
        "raps and cooks",
        "lemonade",
        "grime boys",
        "all i do is xans",
        "red red red red red",
        "platinum with no features",
        "bx all day",
        "stay swimming good",
        "hes the man",
        "purple",
        "beat it",
        "a band",
        "pink and purple",
        "harlem fashion",
        "she'll make you cry",
        "master splinters daughter",
        "all he does is xans",
        "staten island group",
        "bobby digital"        
        ]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


