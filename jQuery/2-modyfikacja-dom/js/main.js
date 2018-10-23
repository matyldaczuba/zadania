$("body").append("<div></div>");

$("body").append($("<button>Do góry!</button>").addClass("up"));

$("body").append($("<button>Do dołu!</button>").addClass("down"));


var box = $("div");
var btnUp = $(".up");
var btnDown = $(".down");


var par;
for(let i = 1; i<= 5; i++){
    par = $("<p></p>").addClass('par'+i).text("To jest paragraf " + i); 
    box.append(par);
}



btnUp.click(function(){
    
    let lastP = $( "p:last" );
    
    lastP.prependTo(box);
});


btnDown.click(function(){
    
    let firstP = $( "p:first" );
    
    firstP.appendTo(box);
    
});