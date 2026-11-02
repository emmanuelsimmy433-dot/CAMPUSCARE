const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
slides[currentSlide].classList.add("active");
}
document.getElementById("nextSlide").addEventListener("click", function () {
    showSlide(currentSlide + 1);
});
document.getElementById("prevSlide").addEventListener("click", function () {
    showSlide(currentSlide - 1);
});
setInterval(function () {
    showSlide(currentSlide + 1);
}, 5000);
const foods = [
    {  name: "Rice",
        category: "grains",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
        unit: "per paint",
        prices: {
            "Mile 12": 42000,
            "Oyingbo": 45000,
            "Agege": 40000,
            "Ketu": 43000
        }
    },
    { name: "Beans",
        category: "grains",
        image: "https://seekoria.com/proxy?i=https%3A%2F%2Fts2.mm.bing.net%2Fth%3Fid%3DOIP.Ca0kSjlEs3FtTWj3JUEhQQHaE8&s=thumb",
        unit: "per bag",
        prices: {
            "Mile 12": 38000,
            "Oyingbo": 40000,
            "Agege": 37000,
            "Ketu": 39000
        }
    },
    {  name: "Garri",
        category: "staples",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Garri_flour.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        unit: "per paint",
        prices: {
            "Mile 12": 12000,
            "Oyingbo": 11500,
            "Agege": 13000,
            "Ketu": 12500
        }
    },
    { name: "Tomatoes",
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
        unit: "per basket",
        prices: {
            "Mile 12": 18000,
            "Oyingbo": 20000,
            "Agege": 17000,
            "Ketu": 19000
        }
    },
    {  name: "Onions",
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600",
        unit: "per bag",
        prices: {
            "Mile 12": 15000,
            "Oyingbo": 16000,
            "Agege": 14500,
            "Ketu": 15500
        }
    },
    { name: "Eggs",
        category: "protein",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600",
        unit: "per crate",
        prices: {
            "Mile 12": 6500,
            "Oyingbo": 7000,
            "Agege": 6300,
            "Ketu": 6800
        }
    }
];
const foodGrid = document.getElementById("foodGrid");
function displayFoods(category = "all") {
    foodGrid.innerHTML = "";
    const filteredFoods = foods.filter(food => {
        return category === "all" || food.category === category;
    });
    filteredFoods.forEach(food => {
        const priceEntries = Object.entries(food.prices);
        const cheapest = priceEntries.reduce((lowest, current) => {
            return current[1] < lowest[1] ? current : lowest;
        });
        const priceHTML = priceEntries.map(([market, price]) => {
            const isCheapest = price === cheapest[1];
            return `
                <div class="price-row ${isCheapest ? "cheapest" : ""}">
                    <span>${market}</span>
                    <span>₦${price.toLocaleString("en-NG")}</span>
                </div>
            `;
        }).join("");
        foodGrid.innerHTML += `
            <div class="food-card">
                <img src="${food.image}" alt="${food.name}">
                <div class="food-details">
                    <h3>${food.name}</h3>
                    <p>Unit: ${food.unit}</p>
                    <div class="price-list">
                        ${priceHTML}
                    </div>
                    <span class="cheapest-label">
                        Cheapest: ${cheapest[0]}
                    </span>
                </div>
            </div>
        `;
    });
}
displayFoods();
document.getElementById("foodFilter").addEventListener("change", function () {
    displayFoods(this.value);
});
const products = {
    textbooks: [  {  name: "Science Textbook",
            price: "₦8,500",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
        },
        {  name: "Mathematics Textbook",
            price: "₦6,000",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600"
        },
        { name: "English Textbook",
            price: "₦5,000",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
        }
    ],
    accessories: [ { name: "Phone Charger",
            price: "₦5,000",
            image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600"
        },
        { name: "Wireless Earphones",
            price: "₦12,000",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
        },
        {  name: "Phone Case",
            price: "₦3,500",
            image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600"
        }
    ],
    fashion: [
        { name: "Casual Backpack",
            price: "₦15,000",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
        },
        {name: "Student Sneakers",
            price: "₦18,000",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
        },
        { name: "Wristwatch",
            price: "₦9,000",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
        }
    ],
    hostel: [
        { name: "Reading Lamp",
            price: "₦7,000",
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
        },
        { name: "Water Bottle",
            price: "₦4,000",
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600"
        },
        {name: "Bedsheet",
            price: "₦12,000",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
        }
    ]
};
const productGrid = document.getElementById("productGrid");
function displayProducts(category) {
    productGrid.innerHTML = "";
    products[category].forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <button type="button"
                        onclick="selectProduct('${product.name}')">
                        Make Enquiry
                    </button>
                </div>
            </div>
        `;
    });
}
displayProducts("textbooks");
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        displayProducts(this.dataset.category);
    });
});
function selectProduct(productName) {document.getElementById("productName").value = productName;
 document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const order = {product: document.getElementById("productName").value,
        name: document.getElementById("buyerName").value,
        email: document.getElementById("buyerEmail").value,
        message: document.getElementById("orderMessage").value
    };
    const savedOrders = JSON.parse(localStorage.getItem("campusOrders")) || [];
    savedOrders.push(order);
    localStorage.setItem("campusOrders", JSON.stringify(savedOrders));
    alert("Your product enquiry has been saved in this browser!");
this.reset();
});
document.getElementById("joinForm").addEventListener("submit", function (event) {
event.preventDefault();
 const student = {name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        institution: document.getElementById("institution").value,
        level: document.getElementById("level").value,
        course: document.getElementById("course").value
    };
const students = JSON.parse(localStorage.getItem("campusStudents")) || [];
students.push(student);

    localStorage.setItem("campusStudents", JSON.stringify(students));
 document.getElementById("joinMessage").textContent =
        "Registration information saved successfully in this browser!";
this.reset();
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
event.preventDefault();
const message = {name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        subject: document.getElementById("contactSubject").value,
        message: document.getElementById("contactMessage").value
    };
const messages = JSON.parse(localStorage.getItem("campusMessages")) || [];
messages.push(message);
localStorage.setItem("campusMessages", JSON.stringify(messages));
document.getElementById("contactStatus").textContent =
        "Your message has been saved in this browser!";
 this.reset();
});
document.getElementById("year").textContent = new Date().getFullYear();