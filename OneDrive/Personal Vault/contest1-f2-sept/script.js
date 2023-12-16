const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(person =>{ 
    //take function with name person
    if(person.profession==="developer"){
      console.log(person);
    }
  });

}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age=parseInt(prompt("Enter age:"));
  const profession=prompt("Enter profession:");
  data.push({name,age,profession});

}

// 3. Remove Admins
function removeAdmin() {
  data=data.filter(person =>person.profession !=="admin");
}

// 4. Concatenate Array
function concatenateArray() {
  const arr=[
    { name: "Mirha", age: 25, profession: "designer" },
  { name: "Tazeen", age: 23, profession: "software engg" },

  ];
  const combinedArray=data.concat(arr);
  console.log(combinedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((acc, person) => acc + person.age, 0);//initial value is 0 of accumulator
  const avgAge = totalAge / data.length;
  console.log("Average age:", avgAge);
}


// 6. Age Check
function checkAgeAbove25() {
  let isAbove25=false;
  for(let i=0; i<data.length; i++){
    if (data[i].age>25) {
      isAbove25=true;
      break;//if found, exit loop
    }
  }
  console.log("Is there anyone above 25 ?", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = new Set(data.map(person => person.profession));
  console.log("Unique professions:", Array.from(professions));
}



// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);//increasing order
  console.log("Sorted by age:", data);
}



// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(person => person.name === "john");
  if (john) {
    john.profession = "manager";
    console.log("John's profession updated:", john);
  }

}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === "developer").length;
  const adminCount = data.filter(person => person.profession === "admin").length;
  console.log(Developers: ${developerCount}, Admins: ${adminCount});

}
