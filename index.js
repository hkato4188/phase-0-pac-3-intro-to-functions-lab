function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(shout(string));
}

function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string){
    switch(string){
        case string.toLowerCase():
            return "I can't hear you!";
            
        case string.toUpperCase():
            return "YES INDEED!";
            
        case "Let's have dinner together!":
            return "I would love to!";
            
        default:
            return "Not sure what to say to that..."

    }
    
    /* if(string === string.toLowerCase()){
         return "I can't hear you!";
     }else if(string === string.toUpperCase()){
         return "YES INDEED!";
     }else if(string === "Let's have dinner together!"){
         return "I would love to!";
     }else{
         return "Sorry no input for that!"
     }
     */
}