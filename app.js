const body = document.body;

const URL = `https://api.le-systeme-solaire.net/rest/bodies/`;


//search bar
const $input = $("input[class='search']");
const $userForm = $("#user")

$userForm.submit((event) => {
  event.preventDefault();
  const userInput = $input.val();
  const URL2 = `https://api.le-systeme-solaire.net/rest.php/bodies/${userInput}`;
  console.log(URL2);
  $.get(URL2, (data) => {
    console.log(data);
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.englishName} <br> Name: ${data.name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.mass.massValue}×10^x Kilograms <br>
                Gravity: ${data.gravity} M/sec <br>
                Escape Velocity: ${data.escape} KM/sec<br>
                Radius: ${data.meanRadius} <br>
                Year length (days): ${data.sideralOrbit} <br>
                Day length (hours): ${data.sideralRotation} <br>
                Average Temperature (kelvin): ${data.avgTemp} <br>
                Axial Tilt: ${data.axialTilt}`;
  });
});
//planets
const sun = document.querySelector("#sun");
const earth = document.querySelector("#earth");
const merc = document.querySelector("#merc");
const venus = document.querySelector("#venus");
const mars = document.querySelector("#mars")
const jupiter = document.querySelector("#jupiter")
const saturn = document.querySelector("#saturn")
const uranus = document.querySelector("#uranus")
const neptune = document.querySelector("#neptune")
const pluto = document.querySelector("#pluto")

//create divs
    //container
    const container = document.createElement("div")
    container.classList.add("container")

    //header
    const cardTitle = document.createElement("div")
    cardTitle.classList.add("planetCard-top")
    container.appendChild(cardTitle)
    //body
    const cardBody = document.createElement("div")
    cardBody.classList.add("planetCard-body")
    container.appendChild(cardBody)
    //button
    const button = document.createElement("button");
    button.setAttribute('id', 'button')
    button.innerHTML = "&times"

$.get(URL, (data) => {
  
  earth.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[243].englishName} <br> Name: ${data.bodies[243].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[243].mass.massValue}×10^24 Kilograms <br>
        Gravity: ${data.bodies[243].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[243].escape} KM/sec<br>
        Radius: ${data.bodies[243].meanRadius} <br>
        Year length (days): ${data.bodies[243].sideralOrbit} <br>
        Day length (hours): ${data.bodies[243].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[243].avgTemp} <br>
        Axial Tilt: ${data.bodies[243].axialTilt}`;
  });

  merc.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[240].englishName} <br> Name: ${data.bodies[240].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[240].mass.massValue}×10^23 Kilograms <br>
        Gravity: ${data.bodies[240].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[240].escape} KM/sec<br>
        Radius: ${data.bodies[240].meanRadius} <br>
        Year length (days): ${data.bodies[240].sideralOrbit} <br>
        Day length (hours): ${data.bodies[240].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[240].avgTemp} <br>
        Axial Tilt: ${data.bodies[240].axialTilt}`;
  });

  sun.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[242].englishName} <br> Name: ${data.bodies[242].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[242].mass.massValue}×10^30 Kilograms <br>
        Gravity: ${data.bodies[242].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[242].escape} KM/sec<br>
        Radius: ${data.bodies[242].meanRadius} <br>
        Year length (days): ${data.bodies[242].sideralOrbit} <br>
        Day length (hours): ${data.bodies[242].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[242].avgTemp} <br>
        Axial Tilt: ${data.bodies[242].axialTilt}`;
    
  });

  venus.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[244].englishName} <br> Name: ${data.bodies[244].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[244].mass.massValue}×10^24 Kilograms <br>
        Gravity: ${data.bodies[244].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[244].escape} KM/sec<br>
        Radius: ${data.bodies[244].meanRadius} <br>
        Year length (days): ${data.bodies[244].sideralOrbit} <br>
        Day length (hours): ${data.bodies[244].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[244].avgTemp} <br>
        Axial Tilt: ${data.bodies[244].axialTilt}`;
  });

  mars.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[239].englishName} <br> Name: ${data.bodies[239].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[239].mass.massValue}×10^23 Kilograms <br>
        Gravity: ${data.bodies[239].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[239].escape} KM/sec<br>
        Radius: ${data.bodies[239].meanRadius} <br>
        Year length (days): ${data.bodies[239].sideralOrbit} <br>
        Day length (hours): ${data.bodies[239].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[239].avgTemp} <br>
        Axial Tilt: ${data.bodies[239].axialTilt}`;        
  });

  saturn.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[241].englishName} <br> Name: ${data.bodies[241].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[241].mass.massValue}×10^26 Kilograms <br>
        Gravity: ${data.bodies[241].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[241].escape} KM/sec<br>
        Radius: ${data.bodies[241].meanRadius} <br>
        Year length (days): ${data.bodies[241].sideralOrbit} <br>
        Day length (hours): ${data.bodies[241].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[241].avgTemp} <br>
        Axial Tilt: ${data.bodies[241].axialTilt}`;        
  });

  jupiter.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[238].englishName} <br> Name: ${data.bodies[238].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[238].mass.massValue}×10^27 Kilograms <br>
        Gravity: ${data.bodies[238].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[238].escape} KM/sec<br>
        Radius: ${data.bodies[238].meanRadius} <br>
        Year length (days): ${data.bodies[238].sideralOrbit} <br>
        Day length (hours): ${data.bodies[238].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[238].avgTemp} <br>
        Axial Tilt: ${data.bodies[238].axialTilt}`;        
  });

  uranus.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[199].englishName} <br> Name: ${data.bodies[199].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[199].mass.massValue}×10^25 Kilograms <br>
        Gravity: ${data.bodies[199].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[199].escape} KM/sec<br>
        Radius: ${data.bodies[199].meanRadius} <br>
        Year length (days): ${data.bodies[199].sideralOrbit} <br>
        Day length (hours): ${data.bodies[199].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[199].avgTemp} <br>
        Axial Tilt: ${data.bodies[199].axialTilt}`;        
  });

  neptune.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[219].englishName} <br> Name: ${data.bodies[219].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[219].mass.massValue}×10^26 Kilograms <br>
        Gravity: ${data.bodies[219].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[219].escape} KM/sec<br>
        Radius: ${data.bodies[219].meanRadius} <br>
        Year length (days): ${data.bodies[219].sideralOrbit} <br>
        Day length (hours): ${data.bodies[219].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[219].avgTemp} <br>
        Axial Tilt: ${data.bodies[219].axialTilt}`;        
  });

  pluto.addEventListener("click", () => {
    body.append(container);
    cardTitle.innerHTML = `English Name: ${data.bodies[208].englishName} <br> Name: ${data.bodies[208].name}`;
    cardTitle.appendChild(button);
    cardBody.innerHTML = `Mass: ${data.bodies[208].mass.massValue}×10^22 Kilograms <br>
        Gravity: ${data.bodies[208].gravity} M/sec <br>
        Escape Velocity: ${data.bodies[208].escape} KM/sec<br>
        Radius: ${data.bodies[208].meanRadius} <br>
        Year length (days): ${data.bodies[208].sideralOrbit} <br>
        Day length (hours): ${data.bodies[208].sideralRotation} <br>
        Average Temperature (kelvin): ${data.bodies[208].avgTemp} <br>
        Axial Tilt: ${data.bodies[208].axialTilt}`;        
  });

});
//close button for popup
button.addEventListener("click", () => {            
    container.remove(".container")        
});


