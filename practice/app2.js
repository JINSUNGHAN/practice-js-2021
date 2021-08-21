const h1 = document.querySelector(".hello:first-child h1");
// const title = document.getElementsByTagName("h1");
// const title = document.querySelectorAll(".hello h1");

// console.log(title);
console.dir(h1);

// title.innerText = "Hello"

// const title2 = document.getElementsByClassName("hello");

// console.log(title2);

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;
