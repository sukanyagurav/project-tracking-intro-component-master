const btn=document.getElementById('menu-btn');
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay');
btn.addEventListener('click', navToggle)
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  if(!overlay.classList.contains('active')) {
  overlay.classList.add('active')
  }

}
overlay.addEventListener('click',function(){
  if(btn.classList.contains('open') && menu.classList.contains('flex')){
    btn.classList.remove('open')
    menu.classList.add('hidden')
    menu.classList.remove('flex')
    overlay.classList.remove('active')
  }
})