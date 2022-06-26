//- You'll find a variable called data in the console.log. That's your list of dogs
//- Render the top list of dogs using the list item template you'll find on the HTML file
//- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
//- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
//- There should be only one card at the time on the screen
//- The card should have a button that toggles for the selected dog between good dog/ bad do//g
console.log(data);


function createDogItemList(dog) {

 let dogNameLi=document.createElement("li")
 dogNameLi.className="dogListName"
 dogNameLi.textContent=dog.name

let dogList=document.querySelector('.dogs-list')
dogList.append(dogNameLi)
console.log(dogList)
}


for(let dog of data){
    createDogItemList(dog) }

//let dogCard = document.querySelector('.main__dog-section')
//console.log(dogCard)

//function displayDog() {
  //  dogCard.textContent = ''
//}
