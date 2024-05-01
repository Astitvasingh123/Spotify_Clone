
let songIndex=0;
let audioElement=new Audio('Songs/audio1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar= document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songItemPlay'));


let songs=[
    {songName:"A", filePath:"Songs/audio1.mp3", coverPath:"Cover/.jpg"},
    {songName:"B", filePath:"Songs/audio2.mp3", coverPath:"Cover/.jpg"},
    {songName:"C", filePath:"Songs/audio3.mp3", coverPath:"Cover/.jpg"},
    {songName:"D", filePath:"Songs/audio4.mp3", coverPath:"Cover/.jpg"},
    {songName:"E", filePath:"Songs/audio5.mp3", coverPath:"Cover/.jpg"},
    {songName:"F", filePath:"Songs/audio6.mp3", coverPath:"Cover/.jpg"},
    {songName:"G", filePath:"Songs/audio7.mp3", coverPath:"Cover/.jpg"},
    
]
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.src="Images/pause-solid.svg";
    }
    else{
        audioElement.pause();
        masterplay.src="Images/play-solid.svg";
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

const makePLay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.src="Images/play-solid.svg";
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makePLay(); 
        songIndex = parseInt(e.target.id);
        e.target.src="Images/pause-solid.svg";
        audioElement.src = `Songs/audio${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.src="Images/pause-solid.svg";
    })
})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>6){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Songs/audio${songIndex+1}.mp3`;//problem//
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.src="Images/pause-solid.svg";
})
document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<1){
        songIndex=6;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/audio${songIndex+1}.mp3`;//problem//
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.src="Images/pause-solid.svg";
})