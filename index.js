const loadCat = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

const displayCat = (category) => {
  const categories = document.getElementById("categories");
  categories.innerHTML = "";

  console.log(categories);

  for (let cat of categories) {
    console.log(cat);
    const catDiv = document.createElement("li");
    catDiv.innerHTML = `<li><a>${categories.category_name}</a></li>`;

    categories.append(catDiv);
  }
};

loadCat();
