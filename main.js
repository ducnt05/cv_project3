var lastUpdate = new Date();
var formatted = lastUpdate.toLocaleString("vi-VN");
alert("Website last updated: " + formatted);


const aboutBtn = document.getElementById("btn-about");
const skillBtn = document.getElementById("btn-skill");
const projectBtn = document.getElementById("btn-project");
const contactBtn = document.getElementById("btn-contact");

const sections = document.querySelectorAll(".section");

function hideAll() {
    sections.forEach(section => {
        section.style.display = "none";
    });
}

aboutBtn.onclick = function() {
    hideAll();
    document.getElementById("about").style.display = "block";
};

skillBtn.onclick = function() {
    hideAll();
    document.getElementById("skill").style.display = "block";
};

projectBtn.onclick = function() {
    hideAll();
    document.getElementById("project").style.display = "block";
};

contactBtn.onclick = function() {
    hideAll();
    document.getElementById("contact").style.display = "block";
};


