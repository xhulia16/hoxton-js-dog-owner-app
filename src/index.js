console.log(data);

// WRITE YOUR CODE BELOW!
function createDogNames(dog){

    let dogNameLi1 = document.createElement("li")
    dogNameLi1.textContent = `${data[0].name}`
    dogNameLi1.className="dogName"

    let dogNameLi2 = document.createElement("li")
    dogNameLi2.textContent = `${data[1].name}`
    dogNameLi2.className="dogName"

    let dogNameLi3 = document.createElement("li")
    dogNameLi3.textContent = `${data[2].name}`
    dogNameLi3.className="dogName"

    let dogNameLi4 = document.createElement("li")
    dogNameLi4.textContent = `${data[3].name}`
    dogNameLi4.className="dogName"

    let dogsListUl = document.querySelector(".dogs-list")
    dogsListUl.append(dogNameLi1, dogNameLi2, dogNameLi3, dogNameLi4)
}


createDogNames() 