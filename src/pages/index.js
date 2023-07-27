import './index.css'
import reveal from "../components/Reveal";
import Gallery from "../components/Gallery";


window.addEventListener("scroll", reveal);
reveal();

new Gallery("#gallery-about");
new Gallery("#gallery-weekend");
new Gallery("#gallery-full");
new Gallery("#gallery-myata");
new Gallery("#gallery-mimoza");
new Gallery("#gallery-flowers");
new Gallery("#gallery-sunrise");
new Gallery("#gallery-seminars");
new Gallery("#gallery-brazer");
new Gallery("#gallery-location");

const buttonHeader = document.querySelector('#header-button');
const mobileMenu = document.querySelector('.header__fixed-menu');

buttonHeader.onclick = () =>{
  mobileMenu.classList.toggle('header__fixed-menu_active');
}