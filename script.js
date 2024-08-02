import { getCSVAsString, convertStringToArray } from "./util.js";
const btnsSkills = document.getElementsByClassName('skills_button');
function revealFollowing(e) { e.target.nextElementSibling.classList.toggle('hidden'); }
for(let i = 0; i < btnsSkills.length; i++) btnsSkills[i].onclick = revealFollowing;

const projectsHook = document.getElementById('projects_hook');
const projectsCSVName = 'projects.csv';

const contentString = await getCSVAsString(projectsCSVName);

function portfolioObject(contentArray) {
    console.log(contentArray);

    const container = document.createElement('article');

    const title = document.createElement('h2');
    title.textContent = contentArray[0];

    const img = document.createElement('img');
    img.src = `imgs/${contentArray[1]}`;
    img.alt = contentArray[2];

    const projectLink = document.createElement('a');
    projectLink.href = contentArray[3];

    const projectDescription = document.createElement('p');
    projectDescription.textContent = contentArray[4];

    container.append(title, img, projectDescription, projectLink);

    return container;
}

if(contentString !== ''){
    const contentsArray = convertStringToArray(contentString);
    //const bodyArray = contentsArray.slice(1);
    //const contentFrag = document.createDocumentFragment();

    //contentsArray[0].forEach((header, index) => { contentFrag.append(portfolioObject(header, bodyArray[index])); });
    //for(let i = 0; i < contentsArray[0].length; i++) { contentFrag.append(portfolioObject(bodyArray[i])); }

    //projectsHook.appendChild(contentFrag);
}