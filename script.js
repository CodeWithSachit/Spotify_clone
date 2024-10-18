console.log("Welcome to Spotify...");


let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Good Life", filepath: "song/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "Stay", filepath: "song/2.mp3", coverpath: "cover/2.jpg" },
    { songName: "Ghost", filepath: "song/3.mp3", coverpath: "cover/3.jpg" },
    { songName: "Kings & Queens", filepath: "song/4.mp3", coverpath: "cover/4.jpg" },
    { songName: "Not You Barbie Girl", filepath: "song/5.mp3", coverpath: "cover/5.jpg" },
    { songName: "Dancing Done", filepath: "song/6.mp3", coverpath: "cover/6.jpg" }
];


myProgressBar.value = 0;




songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});





 makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="playIcon" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>`;
    });
};


 updateMasterPlayButton = (isPlaying) => {
    if (isPlaying) {
        masterPlay.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
                <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
            </svg>`;
        gif.style.opacity = 1;
    } else {
        masterPlay.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="playIcon" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>`;
        gif.style.opacity = 0;
    }
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        if (songIndex === index) {
            if (audioElement.paused) {
                audioElement.play();
                updateMasterPlayButton(true);
                e.currentTarget.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
                        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                    </svg>`;
            } else {               
                audioElement.pause();
                updateMasterPlayButton(false);
                e.currentTarget.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="playIcon" viewBox="0 0 384 512">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                    </svg>`;
            }
        } else {
            makeAllPlays(); 
            songIndex = index;


            audioElement.src = songs[songIndex].filepath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();

            e.currentTarget.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                </svg>`;

            updateMasterPlayButton(true);
        }
    });
});


updateCurrentSongIcon = () => {
    makeAllPlays();
    document.getElementById(songIndex).innerHTML = `
        <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"/>
    `;
};




audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});



myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});


audioElement.addEventListener('ended', () => {
    
    if (songIndex < songs.length - 1) {
        songIndex += 1;
    } else {
        songIndex = 0; 
    }

   
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    
   
    updateMasterPlayButton(true);
    updateCurrentSongIcon();
});



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        updateMasterPlayButton(true);
        
        
        document.querySelectorAll('.songItemPlay')[songIndex].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
                <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
            </svg>`;
    } else {
        audioElement.pause();
        updateMasterPlayButton(false);
        

        document.querySelectorAll('.songItemPlay')[songIndex].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="playIcon" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>`;
    }
});


previous.addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex -= 1;
    } else {
        songIndex = songs.length - 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>
    `;
    gif.style.opacity = 1;
    updateCurrentSongIcon();
});



next.addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex += 1;
    } else {
        songIndex = 0;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play(); `
    <svg xmlns="http://www.w3.org/2000/svg" class="pauseIcon" viewBox="0 0 320 512">
    <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>
`;
    gif.style.opacity = 1;
    updateCurrentSongIcon();
});


