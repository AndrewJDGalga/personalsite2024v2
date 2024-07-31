import { getCSVAsString, convertStringToArray } from "./util.js";
const btnsSkills = document.getElementsByClassName('skills_button');
function revealFollowing(e) { e.target.nextElementSibling.classList.toggle('hidden'); }
for(let i = 0; i < btnsSkills.length; i++) btnsSkills[i].onclick = revealFollowing;

const projectsHook = document.getElementById('projects_hook');
const projectsCSVName = 'projects.csv';

const contentString = await getCSVAsString(projectsCSVName);

const portfolioObject = (header, contentArray) => {
    console.log(header);
    console.log(contentArray);
}

if(contentString !== ''){
    //console.log(convertStringToArray(contentString));
    const contentsArray = convertStringToArray(contentString);
    const bodyArray = contentsArray.slice(1);
    const contentFrag = document.createDocumentFragment();
    contentsArray[0].forEach((header, index) => { contentFrag.append(portfolioObject(header, bodyArray[index])); });
}