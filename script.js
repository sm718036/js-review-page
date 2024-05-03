let reviews = [
    {   
        id: 1,
        img: "img/1 (1).jpg",
        name: "John Doe",
        job: "Student",
        review: "Upon exploring the latest innovative product, [product name], I couldn't help but be captivated by its unique features and functionality. This versatile product provides a seamless solution for [product description], making it a must-have for anyone looking to enhance their [keyword] experience."
    },
    {   
        id: 2,
        img: "img/1 (2).jpg",
        name: "Julia",
        job: "Student",
        review: "Upon exploring the latest innovative product, [product name], I couldn't help but be captivated by its unique features and functionality. This versatile product provides a seamless solution for [product description], making it a must-have for anyone looking to enhance their [keyword] experience."
    },
    {   
        id: 3,
        img: "img/1 (3).jpg",
        name: "Anny",
        job: "Student",
        review: "Upon exploring the latest innovative product, [product name], I couldn't help but be captivated by its unique features and functionality. This versatile product provides a seamless solution for [product description], making it a must-have for anyone looking to enhance their [keyword] experience."
    },
    {   
        id: 4,
        img: "img/1 (4).jpg",
        name: "Abraham",
        job: "Student",
        review: "Upon exploring the latest innovative product, [product name], I couldn't help but be captivated by its unique features and functionality. This versatile product provides a seamless solution for [product description], making it a must-have for anyone looking to enhance their [keyword] experience."
    },
    {   
        id: 5,
        img: "img/1 (5).jpg",
        name: "Virdie",
        job: "Student",
        review: "Upon exploring the latest innovative product, [product name], I couldn't help but be captivated by its unique features and functionality. This versatile product provides a seamless solution for [product description], making it a must-have for anyone looking to enhance their [keyword] experience."
    }
];
let index = 1;


let imgEl = document.querySelector("img");
let nameEl = document.querySelector("h5.card-title");
let professionEl = document.querySelector("p.profession");
let reviewEl = document.querySelector("p.card-text");
let changeEl = document.querySelectorAll("a");

changeEl.forEach(function(a){
    a.addEventListener("click", function(e){
        let btnClicked = e.currentTarget.classList;
        if(btnClicked.contains("forward")){
            index++;
            if(index > reviews.length -1) {
                index = 0;
            }
            fetchReview(index);
        } else if(btnClicked.contains("backward")) {
            index--;
            if(index < 0) {
                index = reviews.length -1;
            }
            fetchReview(index);
        } else if(btnClicked.contains("random")) {
            let randomNo = Math.floor(Math.random() * reviews.length);
            fetchReview(randomNo);
        }
    })
})

function fetchReview(reviewNo){
    let person = reviews[reviewNo];
    imgEl.setAttribute("src", person.img);
    nameEl.textContent = person.name;
    professionEl.textContent = person.job;
    reviewEl.textContent = person.review;
}



