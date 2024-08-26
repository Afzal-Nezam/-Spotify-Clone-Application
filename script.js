console.log("Welcome to Healer");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('maithili chhath song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "hello - Adele",filePath: "songs/1.mp3",coverPath: "cover2.jpg"},
    {songName: "Insane - A.P Dhillo",filePath: "songs/2.mp3",coverPath: "insane.jpg"},
    {songName: "Namo Namo Shankara - Amit Tripathi",filePath: "songs/3.mp3",coverPath: "namo namo.jpg"},
    {songName: "le le ram ram - MC Square",filePath: "songs/4.mp3",coverPath: "mc square.jpg"},
    {songName: "Sakhiyaan - Maninder butter",filePath: "songs/5.mp3",coverPath: "Sakhiyaan.jpg"},
    {songName: "Ugo Suraj dev ",filePath: "songs/6.mp3",coverPath: "suraj dev.jpg"},
    {songName: "atma rama - Vrodh-V",filePath: "songs/7.mp3",coverPath: "vrodh.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;


})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        e.target.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
        makeAllPlays();
        gif.style.opacity=1;
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;  
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0 ){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0; 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
}) 