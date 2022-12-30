import myJson from './MOCK_DATA.json' assert {type: 'json'};

// const data = eval("(" + myJson + ")")

// console.log(data);

let inputVal = document.getElementById("search-box");
let searchbtn = document.getElementById("search-btn");
let sortInc = document.getElementById("sortInc");
let sortDec = document.getElementById("sortDec");
let sortMarks = document.getElementById("sortMarks");
let sortPassing = document.getElementById("sortPassing");
let sortGender = document.getElementById("sortGender");
let sortClass = document.getElementById("sortClass");
let students = document.getElementById("students");



function loadData() {
    students.innerHTML = "";
    myJson.map((item) => {
        let lstudent = document.createElement("tr")
        lstudent.innerHTML = `
            <td>${item.id}</td>
            <td><img src = "${item.img_src}" height="40" width = "40"> ${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passed" : "Failed"}</td>
            <td>${item.email}</td>`
        students.append(lstudent);
    })
}
loadData(myJson);

searchbtn.addEventListener("click", search);

sortInc.addEventListener("click", IncreasingSort);
sortDec.addEventListener("click", DecreasingSort);
sortMarks.addEventListener("click", Marks);


sortClass.addEventListener("click", Classes);

// sortGender.addEventListener("click", Gender);

sortPassing.addEventListener("click", PassingSt);


function IncreasingSort() {
    let increasing = myJson.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        else if (a.first_name > b.first_name) return 1;
        else return 0;
    })
loadData(increasing);
}

function DecreasingSort() {
    let Decreasing = myJson.sort((a, b) => {
        if (a.first_name  < b.first_name ) return 1;
        else if (a.first_name  > b.first_name ) return -1;
        else return 0;
    })
loadData(Decreasing);
}

function Marks() {
    let mark = myJson.sort((a, b) => {
        if (a.marks < b.marks) return -1;
        else if (a.marks > b.marks) return 1;
        else return 0;
    })
loadData(mark);
}

function Classes() {
    let classSort = myJson.sort((a, b) => {
        if (a.class < b.class) return -1;
        else if (a.class > b.class) return 1;
        else return 0;
    })
loadData(classSort);
}

function PassingSt() {
    let pass = myJson.filter((item) => {
        if (item.passing =="true") {
            return item.passing ? "Passed" : "Failed";

        } 

    })
    loadData(pass);
}
// orders.sort((x, y) => {
//     if (x === y) return 0;
//     if (x) return -1;
//     return 1;
//  });
// function Gender() {

//     let gen = myJson.filter((item) => {
//         if (item.gender == "Male") {
//         }
//     })
// }

function search() {
    let s = inputVal.value;
    let matchedName = myJson.filter((item) => {
        return item.first_name.toLowerCase().includes(s.toLowerCase());
    })
    console.log(matchedName);
    loadData(matchedName);
}