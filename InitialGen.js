//This is the Fast Fortress Construction System for the RP Game Cyberpunk 2020
//Author Alice Rabbit

//Used for cell id assignment
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];


function roll(min, max) { //Tested
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

//Also need to increase the INT of the system by 3 for each CPU
//Gain 4 spaces of memory for each CPU, one Code Gate, and one Terminal
var cpuCount = roll(1, 6);

var personalities = ["Friendly/Curious", "Hostile/Paranoid",
    "Stable/Intelligent/Buisnesslike", "Intellectual/Detached",
    "Machinelike", "Remote/Godlike"
];

var reaction = ["Neutral", "Neutral", "Kill all intruders",
    "Observe intruders, then act", "Report all intruders",
    "Talk to intruder to find intent"
];

var icon = ["Human", "Geometric", "Mythological",
    "Voice only", "Technic", "\"Humanoid\""
];

var fileType = ["Inter Office", "Database", "Buisness Records",
    "Financial Transactions", "Grey Ops", "Black Ops"
];

var virtuals = ["Virtual Conference", "Virtual Office", "Virtual Rec-Area",
    "Virtual Building", "Virtual City", "Virtual World"
];

var realism = ["Simple", "Simple", "Contextual",
    "Fractal", "Photorealistic", "Superrealistic"
];

var detectionAlarm = ["Watchdog", "Watchdog", "Bloodhound", "Bloodhound",
    "Pitbull", "Pitbull"
];

var antiIC = ["Killer", "Killer", "Manticore", "Manticore", "Aardvark", "Aardvark"];

var antiSystem = ["Flatline", "Poison Flatline", "Krash", "Viral 15",
    "DecKrash", "Murphy"
];

var antiPersonnel = ["Stun", "Hellbolt", "Brainwipe", "Knockout", "Zombie", "Hellhound"];

var defType = [detectionAlarm, detectionAlarm, detectionAlarm, detectionAlarm,
    antiIC, antiIC, antiSystem, antiSystem,
    antiPersonnel, antiPersonnel
];

function findWallStr() { //Tested
    var rand = roll(1, 6);
    var str = Math.floor(rand / 2 + cpuCount);
    return str;
}

function findSkillRanks() { //Tested
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push(roll(1, 6) + 4)
    }
    return arr;
}

function findFileType() { //Tested
    var rand = roll(0, 5);
    return fileType[rand]; //Need to place in memory loc of my choice
}

function findVirtuals() {
    var rand = roll(0, 5);
    return virtuals[rand];
}

function findRealism() {
    var rand = roll(0, 5);
    return realism[rand];
}

function findDefenses() {
    var defenses = [];
    var defCount = roll(1, 6) + cpuCount;

    for (var i = 0; i < defCount; i++) {
        var rand = roll(0, 9);
        defenses.push(defType[rand][roll(0, 5)]);

    }
    console.log(defenses);
    return defenses;
}
// Here's a function that formats data
// passed to it in the above format
// as a table. The HTML is returned
// as a string.
function createTable() {
    var html = '';
    var defenses = findDefenses();
    var done = false;

    // Assume data is an array of arrays,
    // containing strings.

    html += '<table class="data">';

    // Step through the rows of the data.
    for (var x = 0; x < 16; x++) {
        //var rowData = data[row];
        html += '<tr>'

        // Step through the columns in
        // this row.
        for (var i = 0; i < 16; i++) {
            html += '<td class="cell" id="' + alpha[x] + i + '">';
            //here is where we will add the code to import the Cyberdeck Programs
            if (i < defenses.length && done == false) {
                //id will resemble a0-c for row[a] col[0]. The -c is to differentiate
                //between table cell and content.
                html += '<img id="' + alpha[x] + i + '-c' + '" alt="' + defenses[i] + '" src="token.png" draggable="true" ondragstart="drag(event)">';
            } else {
                //html += '<img id="'+alpha[x]+i+'" src="dataWall.png">'; //fills with walls
                done = true;
            }

            html += '</td>';
        }

        html += '</tr>';
    }

    html += '</table>';

    return html;
}

// This function takes the formatted HTML
// and inserts it into the document as
// 'child' HTML of the specified element.
function insertHTML(id, html) {
    var el = document.getElementById(id);

    if (!el) {
        alert('Element with id ' + id + ' not found.');
    }

    el.innerHTML = html;
}

// This function ties things up.
function run() {
    var html = createTable();

    insertHTML('tabledata', html);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Run everything when the document loads.
window.onload = run;