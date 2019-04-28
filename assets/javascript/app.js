var parent_div = $("<div>");
var top_button_holder = $('<div class="button-holder">');
var top_button = $('<i class="far fa-keyboard light-text clear"></i>');
var section_title = $('<div class="section-title clear">');
var top_header = $('<h2 class="clear">Experience</h2>');
var top_div = $('<div class="col-md-12 bio">');
var top_text = "Hi! I'm a long time developer and a new web developer. I have been programming for 19 years now. I enjoy the puzzle aspect of programming. It may start a while to get started but once into a issue I quickly get engrossed in solving the problem. I have work in all kinds of offices from big corporate place to smal shops of less than 10 programmers. One of my favorite projects was customing and inatlling barcode software in a warehouse shipping area.";

var mid_button_holder = $('<div class="button-holder">');
var mid_button = $('<i class="fas fa-database light-text clear icon=pro"></i>');
var mid_title = $('<div class="section-title">');
var mid_header = $('<h2 class="clear">Professional Skills</h2>');
var mid_holder = $('<div class="col-md-12 bio">');
var mid_text = "I am the youngest of 7 kids and have a wife and kids of my own. I love watching hockey and The Simpsons. The hockey teams I follow are the St. Louis Blues and the Everett Silvertips. I enjoy traveling I have been to England, Scotland, Italy, Isreal, Jordan and the Philippines and I am planning on going to Germany in 2020!";

var bottom_button_holder = $('<div class="button-holder">');
var bottom_button = $('<i class="fas fa-graduation-cap light-text clear"></i>');
var bottom_section_title = $('<div class="section-title">');
var bottom_header = $('<h2 class="clear">Education</h2>');
var bottom_holder = $('<div class="col-md-12 bio">');
var bottom_text = "My home office is decorated with Simpsons stuff. My biggest piece of memorabilia is a 6-foot tall fiberglass Homer Simpson.";

var instruction_holder = $('<div class="col-md-12 bio">');
var instructions = $('<h4>Click an icon learn more about that program</h4>');

function load() {
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
}
greg();
load();
//$("#greg").on("click", function(){
$(document.body).on("click", "#greg", function () {
    greg();
    load();
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
    }
    load();
});

function greg(){
    clear();
    top_button = $('<i class="far light-text fa-keyboard clear"></i>');
    top_header = $('<h2 class="clear">Experience</h2>');
    
    top_text = "<table class='table'><tr><td>Sr Application Developer</td><td>Anthem</td><td>Mar 2000 - Present</td></tr><tr><td>Developer</td><td>B-Line Systems</td><td>1998 - 2000</td></tr><tr><td>Programer</td><td>Anheuser-Busch</td><td>1991 - 1998</td></tr></table>";
    mid_button = $('<i class="fas light-text fa-database clear icon-pro"></i>');
    mid_header = $('<h2 class="clear">Professional Skills</h2>');
    mid_text = "<table class='table'><tr><td>.Net</td><td>Unidata Database</td><td>Agile Development</td></tr><tr><td>Jira</td></tr>";

    bottom_button = $('<i class="fas light-text fa-graduation-cap clear"></i>');
    bottom_header = $('<h2 class="clear">Education</h2>');
    bottom_text = "Souther Illinois University Edwardsville - BA Computer Science 2002";
    instructions = $('<h4>Click an icon learn more about that program</h4>');
}

function nhl(){
    clear();
    top_button = $('<i class="fas fa-hockey-puck light-text clear"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Hockey Hangman</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    mid_text = '<div id="links"><div class="link-holder hangman" data_id = "nhl"><a href="https://gregorylanter.github.io/Word_Guess_Game/"><div class="thumbnail hockey"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div id="links"><div class="link-holder" data_id = "nhl"><a href="https://github.com/GregoryLanter/Word_Guess_Game"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A javascript game to guess NHL team names.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');
}
function bart(){
    clear();
    top_button = $('<i class="fas fa-fist-raised light-text clear"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Bart's Battle RPG</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    
    mid_text = '<div id="links"><div class="link-holder bart-rpg" data_id = "bart"><a href="https://gregorylanter.github.io/unit-4-game/"><div class="thumbnail rpg"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div id="links"><div class="link-holder" data_id = "bart"><a href="https://github.com/GregoryLanter/unit-4-game/settings"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery simple Role Playimg game.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');
}
function beer(){
    clear();
    top_button = $('<i class="fas fa-beer light-text clear"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Beer Trivia</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    //mid_text = '<div id="links"><div class="link-holder hangman" data_id = "nhl"><a href="https://gregorylanter.github.io/Word_Guess_Game/"><div class="thumbnail hockey"><div class="banner">Play</div></div></a></div>';
    mid_text = '<div id="links"><div class="link-holder trivia" data_id = "beer"><a href=""><div class="thumbnail beer"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div id="links"><div class="link-holder" data_id = "beer"><a href="https://github.com/GregoryLanter/TriviaGame"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear"></i>');
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
    mid_text = '<div id="links"><div class="link-holder" data_id = "gif"><a href="https://gregorylanter.github.io/Giphy-app/"><div class="thumbnail giphy"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div id="links"><div class="link-holder" data_id = "gif"><a href="https://github.com/GregoryLanter/Giphy-app"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery app to pull back from Giphy API.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}
function mta(){
    clear();
    top_button = $('<i class="fas fa-train light-text clear"></i>');
    top_header = $('<h2 class="clear">Title</h2>');
    top_text = "<h4>Monstropolis Transit Athority</h4>";
    mid_button = $('<i class="fas light-text fa-link clear"></i>');
    mid_header = $('<h2 class="clear">Links</h2>');
    mid_text = '<div id="links"><div class="link-holder" data_id = "mta"><a href="https://gregorylanter.github.io/Train-Schedule/"><div class="thumbnail mta"><div class="banner">Play</div></div></a></div>';
    mid_text += '<div id="links"><div class="link-holder" data_id = "mta"><a href="https://github.com/GregoryLanter/Train-Schedule"><div class="thumbnail git"><div class="banner">Git Repo</div></div></a></div>';
    
    bottom_button = $('<i class="fas light-text fa-clipboard clear"></i>');
    bottom_header = $('<h2 class="clear">Notes</h2>');
    bottom_text = "A jQuery app using timers, input, and modal to schedule trains.";
    instructions = $('<h4>Click an icon learn more about that program</h4>');

}
function clear(){
    $(".clear").remove();
    $(".bio").text("");
}