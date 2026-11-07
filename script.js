// ==============================
// EDIT YOUR WEDDING DETAILS HERE
// ==============================
const WEDDING = {
  bride: 'Sarah',
  groom: 'Daniel',
  date: '2026-12-12T10:30:00+05:30',
  displayDate: 'SATURDAY · 12 DECEMBER 2026',
  whatsapp: '919999999999',
  maps: 'https://maps.google.com',
  music: 'assets/wedding-song.mp3'
};

// Basic menu
const menu=document.getElementById('menu');
document.getElementById('menuBtn').onclick=()=>menu.classList.add('open');
document.getElementById('closeMenu').onclick=()=>menu.classList.remove('open');
document.querySelectorAll('.menu a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));

// Reveal on scroll
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Countdown
function tick(){const target=new Date(WEDDING.date).getTime();let d=Math.max(0,target-Date.now());const vals=[Math.floor(d/86400000),Math.floor(d/3600000)%24,Math.floor(d/60000)%60,Math.floor(d/1000)%60];document.querySelectorAll('#timer b').forEach((el,i)=>el.textContent=String(vals[i]).padStart(2,'0'));}tick();setInterval(tick,1000);

// RSVP demo — replace with a real form service later (Formspree, Google Forms, etc.)
document.getElementById('rsvpForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').textContent='Thank you! Your RSVP has been recorded for this demo.';e.target.reset();});

// Web Share
const shareBtn=document.getElementById('shareBtn');shareBtn.onclick=async()=>{try{if(navigator.share){await navigator.share({title:`${WEDDING.bride} & ${WEDDING.groom} — Wedding Invitation`,text:'You are invited to celebrate with us.',url:location.href})}else{await navigator.clipboard.writeText(location.href);shareBtn.textContent='Link copied ✓'}}catch(e){}};

// Music — add assets/wedding-song.mp3 to enable it
const audio=new Audio(WEDDING.music);audio.loop=true;let playing=false;document.getElementById('musicBtn').onclick=async()=>{try{if(!playing){await audio.play();playing=true;document.getElementById('musicBtn').textContent='Ⅱ'}else{audio.pause();playing=false;document.getElementById('musicBtn').textContent='♪'}}catch(e){alert('Add your music file at assets/wedding-song.mp3 first.')}};

// Loader
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('done'),800));
