export class pdSticker extends HTMLElement {
  static get observedAttributes() {
    return ['direction', 'search-for'];
  }
  constructor() {
    super();
    this.sRoot = this.attachShadow({
      mode: 'closed'
    });
    let direction = this.getAttribute("direction");
    let searchFor = this.getAttribute("search-for");
    this.direction = !this.isEmpty(direction) ? direction : 'left';
    this.searchFor = !this.isEmpty(searchFor) ? searchFor : 'article';
	this.stickers = [];
  }

  addIndicator(button, div) {
    let regex = /pd-indicator-/g;
    if (regex.test(button)) {
      let type = button.replace("pd-indicator-", "");
      if (['moon', 'yin-yang', 'pointer', 'rectangle', 'circle', 'pacman', 'octastar', 'infinity', 'heart', 'switch', 'donut'].includes(type)) {
		if (!window.customElements.get('pd-indicator')) {
			let indicator = new pdIndicator();
			indicator.setAttribute('type', type);
			div.appendChild(indicator);
		}
      }
    }
  }
  changeDirection() {
    let self = this;
	let initialOffsetLeft = Math.max(document.querySelector(self.searchFor).parentElement.offsetLeft,document.querySelector(self.searchFor).offsetParent.offsetLeft);
    let items = document.querySelectorAll(self.searchFor);
	self.sRoot.querySelectorAll("div.sticker").forEach((sticker, index) => {
		if (self.direction == 'right') {
		sticker.style.left = (100*(window.innerWidth - (items[index].offsetLeft + initialOffsetLeft)) / window.innerWidth) + '%';
		} else {
		sticker.style.left = (100*(initialOffsetLeft - 2*items[index].offsetLeft)/window.outerWidth) + '%';
		}	  
	});
  }
 
  
  init() {
    let self = this;
	let initialOffsetTop = 2*Math.max(document.querySelector(self.searchFor).parentElement.offsetTop,document.querySelector(self.searchFor).offsetParent.offsetTop);
	let initialOffsetLeft = Math.max(document.querySelector(self.searchFor).parentElement.offsetLeft,document.querySelector(self.searchFor).offsetParent.offsetLeft);
	if(self.isEmpty(initialOffsetTop)) {
	    initialOffsetTop = 0;
	}
	if(self.isEmpty(initialOffsetLeft)) {
	    initialOffsetLeft = 0;
	}
	window.scrollTo(initialOffsetTop,400);
    let scroll_distance = [];
	if (!self.isEmpty(self.sRoot.querySelector("style"))) {
        self.sRoot.querySelector("style").remove();
    }
    if (!self.isEmpty(self.sRoot.querySelector("div.sticker"))) {
        self.sRoot.querySelectorAll("div.sticker").forEach(item => item.remove());
    }
	if (self.isEmpty(self.sRoot.querySelector("style"))) {
		let style = document.createElement("style");
		style.innerHTML = "pd-indicator, a, button { cursor: pointer; } .sticker img { padding-left: 1.4rem; } .sticker img, .sticker video { width: 3rem; height: auto; } .sticker { font-size: 2vmin; } .note { text-decoration: none; background: #ffc; box-shadow: .375rem .375rem .5rem rgba(33,33,33,.7); } .note.rotatedLeft { transform: rotate(-6deg); } .note.rotatedRight { transform: rotate(6deg); } .speech-bubble-left, .speech-bubble-right { backdrop-filter: blur(0.25rem); background: rgba(4, 17, 32, 1); box-shadow: .375rem .375rem .5rem rgba(33,33,33,.7); border-radius: .5rem } .speech-bubble-left:before { content: \"\"; position: absolute; right: 100%; top: 1.5rem; width: 0; height: 0; border-top: .5rem solid transparent; border-right: 1rem solid rgba(4, 17, 32, 1); border-bottom: .5rem solid transparent; }  .speech-bubble-right:after { content: \"\"; position: absolute; left: 100%; top: 1.5rem; width: 0; height: 0; border-top: .5rem solid transparent; border-left: 1rem solid rgba(4, 17, 32, 1); border-bottom: .5rem solid transparent; }.speech-bubble-left, .speech-bubble-left *, .speech-bubble-right, .speech-bubble-right * { color: #ffffff; } .black-box { color: #ffffff; padding: .125rem; list-style: none; box-shadow: .375rem .375rem .5rem rgba(33,33,33,.7); background: rgba(4, 18, 27, 0.88); border-radius: .25rem; } .speech-bubble-left, .speech-bubble-right, .black-box { padding: 0.5rem; }";
		self.sRoot.appendChild(style);
	}
    document.querySelectorAll(self.searchFor).forEach((item, index) => { 
	  let id = !self.isEmpty(item.id) ? item.id : index ;
      let div = document.createElement("div");
      div.id = "sticker-" + id;
      div.classList.add("sticker");
      div.style.marginTop = 0;
      div.style.maxWidth = '8rem';
	  div.style.width = 'auto';
      div.style.minHeight = '5rem';
	  div.style.height = 'auto';
	  div.style.display = 'flex';
	  div.style.textAlign = 'center';
	  div.style.flexDirection = 'column';
	  div.style.alignItems = 'center';
	  div.style.alignContent = 'center';
	  div.style.justifyContent = 'center';
      if (item.title) {
        let regex = /(<([^>]+)>)/ig;
        item.title = item.title.replace(regex, "");
        if (item.dataset.link) {
          div.innerHTML = '<a href="' + item.dataset.link + '">' + item.title + '</a>';
        } else {
          div.innerHTML = item.title;
        }
      }
      if (item.dataset.img) {
        if (item.dataset.link) {
          div.innerHTML = '<a href="' + item.dataset.link + '"><img src="' + item.dataset.img + '"/></a>';
        } else {
          div.innerHTML = '<img src="' + item.dataset.img + '"/>';
        }
      }
      if (item.dataset.button) {
        let buttons = item.dataset.button;
        if (item.dataset.button.indexOf(",") !== -1) {
          buttons = item.dataset.button.split(",").filter((word) => {
            return word.length > 0;
			});
        }
        if (Array.isArray(buttons)) {
          buttons.forEach((button) => {
            self.addIndicator(button, div);
          })
        } else {
          self.addIndicator(buttons, div);
        }
      }
      div.style.position = "absolute";
	  div.style.top = (initialOffsetTop/ 16) + 'rem';
      if (self.direction == 'right') {
		div.style.left = (100*(window.innerWidth - (item.offsetLeft + initialOffsetLeft)) / window.innerWidth) + '%';
      } else {
		div.style.left = (100*(initialOffsetLeft - 2*item.offsetLeft)/window.outerWidth) + '%';
      }
	  let slot = document.createElement("slot");
	  slot.name = "sticker-"+index;
	  div.append(slot);
      self.sRoot.append(div);
      let sticker = self.sRoot.querySelector("#sticker-" + id);
      scroll_distance[index] = item.offsetHeight - sticker.offsetHeight;
	  console.log(scroll_distance[index],initialOffsetTop,initialOffsetLeft,item.offsetLeft);
      if (!self.isEmpty(item.hasChildNodes())) {
        let children = item.childNodes;		
        if (children.length > 1) {
          for (let i = 0; i < children.length; i++) {
            if (!self.isEmpty(children[i].tagName)) {
              children[i].addEventListener("load", (e) => {
                scroll_distance[index] += !self.isEmpty(children[i].clientHeight) ? children[i].clientHeight - sticker.clientHeight : 0;
                self.duringScroll(sticker, item, scroll_distance[index], initialOffsetTop);
              });
            }
          }
		  self.duringScroll(sticker, item, scroll_distance[index], initialOffsetTop);
        } else {
          self.duringScroll(sticker, item, scroll_distance[index], initialOffsetTop);
        }
      } else {
        self.duringScroll(sticker, item, scroll_distance[index], initialOffsetTop);
      }
    });
  }
  duringScroll(sticker, item, scroll_distance, initialOffsetTop = 0) {
	let scroll = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 72)
    };
    window.addEventListener("scroll", () => { 
      scroll(() => {
        if (document.documentElement.scrollTop >= (item.offsetTop + initialOffsetTop) && document.documentElement.scrollTop <= (item.offsetTop + scroll_distance + initialOffsetTop)) {
          sticker.style.position = 'fixed';
		  sticker.style.top = '0.5rem';
        } else {
          sticker.style.position = 'absolute';
          if (document.documentElement.scrollTop > (item.offsetTop + initialOffsetTop)) {
		    sticker.style.top = ((item.offsetTop + initialOffsetTop + scroll_distance) / 16) + 'rem';
          } else {
		    sticker.style.top = ((item.offsetTop + initialOffsetTop) / 16) + 'rem';
          }
        }
      });
    });
  }
  isEmpty(value) {
    switch (true) {
      case (value == null || value == undefined):
        return true;
      case (Array.isArray(value)):
        return value.length == 0;
      case (typeof value == 'object'):
        return (Object.keys(value).length === 0 && value.constructor === Object);
      case (typeof value == 'string'):
        return value.length == 0;
      case (typeof value == 'number' && !isNaN(value)):
        return value == 0;
      case (!value):
        return true;
      default:
        return false;
    }
  }
  connectedCallback() {
    let direction = this.getAttribute("direction");
    let searchFor = this.getAttribute("search-for");
    this.direction = !this.isEmpty(direction) ? direction : 'left';
    this.searchFor = !this.isEmpty(searchFor) ? searchFor : 'article'; 
	this.init();
	window.onresize = () =>	{
		this.changeDirection(); 
	}
  }
  disconnectedCallback() {
    console.log('Disconnected.');
  }
  adoptedCallback() {
    console.log('Adopted.');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "direction") {
      let direction = this.getAttribute("direction");
      this.direction = !this.isEmpty(direction) ? direction : 'left';
	  this.changeDirection();
    }
    if (name == "search-for") {
	  let searchFor = this.getAttribute("search-for");
      this.searchFor = !this.isEmpty(searchFor) ? searchFor : 'article';
    }
  }
}

if (!window.customElements.get('pd-sticker')) {
  window.pdSticker = pdSticker;
  window.customElements.define("pd-sticker", pdSticker);
}
