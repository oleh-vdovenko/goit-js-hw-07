function getStructureCategories(structure) {
  const items = document.querySelectorAll(".item");
  console.log(`Number of categories: ${items.length}`);
  items.forEach((item) => {
    const title = item.querySelector("h2");
    if (title) {
      console.log(`Category: ${title.textContent}`);
    }
    const lists = item.querySelector("ul");
    console.log(`Elemnets: ${lists.querySelectorAll("li").length}`);
  });
}
getStructureCategories(document.querySelector("#categories"));
