# pd-sticker

A custom web component that can be used in web applications or websites. It provides a set of side-sticker elements that have a fixed position during scroll. Ideal for multi text content such as news articles since it can create side-stickers holding text, images or video, buttons and links.
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/pd-sticker)

[Demo page (by unpkg.com)](https://unpkg.com/pd-sticker@1.0.5/pd-sticker.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

`node.js`

### Installing

`$ npm install pd-sticker`

## Running the tests

`npm test`

### Tests output explanation

#### pd-sticker

_**stickers**_

_✓ Checks that stickers is an empty object upon initialization._

_**direction**_

_✓ Checks that direction has default value._

_**searchFor**_

_✓ Checks that searchFor attribute has default value "article"._

_**sRoot**_

_✓ Checks that component is attached to DOM and is equal to <pd-sticker>_

_**sRoot**_

_✓ Checks that component is attached to DOM and has empty innerHTML_

##### Array

_**indexOf()**_

_✓ should return -1 when the value is not present. This is a demo test to check that the response from the testing framework is ok._


## Deployment

Add the custom element tag to your HTML page. 

The element's parameters are:

 - **direction** (string - default `left`). Set the direction of the sticker(s) column, has to be one of `left`, `right`. 
 - **searchFor** (string - default `article`). Set the element that `pd-sticker` will be applied at. You can set an element name of a `class` or `id` e.g. `.main`, `#main`.

**Basic Usage**

***Example CSS***

    html, body {
		height: 100%;
		overflow: hidden;
		-webkit-perspective: 37.5rem;
		-moz-perspective: 37.5rem;
		perspective: 37.5rem;
	}
	:host {
		display: block;
	}
	div {
	    width: auto;
	    max-width: 7rem;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    align-content: center;
	    padding: .5rem 0;
	}
	pd-sticker:not(:defined) {
	    display: none;
	}
	pd-sticker,
	pd-sticker:defined {
	    display: block;
	}

***Example HTML***

	<div class="main" title="solo example">
		<article title="My title" id="mytitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. </article>
		<article title="<p>go for it</p>My next title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. </article>
		<article data-img="https://picsum.photos/248/248"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article data-img="https://picsum.photos/48/48"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article title="another title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article data-button="pd-indicator-switch,pd-indicator-heart,pd-indicator-circle,pd-indicator-octastar,pd-indicator-yin-yang" title="some buttons"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article data-link="https://google.gr" data-img="https://picsum.photos/48/48"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article title="next article has no title"> <img src="https://picsum.photos/248/188" />
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
		</article>
		<article title="a link to google" data-link="https://google.gr"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
		<article title="last title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis in lorem lobortis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum velit, ut consequat odio. Curabitur non erat velit. Pellentesque dolor libero, auctor id scelerisque nec, sollicitudin quis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut venenatis risus eu ligula aliquam, quis vestibulum nisi rhoncus. Morbi condimentum consectetur libero sit amet semper. Suspendisse potenti. Fusce pellentesque massa sed felis consectetur aliquam. Vestibulum dolor mi, mattis gravida iaculis nec, volutpat sit amet odio. Cras auctor mauris nibh, et vestibulum velit placerat at. Sed non lacus at sapien euismod sollicitudin. Cras accumsan condimentum gravida. Integer eget sagittis ligula. Cras ullamcorper interdum augue, non blandit augue rutrum in. Donec varius dolor magna, sollicitudin scelerisque odio tempor at. Suspendisse potenti. Donec in sollicitudin lorem, eu laoreet diam. Aenean non tincidunt risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa quis sem mollis lacinia at nec mi. Nunc vulputate orci sed tincidunt mattis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </article>
	</div>
	<pd-sticker direction="left" search-for="article">
		<span slot="sticker-0">a regular button <button>Toggle Stickers' Direction</button></span>
		<span slot="sticker-9">
		<video controls autoplay width="140" height="80" poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
		   <source src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" type="video/mp4">
		  <source src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/ogg">
		  <source src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/avi">
		  <p>Your browser doesn't support HTML5 video.</p>
		</video>
		</span>
		<span slot="sticker-4"><ol style="text-align: left"><li>one</li><li>two</li><li>three</li></ol></span>
	</pd-sticker>

You can change the element's attributes/appearance by using Javascript, for example:

	customElements.whenDefined('pd-sticker').then(() => {
		document.querySelector("pd-sticker").sRoot.querySelectorAll("pd-indicator").forEach((sticker) => {
			sticker.addEventListener("click", (e) => {
				alert(e.target.type);
			});
		});
		document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.add('note');
		document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.add('rotatedRight');
		document.querySelector("pd-sticker").sRoot.getElementById("sticker-8").classList.add('speech-bubble-right');
		document.querySelector("pd-sticker").sRoot.getElementById("sticker-4").classList.add('black-box');

		document.querySelector("pd-sticker").querySelector("button").addEventListener("click", (e) => {
			let direction = document.querySelector("pd-sticker").getAttribute("direction")
			if(direction == 'left') {
				document.querySelector("pd-sticker").setAttribute("direction","right");
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.remove('rotatedRight');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.add('rotatedLeft');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-8").classList.remove('speech-bubble-right');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-8").classList.add('speech-bubble-left');
			} else {
				document.querySelector("pd-sticker").setAttribute("direction","left");
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.remove('rotatedLeft');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-1").classList.add('rotatedRight');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-8").classList.remove('speech-bubble-left');
				document.querySelector("pd-sticker").sRoot.getElementById("sticker-8").classList.add('speech-bubble-right');				
			}
		});
	});

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😁

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details