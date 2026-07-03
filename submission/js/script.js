// ===== Pricing data =====
// Each item has a "name" property so it can be looped through and rendered dynamically
const pricingItems = [
    { name: "Cupcakes (dozen)", price: "From ksh 1200" },
    { name: "Birthday Cakes", price: "From ksh 2500 (per kg)" },
    { name: "Wedding Cakes", price: "From ksh 3500 (per kg)" },
    { name: "Custom Orders", price: "Detailed request required" }
];

// ===== Render pricing list into the DOM =====
const pricingList = document.getElementById("pricing-list");

pricingItems.forEach((item) => {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "item";
    nameSpan.textContent = item.name;

    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = item.price;

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    pricingList.appendChild(li);
});
// ===== Wishlist: add & remove items =====
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistItems = document.getElementById("wishlist-items");

wishlistAddBtn.addEventListener("click", () => {
    const itemText = wishlistInput.value.trim();

    if (itemText === "") {
        return; // don't add empty items
    }

    // Create the list item
    const li = document.createElement("li");
    li.textContent = itemText;

    // Create the remove button for this specific item
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(removeBtn);
    wishlistItems.appendChild(li);

    wishlistInput.value = ""; // clear input after adding
});
// ===== Order form validation + localStorage =====
const orderForm = document.getElementById("order-form");
const customerName = document.getElementById("customer-name");
const orderDetails = document.getElementById("order-details");
const formFeedback = document.getElementById("form-feedback");

// On page load, check if we've saved a name before and fill it in
const savedName = localStorage.getItem("customerName");
if (savedName) {
    customerName.value = savedName;
}

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = customerName.value.trim();
    const detailsValue = orderDetails.value.trim();

    if (nameValue === "" || detailsValue === "") {
        formFeedback.textContent = "Please fill in both your name and order details.";
        formFeedback.style.color = "red";
        return;
    }

    // Save the name so it's remembered next time the page loads
    localStorage.setItem("customerName", nameValue);

    formFeedback.textContent = `Thanks ${nameValue}! We've received your request: "${detailsValue}".`;
    formFeedback.style.color = "green";

    orderDetails.value = ""; // only clear the order details, keep the name filled
});
// ===== Click-to-reveal banner caption =====
const bannerImg = document.getElementById("banner-img");
const bannerCaption = document.getElementById("banner-caption");

bannerImg.addEventListener("click", () => {
    bannerCaption.classList.toggle("hidden");
});