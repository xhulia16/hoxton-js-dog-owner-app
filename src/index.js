//- You'll find a variable called data in the console.log. That's your list of dogs
//- Render the top list of dogs using the list item template you'll find on the HTML file
//- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
//- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
//- There should be only one card at the time on the screen
//- The card should have a button that toggles for the selected dog between good dog/ bad do//g
console.log(data);

function createDogItemList(dog) {

    let dogNameLi = document.createElement("li")
    dogNameLi.className = "dogs-list__button"
    dogNameLi.textContent = dog.name
    dogNameLi.addEventListener("click", function () {
        displayDog(dog)
    })

    let dogList = document.querySelector('.dogs-list')
    dogList.append(dogNameLi)
    console.log(dogList)

}


for (let dog of data) {
    createDogItemList(dog)
}
//<h2>Mr. Bonkers</h2>
//       <img
//         src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
// //         alt=""
//      />
//<div class="main__dog-section__desc">
//         <h3>Bio</h3>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//           minima voluptates libero cumque rerum consequatur optio aliquid sint
//           eum maxime illo laborum omnis quo ab rem cupiditate nulla
//           perspiciatis ipsum!
//        </p>
//      </div>
//      <p><em>Is naughty?</em> yes!</p>
//      <button class="main__dog-section__btn">Good dog!</button>
//
let dogCard = document.querySelector('.main__dog-section')
console.log(dogCard)

function displayDog(dog) {
    dogCard.textContent = ''

    let nameH2 = document.createElement("h2")
    nameH2.textContent = dog.name

    let dogImg = document.createElement("img")
    dogImg.src = dog.image

    let dogP = document.createElement("p")
    dogP.textContent = dog.bio

    let dogBehaviourP = document.createElement("p")
    dogBehaviourP.textContent = dog.isGoodDog


    let dogMainCard = document.querySelector('.main__dog-section')
    dogMainCard.append(nameH2, dogImg, dogP, dogBehaviourP)
    console.log(dogMainCard)
}

//document.getElementById("myBtn").addEventListener("click", displayDog);