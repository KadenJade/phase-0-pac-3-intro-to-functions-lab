//shout
function shout(string){
    return string.toUpperCase();
}
//whisper
function whisper(string){
    return string.toLowerCase();
}
//logShout
function logShout(string){
    console.log(string.toUpperCase());
}
//logWhisper
function logWhisper(string){
    console.log(string.toLowerCase());
}
//sayHiToHeadphonedRoommate
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
    return "I can't hear you!"}
    if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
    
}