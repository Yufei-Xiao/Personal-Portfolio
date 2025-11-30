function loadRadio(){
    const radio=`<div id="radio-btn"><img src="assets/icons/wave-sound.png" class="icon">Radio</div>

  <div id="radio-overlay"></div>

  <div id="radio-modal">
      <audio id="radio-player">
          <source src="assets/music/I_Really.mp3" type="audio/mpeg">
      </audio>

      

      <ul id="song-list">
          <li data-src="assets/music/I_Really.mp3">Song 1</li>
          <li data-src="assets/music/Night_City.mp3">Song 2</li>
          <li data-src="assets/music/Delicate_Weapon.mp3">Song 3</li>
          <li data-src="assets/music/Let_You_Down.mp3">Song 4</li>
          <li data-src="assets/music/Who's_Ready.mp3">Song 5</li>
      </ul>

      <div id="custom-controls">
          <div id="toggleBtn">
              <img id="toggleIcon" src="assets/icons/play.png" alt="Play" width="24">
          </div>
          <div id="exitBtn">exit</div>
      </div>
  </div>`
  document.getElementById("radio").innerHTML=radio;
  const btn = document.getElementById("radio-btn");
    const modal = document.getElementById("radio-modal");
    const overlay = document.getElementById("radio-overlay");
    const player = document.getElementById("radio-player");
    const toggleIcon = document.getElementById("toggleIcon");
    const toggleBtn = document.getElementById("toggleBtn");
    const exitBtn=document.getElementById("exitBtn");
    const songs = document.querySelectorAll("#song-list li");
    const playSrc = "assets/icons/play.png";
    const pauseSrc = "assets/icons/pause.png";

    /* ===== Open modal ===== */
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
        document.body.classList.add("modal-open");
        highlightCurrentSong();
    });


    /* ===== Close modal when background clicked ===== */
    exitBtn.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
        document.body.classList.remove("modal-open");
    });


    toggleBtn.addEventListener("click", () => {
        if (player.paused) {
            player.play();
            toggleIcon.src = pauseSrc;
            
        } else {
            player.pause();
            toggleIcon.src = playSrc;  // Show play when paused
        }
    });


    /* ===== Click song to load + play ===== */
    songs.forEach(song => {
        song.addEventListener("click", () => {
            player.src = song.dataset.src;
            player.play();
            toggleIcon.src = pauseSrc;
            highlightCurrentSong();
        });
    });
    player.addEventListener("play",highlightCurrentSong)
    function highlightCurrentSong() {
        const currentSrc=player.currentSrc;
        songs.forEach(song => {
        song.classList.remove('active');
            if (currentSrc.endsWith(song.dataset.src)) {
                song.classList.add('active');
            }
        });
    }
    /* ========================================
     RESTORE STATE FROM PREVIOUS PAGE
     ======================================== */
    function restorePlayerState() {
        const savedSrc = localStorage.getItem('radio_src');
        const savedTime = localStorage.getItem('radio_time');
        const savedState = localStorage.getItem('radio_state');

        if (savedSrc) {
            player.src = savedSrc;

            // Wait for metadata to load before setting time
            player.addEventListener("loadedmetadata", () => {
                if (savedTime) {
                    player.currentTime = Number(savedTime);
                }

                // Auto-resume if it was playing
                if (savedState === "playing") {
                    player.play().catch(() => {
                        console.log("Autoplay prevented by browser");
                    });
                    toggleIcon.src = pauseSrc;
                } else {
                    toggleIcon.src = playSrc;
                }

                highlightCurrentSong();
            }, { once: true }); // Only run once when metadata loads
        }
    }

    // Call restore function
    restorePlayerState();

    /* ========================================
        SAVE STATE CONTINUOUSLY
        ======================================== */
    player.addEventListener("timeupdate", () => {
        localStorage.setItem('radio_src', player.src);
        localStorage.setItem('radio_time', player.currentTime);
        localStorage.setItem('radio_state', player.paused ? "paused" : "playing");
    });

    /* ========================================
        SAVE STATE BEFORE PAGE UNLOAD
        ======================================== */
    window.addEventListener("beforeunload", () => {
        localStorage.setItem('radio_src', player.src);
        localStorage.setItem('radio_time', player.currentTime);
        localStorage.setItem('radio_state', player.paused ? "paused" : "playing");
    });

    /* ========================================
        UPDATE ICON WHEN AUDIO ENDS
        ======================================== */
    player.addEventListener("ended", () => {
        toggleIcon.src = playSrc;
        localStorage.setItem('radio_state', 'paused');
    });

    /* ========================================
        UPDATE ICON ON PAUSE/PLAY EVENTS
        ======================================== */
    player.addEventListener("pause", () => {
        toggleIcon.src = playSrc;
    });

    player.addEventListener("play", () => {
        toggleIcon.src = pauseSrc;
    });
}

document.addEventListener("DOMContentLoaded",loadRadio);