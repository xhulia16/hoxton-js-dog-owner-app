//- You'll find a variable called data in the console.log. That's your list of dogs
//- Render the top list of dogs using the list item template you'll find on the HTML file
//- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
//- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
//- There should be only one card at the time on the screen
//- The card should have a button that toggles for the selected dog between good dog/ bad do//g
console.log(data);

//// WRITE YOUR CODE BELOW!
//function createDogNames(dog){

//    let dogNameLi1 = document.createElement("li")
//    dogNameLi1.textContent = `${data[0].name}`
//    dogNameLi1.className="dogName"

//    let dogNameLi2 = document.createElement("li")
//   dogNameLi2.textContent = `${data[1].name}`
//   dogNameLi2.className="dogName"

//    let dogNameLi3 = document.createElement("li")
//    dogNameLi3.textContent = `${data[2].name}`
//    dogNameLi3.className="dogName"//

//    let dogNameLi4 = document.createElement("li")
//    dogNameLi4.textContent = `${data[3].name}`
//    dogNameLi4.className="dogName"

//    let dogsListUl = document.querySelector(".dogs-list")
//    dogsListUl.append(dogNameLi1, dogNameLi2, dogNameLi3, dogNameLi4)
//}

//createDogNames() 

let dogList = document.querySelector('.dogs-list')
//console.log(dogList)

let dogCard= document.querySelector('.main__dog-section')
console.log(dogCard)

function createDogItemList(dog){
}

function displayDog(){
    dogCard.textContent=''
}
//displayDog()