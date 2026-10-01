// Sample Track Data for Ugahits.com
const sampleTracks = [
  {
    id: 1,
    title: "Omunyankole",
    artist: "Nighgt Eight UG & Unpredictable 256",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ3v84lUCesxAWEoZY3ahltIpIYiWvpPFrCiUUk6AqsnoSHSo_1VGoyp5Oa8s5uWdg04S3sK5aeW3UpKz5qS1zw7Sb4bUdR-ym4zaMpkWAmiLjfohrgpZ0HcwkPO9U0awqjNAb6Hl7RXNleyyHC_wfu_RP3ExiVAM9zzk-p6aTvr5UjD-gZZRQC0Y53r0/s320/OMUNYANKOLE.jpg",
    fileUrl: "https://mega.nz/file/8RkHzIyZ#d_fNF8mZ0RPnI23x5s4u3XrbFBUrcyGrwMo5Ho7jVKI",
    downloads: 14200
  },
  {
    id: 2,
    title: "Daily Bundle",
    artist: "Elijah Kitaka",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTTSeviKjhdBdC1_yLo3dtVIRiLTptGms8zvavhGo-KRyUJ5UQpBWQK3ZTHHH6b4Sv8U0jPVtvsE423CRUiJOp89qpTEsYDTl5JOQYsEhoTVD36vlMme0d_cBQ8MIP1wulZoiAZ6gyuj_rekJF_pdififCAyZHGu4TxjEvUuOU7oAelE-XLt6zzcSOrlM/s320/daily%20bundle.jpg",
    fileUrl: "https://mega.nz/file/ANE1CZ6I#7CFOVGtNgmAu5sN9uwJnpF8V3EDog3BjGR5pzmr22wY",
    downloads: 9800
  },
  {id: 3,
    title: "Enyanda",
    artist: "Sheebah",
    cover: "https://mega.nz/file/8MlRXCAb#1gPJeun8cDd_H4TiPT73_vWUpsvN9-5Cy-kYAFr6ajg",
    fileUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkDu-sOb0dzj3gtAlxUEp7_ncET9iMbiX-1VsU8CBfs1UN2hzuBjRrByZf-8-842KZHoNbmETRdUNZoEjdG8f4JQ3lDsUCmE-CBtllmxyUBvMIU_TELw6deHppxJxRXhDw9N7EQ7KNWWWv8yx4q6FI_dMkiI3bkjNSeJ4MQ_3eLV1b2wdNqDnjnIiK7Ek/s320/enyanda.jpg",
    downloads: 9800
  },
  {
    id: 4,
    title: "Finary",
    artist: "Spice Diana",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcNzilb5G3h2kL6Kw2dj9uWki7gLBYdjeUVglY4JZ-9Q2AjjduhyphenhyphenBAPXDtejqqVaXFeIYZ4J-zEMV2Z6Y7xU9GuXP4lJEXAqM8REf5hDNAMx1IONPccGeuGvubXBTwnwMiWmoPaFVKMLl1S7OcbZCdZpXMot1WJVHW9BBzXfWE9ESVB0Qu7GWjzfQ8AdNv/s768/Alupo-Epel-meeting-the-IOM-Director-General-Her-Excellency-Amy-Pope.jpg",
    fileUrl: "https://mega.nz/file/wVUwUCxA#vgFgsKcv2nwE4F8om6qD20JJ-UDwAQwdfSF_MOM2iAo",
    downloads: 7500
  },
  {
    id: 5,
    title: "Muramu",
    artist: "Nice Avia",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpBRB86AOY0rW-3W4C332UPpWr3vpobpk-Hv2MaY_khNzjBQSpDZ3kqvi0mGefrfSFDF0I9aBQ1ThuGI7oroPzaz1r8RJ-eFj0kdl7JJXDPAiyF-SsnACcDRmiVIlc9SH9GX1jJXLBw-x9FFQJgFL2Wwtn_i_OQCzJNbMTM6IaagAWCozvH9j-gGYljAg/s320/muramu.jpg",
    fileUrl: "https://mega.nz/file/dR9gDKBK#8YQAm5ROG-OdVp7iKhJ1wSE8LB5GUjhiz6SVylXTnLQ",
    downloads: 1420
  },
];

let currentPlayingId = null;
const audioElement = document.getElementById('audioElement');

// Render Audio Track Lists
function renderTracks() {
  const container = document.getElementById('trackList');
  container.innerHTML = '';

  sampleTracks.forEach(track => {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="track-details">
        <img src="${track.cover}" alt="${track.title}">
        <div class="track-meta">
          <span class="title">${track.title}</span>
          <span class="artist">${track.artist} • <i class="fa-solid fa-download"></i> <span id="dl-count-${track.id}">${track.downloads}</span></span>
        </div>
      </div>
      <div class="track-actions">
        <button class="btn btn-outline btn-sm" onclick="playAudio(${track.id})">
          <i class="fa-solid fa-play"></i> Play
        </button>
        <button class="btn btn-primary btn-sm" onclick="downloadAudio(${track.id})">
          <i class="fa-solid fa-download"></i> Download
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Audio Player Functionality
function playAudio(trackId) {
  const track = sampleTracks.find(t => t.id === trackId);
  if (!track) return;

  if (currentPlayingId === trackId && !audioElement.paused) {
    audioElement.pause();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
    return;
  }

  currentPlayingId = trackId;
  audioElement.src = track.fileUrl;
  document.getElementById('playerTitle').innerText = track.title;
  document.getElementById('playerArtist').innerText = track.artist;
  document.getElementById('playerCover').src = track.cover;
  
  audioElement.play();
  document.getElementById('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function togglePlay() {
  if (!audioElement.src) return;
  if (audioElement.paused) {
    audioElement.play();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audioElement.pause();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

// Download Audio Logic & Increment Counter
function downloadAudio(trackId) {
  const track = sampleTracks.find(t => t.id === trackId);
  if (!track) return;

  track.downloads++;
  document.getElementById(`dl-count-${track.id}`).innerText = track.downloads;

  // Simulate file download trigger
  const a = document.createElement('a');
  a.href = track.fileUrl;
  a.download = `Ugahits.com_${track.artist}_-_${track.title}.mp3`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Auth & Modal Controllers
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function switchModal(current, target) {
  closeModal(current);
  openModal(target);
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  closeModal('loginModal');
  setLoggedInState(email.split('@')[0]);
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  closeModal('registerModal');
  setLoggedInState(name);
}

function setLoggedInState(username) {
  document.getElementById('loginBtn').classList.add('hidden');
  document.getElementById('registerBtn').classList.add('hidden');
  
  const userProfile = document.getElementById('userProfile');
  userProfile.classList.remove('hidden');
  document.getElementById('userName').innerText = username;
}

function logout() {
  document.getElementById('loginBtn').classList.remove('hidden');
  document.getElementById('registerBtn').classList.remove('hidden');
  document.getElementById('userProfile').classList.add('hidden');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderTracks();
});
