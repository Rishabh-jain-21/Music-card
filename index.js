const play = document.getElementById("play_buttton");
const next = document.getElementById("next_button");
const banner = document.getElementsByClassName('Banner');
const myMusic = document.getElementById('my-music');
const artistName = document.getElementById('artist_name');
const musicTitle = document.getElementById('music_title');
const previous = document.getElementById('previous_button');
const progressBar = document.querySelector('#progress-bar');
const songFullTime = document.querySelector('#song_full_time');
const songCurrentTime = document.querySelector('#song_current_time');

const music_api = [
    {
        title: "Artist Name",
        artist: "Name",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxQbQmhA3k8PsJn3Ia3Yl361WjXAQvY73UKziIU1x1a76q8wCR1VbKk-BMdWGSxNxc-Y&usqp=CAU"
    },
    {
        title: "FirstSong",
        artist: "Pta nahi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDrLd4YDmRCSdfSys9u3tNj3o1iBJvulhQQ&usqp=CAU"
    },
    {
        title: "SecondSong",
        artist: "Ye bhi pta nahi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Afn6apuRPGUTvrMLrBlcL5Fnnag6-u_VAw&usqp=CAU"
    },
    {
        title: "ThirdSong",
        artist: "Nahi pta",
        img: "data:image/jpeg;base64,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"
    },
    {
        title: "ForthSong",
        artist: "Nopes ",
        img: "data:image/jpeg;base64,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"
    }
]

play.addEventListener('click', changePlay);

function changePlay() {
    var str = play.src;
    str = "Images" + str.split("Images")[1];
    if (str == "Images/play-buttton.png") {
        play.src = "Images/pause.png"
        myMusic.play();
    } else {
        play.src = "Images/play-buttton.png"
        myMusic.pause();
    }
}

// data for the list
let index = 0;

// calling the element to show it first time
let firstTime = () => {
    artistName.innerText = music_api[index].title;
    musicTitle.innerText = music_api[index].artist;
    banner[0].src = music_api[index].img;
}
firstTime();

next.addEventListener('click', () => {
    index++;
    index = index % music_api.length;
    artistName.innerText = music_api[index].title;
    musicTitle.innerText = music_api[index].artist;
    banner[0].src = music_api[index].img;
})

previous.addEventListener('click', () => {
    index--;
    //extra case
    if (index < 0) {
        index = music_api.length - 1;
    }
    artistName.innerText = music_api[index].title;
    musicTitle.innerText = music_api[index].artist;
    banner[0].src = music_api[index].img;
})

// progress bar update function
/* when ever our music is going to change it will update the following function  */

// fat arrow function enjoying ES6 features 😍
let minute = "00";
let seconds = "00";
const updateProgressBar = () => {
    progressBar.value = parseInt((myMusic.currentTime / myMusic.duration) * 100);

    // upadate song current time
    if (parseInt(myMusic.currentTime) < 60) {
        songCurrentTime.innerText = parseInt(((myMusic.currentTime) / 60) / 10) + "" + parseInt(((myMusic.currentTime) / 60) % 10) + ":" + parseInt((myMusic.currentTime) / 10) + parseInt((myMusic.currentTime) % 10);
    }
    else {
        songCurrentTime.innerText = parseInt(((myMusic.currentTime) / 60) / 10) + "" + parseInt(((myMusic.currentTime) / 60) % 10) + ":" + parseInt(((myMusic.currentTime) % 60) / 10) + parseInt(((myMusic.currentTime) % 60) % 10);
        console.log(songCurrentTime.innerText);
    }

    // the below will be the song full time
    songFullTime.innerText = parseInt(((myMusic.duration) / 60) / 10) + "" + parseInt(((myMusic.duration) / 60) % 10) + ":" + parseInt(((myMusic.duration) % 60) / 10) + parseInt(((myMusic.duration) % 60) % 10);

    // if the current time equals to the full time than change icon
    if (myMusic.currentTime === myMusic.duration)
        changePlay();

}

// change progress bar when the music is running/ timeupdating
myMusic.addEventListener('timeupdate', updateProgressBar);


// change the song time as of the change in the progresbar 
const updateMusicTime = () => {
    myMusic.currentTime = (myMusic.duration * progressBar.value) / 100;
}


progressBar.addEventListener('click', updateMusicTime);
