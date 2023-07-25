import './index.css'
import reveal from "../components/Reveal";
import Gallery from "../components/Gallery";


window.addEventListener("scroll", reveal);
reveal();

new Gallery("#gallery-about");
new Gallery("#gallery-weekend");
new Gallery("#gallery-myata");
new Gallery("#gallery-full");
new Gallery("#gallery-sunrise");
new Gallery("#gallery-flowers");
new Gallery("#gallery-seminars");
new Gallery("#gallery-location");