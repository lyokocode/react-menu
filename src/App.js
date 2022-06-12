import React, { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "./data.js"

function App() {
  const allCategories = ['Tümü', ...new Set(items.map((item) => item.category))]

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === "Tümü") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menuSection">
        <div className="title">
          <h2>MacGuffin</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
