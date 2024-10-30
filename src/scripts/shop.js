const url = "../../public/data/furniture-data.json";
let data;

async function loadJSON() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const gridContainer = document.getElementById("grid-container");

function viewDetails() {}

document.addEventListener("DOMContentLoaded", async function () {
    data = await loadJSON();
    data.forEach((item) => {
        const gridItem = document.createElement("div");
        gridItem.id = "grid-item";

        const ItemHover = document.createElement("div");
        ItemHover.id = "item-hover";
        const addToCart = document.createElement("p");
        addToCart.textContent = "Add to Cart";
        const viewDetails = document.createElement("a");
        const viewDetailHref = document.createElement("p");
        viewDetailHref.textContent = "View Details";
        viewDetails.href = "../../public/pages/singleProduct.html";
        viewDetails.appendChild(viewDetailHref);
        ItemHover.appendChild(addToCart);
        ItemHover.appendChild(viewDetails);
        gridItem.appendChild(ItemHover);

        const Container = document.createElement("div");
        Container.id = "item-container";
        const ItemDetails = document.createElement("div");
        ItemDetails.id = "item-details";
        const Img = document.createElement("img");
        Img.src = "../../public/img/furniture-3.jpg";
        const Name = document.createElement("h1");
        Name.textContent = item.name;
        const Price = document.createElement("h2");
        Price.textContent = "$" + item.price;
        const Description = document.createElement("p");
        Description.textContent = item.description;

        ItemDetails.appendChild(Name);
        ItemDetails.appendChild(Description);
        ItemDetails.appendChild(Price);
        Container.appendChild(Img);
        Container.appendChild(ItemDetails);
        gridItem.appendChild(Container);

        gridContainer.appendChild(gridItem);
    });
});
