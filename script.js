import { getCSVAsString, convertStringToArray } from "./util.js";
const btnsSkills = document.getElementsByClassName('skills_button');
function revealFollowing(e) { e.target.nextElementSibling.classList.toggle('hidden'); }
for(let i = 0; i < btnsSkills.length; i++) btnsSkills[i].onclick = revealFollowing;

const projectsHook = document.getElementById('projects_hook');
const projectsCSVName = 'projects.csv';

const contentString = await getCSVAsString(projectsCSVName);

if(contentString !== ''){
    const contentsArray = convertStringToArray(contentString);
    const bodyArray = contentsArray.slice(1);
    const contentFrag = document.createDocumentFragment();

    for(let i = 0; i < bodyArray.length; i++) { 
        contentFrag.append(buildPortfolio(bodyArray[i])); 
    }
    projectsHook.appendChild(contentFrag);
}

function buildPortfolio(contentArray) {
    const title = document.createElement('h2');
    title.textContent = contentArray[0];

    const img = document.createElement('img');
    img.src = `imgs/${contentArray[1]}`;
    img.alt = contentArray[2];

    const projectLink = document.createElement('a');
    projectLink.href = contentArray[3];
    projectLink.textContent = contentArray[4];

    const projectDescription = document.createElement('p');
    projectDescription.textContent = contentArray[5];
    
    const container = document.createElement('article');
    container.append(title, img, projectDescription, projectLink);

    return container;
}
