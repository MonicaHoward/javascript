/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

// this will be where dynamically created elements are injected
const inject = document.querySelector("div")

// this is where elements are created. Of course they will be empty by default
let centerEl = document.createElement("center")
let h1TitleEl = document.createElement("h1")
let h2TitleEl = document.createElement("h2")
let hrefLink1 = document.createElement("a")
let italicEl = document.createElement("i")
let hr1El = document.createElement("hr")
let p1El = document.createElement("p")
let olEl = document.createElement("ol")
let li1El = document.createElement("li")
let li2El = document.createElement("li")
let li3El = document.createElement("li")
let hr2El = document.createElement("hr")
// let hrefLink2 = document.createElement("a")
let p2El = document.createElement("p")
let h1TextEl = document.createElement("h1")
let p3El = document.createElement("p")


// this is were content will be added to the elements
h1TitleEl.innerHTML = `<i>HTML Practice Exercise TEKcamp.</i>`
hrefLink1.setAttribute("href", "https://teksystems.com")
hrefLink1.innerHTML = `TEKsystems "TEKcamp"`;
p1El.innerHTML = `I love <i>HTML</i> for the following reasons:`
li1El.textContent = `I learned it quickly.`
li2El.textContent = `I can make web pages using code`
li3El.textContent = `It’s fun.`
// hrefLink2.setAttribute("href", "mailto:ayunas@teksystems.com")
// hrefLink2.innerHTML = `ayunas@teksystems.com.`;
p2El.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>`
h1TextEl.textContent = `Have a great day!`
p3El.textContent = `I really look forward to learning how to code! Have a great day. -[Team "Git'er Done"]`

// intermediate step
let h2Link = h2TitleEl.innerHTML =( hrefLink1)

// this is where everything will be added to the DOM
inject.appendChild(centerEl)
centerEl.appendChild(h1TitleEl)
centerEl.appendChild(h2Link)
inject.appendChild(hr1El);
inject.appendChild(p1El);
inject.appendChild(olEl);
olEl.appendChild(li1El)
olEl.appendChild(li2El)
olEl.appendChild(li3El)
inject.appendChild(hr2El)
inject.appendChild(p2El)
inject.appendChild(h1TextEl)
inject.appendChild(p3El)



// checking the HTML tree in the console

console.log(inject)