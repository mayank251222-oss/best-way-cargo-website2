const menu=document.querySelector('.menu'), nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function sendWhatsApp(e){
  e.preventDefault();
  const n=document.getElementById('name').value.trim();
  const m=document.getElementById('message').value.trim();
  const text=`Hello Best Way Cargo & Clearance LLC,\n\nName: ${n}\nRequirement: ${m}\n\nPlease share the available freight solution and quotation.`;
  window.open('https://wa.me/971524360811?text='+encodeURIComponent(text),'_blank');
  return false;
}
