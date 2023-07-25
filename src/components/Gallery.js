export default class Gallery{
  gallery; #lButton;#rButton;imagesBlock;
  constructor(elementId) {
    this.gallery = document.querySelector(elementId);
    this.imagesBlock = this.gallery.querySelector('.gallery__images');
    this.#lButton = this.gallery.querySelector('.gallery__button_left');
    this.#rButton = this.gallery.querySelector('.gallery__button_right');
    this.#addEventListeners();
  }

  onLClick(){
    this.imagesBlock.scrollBy(-1000,0);
  }

  onRClick(){
    this.imagesBlock.scrollBy(1000,0);
  }

  #addEventListeners(){
    console.log(this.imagesBlock);
    this.#lButton.onclick = ()=>{this.onLClick()};
    this.#rButton.onclick = ()=>{this.onRClick()};

  }
}