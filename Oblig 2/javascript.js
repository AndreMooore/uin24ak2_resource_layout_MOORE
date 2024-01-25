let infoHTML = {};
let navbar = ""



resources.map(info => {
    let sourcesHTML = "";
  
  info.sources.map(source => {
    sourcesHTML += `<li><a href="${source.url}">${source.title}</a></li>`;
  });
  infoHTML[info.category] = "";
  infoHTML[info.category] += `<div><h1>${info.category}</h1>
<p>${info.text}</p>
<ul>${sourcesHTML}</ul></div>`;
navbar += `<button id="${info.category}" class="nav-button">${info.category}</button>`
console.log(infoHTML)
});



document.getElementById("navbar").innerHTML = navbar;
document.getElementById("content").innerHTML = infoHTML[resources[0].category];

document.querySelector(".nav-button").classList.add("active");
document.querySelectorAll(".nav-button").forEach(button => {
    button.addEventListener("click", function() {
      document.getElementById("content").innerHTML = infoHTML[this.id];
      document.querySelector(".nav-button.active").classList.remove("active");
      this.classList.add("active")
    });
  });
