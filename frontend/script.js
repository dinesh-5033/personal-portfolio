const API_URL = "http://localhost:5000/api/projects";

async function loadProjects(){

    try{

        const response = await fetch(API_URL);

        const projects = await response.json();

        const container = document.getElementById("project-list");

        container.innerHTML = "";

        projects.forEach(project=>{

            container.innerHTML += `

            <div class="project-card">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p><strong>Technology:</strong> ${project.technology}</p>

                <a href="${project.github}" target="_blank">
                    GitHub
                </a>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}
const form=document.getElementById("contactForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

const response=await fetch("http://localhost:5000/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
email,
message

})

});

const data=await response.json();

alert(data.message);

form.reset();

});
loadProjects();