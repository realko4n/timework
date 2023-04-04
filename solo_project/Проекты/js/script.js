let bok_panel1 = document.getElementById('project-bok-panel');
let button_project = document.getElementById("Project");
let drevo = document.getElementById('drevo');
let bok_panel2 = document.getElementById('groups-bok-panel');
let button_project2 = document.getElementById("Groups");
let bok_panel3 = document.getElementById('tasks-bok-panel');
let button_project3 = document.getElementById("Tasks");
let project1 = document.getElementById('path_drevo');

project1.onclick=function(){
    if (drevo.style.display=="block") {
        drevo.style.display="none";
    } else {
        drevo.style.display="block";
    };
}

button_project.onclick=function(){
    // bok_panel.style.display="block";
    bok_panel2.style.display="none";
    bok_panel3.style.display="none";
    if (bok_panel1.style.display=="block") {
        bok_panel1.style.display="none";
    } else {
        bok_panel1.style.display="block";
    };

    // if (drevo.style.display=="block") {
    //     drevo.style.display="none";
    // } else {
    //     drevo.style.display="block";
    // };

    
}



button_project2.onclick=function(){
    // bok_panel.style.display="block";
    bok_panel1.style.display="none";
    bok_panel3.style.display="none";
    drevo.style.display="none"
    if (bok_panel2.style.display=="block") {
        bok_panel2.style.display="none";
    } else {
        bok_panel2.style.display="block";
    };
}



button_project3.onclick=function(){
    // bok_panel.style.display="block";
    bok_panel2.style.display="none";
    bok_panel1.style.display="none";
    drevo.style.display="none"
    if (bok_panel3.style.display=="block") {
        bok_panel3.style.display="none";
    } else {
        bok_panel3.style.display="block";
    };
}








