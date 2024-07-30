import { getCSVAsString, convertStringToArray } from "./util.js";
const btnsSkills = document.getElementsByClassName('skills_button');
function revealFollowing(e) { e.target.nextElementSibling.classList.toggle('hidden'); }
for(let i = 0; i < btnsSkills.length; i++) btnsSkills[i].onclick = revealFollowing;

const projectsHook = document.getElementById('projects_hook');
const projectsCSVName = 'projects.csv';

const contentString = await getCSVAsString(projectsCSVName);

if(contentString !== ''){
    console.log(convertStringToArray(contentString));
}