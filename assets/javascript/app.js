var parent_div = $("<div>");
var top_button_holder = $('<div class="button-holder">');
var top_button = $('<i class="far fa-keyboard light-text clear"></i>');
var section_title = $('<div class="section-title clear">');
var top_header = $('<h2 class="clear">Experience</h2>');
var top_div = $('<div class="col-md-12 bio">');
var top_text = "";

var mid_button_holder = $('<div class="button-holder">');
var mid_button = $('<i class="fas fa-database light-text clear icon=pro"></i>');
var mid_title = $('<div class="section-title">');
var mid_header = $('<h2 class="clear">Professional Skills</h2>');
var mid_holder = $('<div class="col-md-12 bio">');
var mid_text = "";

var bottom_button_holder = $('<div class="button-holder">');
var bottom_button = $('<i class="fas fa-graduation-cap light-text clear"></i>');
var bottom_section_title = $('<div class="section-title">');
var bottom_header = $('<h2 class="clear">Education</h2>');
var bottom_holder = $('<div class="col-md-12 bio">');
var bottom_text = "";

var instruction_holder = $('<div class="col-md-12 bio">');
var instructions = $('<h4>Click an icon learn more about that program</h4>');

function load(id) {
    top_button_holder.append(top_button);
    parent_div.append(top_button_holder);
    section_title.append(top_header);
    parent_div.append(section_title);
    top_div.append(top_text);
    parent_div.append(top_div);
    
    mid_button_holder.append(mid_button);
    parent_div.append(mid_button_holder);
    mid_title.append(mid_header);
    parent_div.append(mid_title);
    mid_holder.append(mid_text);
    parent_div.append(mid_holder);
    
    bottom_button_holder.append(bottom_button);
    parent_div.append(bottom_button_holder);
    bottom_section_title.append(bottom_header);
    parent_div.append(bottom_section_title);
    bottom_holder.append(bottom_text);
    parent_div.append(bottom_holder);    
    instruction_holder.append(instructions);
    parent_div.append(instruction_holder);
    $("#info-space").append(parent_div);
    // Store
}
greg();
load("greg")
//$("#greg").on("click", function(){
$(document.body).on("click", "#greg", function () {
    greg();
    load("greg");
});
$(document.body).on("click", ".thumbnail-holder", function () {
    var id = $(this).attr("data_id");
    switch (id) {
        case "nhl":
            nhl();
        break;
        case "bart":
            bart();
        break;
        case "beer":
            beer();
        break;
        case "gif":
            gif();
        break;
        case "mta":
            mta();
        break;
        case "rb":
            recipe();
        break;
    }
    load(id);
});

function greg(){
    clear();
    top_button = $('<i class="far light-text fa-keyboard clear"></i>');
    top_header = $('<h2 class="clear">Experience</h2>');
    
    top_text = "<table class='table table-dark'><tr><th>Position</th><th>Company</th><th></th></tr><tr><td >Sr Application Developer</td><td >Anthem</td><td >Mar 2000 - Present</td></tr><tr><td >Developer</td><td >B-Line Systems</td><td >1998 - 2000</td></tr><tr><td >Programer</td><td >Anheuser-Busch</td><td >1991 - 1998</td></tr></table>";
    mid_button = $('<i class="fas light-text fa-database clear icon-pro"></i>');
    mid_header = $('<h2 class="clear">Professional Skills</h2>');
    mid_text = "<table class='table-sm table-dark'><tr><td >.Net</td><td >javascript</td><td >jQuery</td><td>node.js</td><td >HTML</td><td >CSS<td >OOP</td><td >Agile</td><td >Jira</td></tr>";

    bottom_button = $('<i class="fas light-text fa-graduation-cap clear"></i>');
    bottom_header = $('<h2 class="clear">Education</h2>');
    bottom_text = "Souther Illinois University Edwardsville - BA Computer Science 2002";
    instructions = $('<h6>Click an icon, on the right, to learn more about that program</h6>');
}

function nhl(){
    clear();
    top_button = $('<i class="fas fa-hockey-puck light-text clear icon-2"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Hockey Hangman</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    mid_text = '<div id="links"><div class="link-holder hangman" data_id = "nhl"><a href="https://gregorylanter.github.io/Word_Guess_Game/" target="_blank"><div class="thumbnail hockey"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "nhl"><a href="https://github.com/GregoryLanter/Word_Guess_Game" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A javascript game to guess NHL team names.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');
}
function bart(){
    clear();
    top_button = $('<i class="fas fa-fist-raised light-text clear icon-3"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Bart's Battle RPG</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    
    mid_text = '<div id="links"><div class="link-holder bart-rpg" data_id = "bart"><a href="https://gregorylanter.github.io/unit-4-game/" target="_blank"><div class="thumbnail rpg"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "bart"><a href="https://github.com/GregoryLanter/unit-4-game/" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery simple Role Playimg game.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');
}
function beer(){
    clear();
    top_button = $('<i class="fas fa-beer light-text clear icon-2"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Beer Trivia</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    
    
    mid_text = '<div id="links"><div class="link-holder beer-game" data_id = "beer"><a href="https://gregorylanter.github.io/TriviaGame/" target="_blank"><div class="thumbnail trivia"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "beer"><a href="https://github.com/GregoryLanter/TriviaGame" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "Trivia game using jQuery and Timers/Intervals.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}
function gif(){
    clear();
    top_button = $('<i class="fas fa-play light-text clear"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Giphy App</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');


    mid_text = '<div id="links"><div class="link-holder ajax" data_id = "gif"><a href="https://gregorylanter.github.io/Giphy-app/" target="_blank"><div class="thumbnail gifs"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "gif"><a href="https://github.com/GregoryLanter/Giphy-app" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery app to pull back from Giphy API.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}
function mta(){
    clear();
    top_button = $('<i class="fas fa-train light-text clear icon-2"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Monstropolis Transit Athority</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');

    mid_text = '<div id="links"><div class="link-holder train" data_id = "mta"><a href="https://gregorylanter.github.io/Train-Schedule/" target="_blank"><div class="thumbnail monster"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "mta"><a href="https://github.com/GregoryLanter/Train-Schedule" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery app using timers, input, and modal to schedule trains.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}

function recipe(){
    clear();
    top_button = $('<i class="fas fa-list-alt light-text clear icon-2"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Recipe Buddy</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');

    mid_text = '<div id="links"><div class="link-holder rec-bud" data_id = "rb"><a href="https://jobu206.github.io/RecipeBuddy" target="_blank"><div class="thumbnail recipe"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div class="link-holder" data_id = "rb"><a href="https://github.com/GregoryLanter/RecipeBuddy" target="_blank"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear icon-3"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery app using timers, input, and modal to schedule trains.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}

function clear(){
    $(".clear").remove();
    $(".bio").text("");
}