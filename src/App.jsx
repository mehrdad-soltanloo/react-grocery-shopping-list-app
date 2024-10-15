import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

function App() {
  // State to hold the list of items
  const [items, setItems] = useState([]);

  // Function to add new item

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); // Adds new item to the list while keeping the updated list
    toast.success(`${newItem.text} added successfully!`);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id); // This filters out the deleted item
    setItems(updatedItems);
  };
  // Function to mark items as purchased
  const markAsPurchased = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updatedItems);
  };
  return (
    <div className="container">
      <h1>Grocery Shopping List</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList
        items={items}
        onDeleteItem={deleteItem}
        onMarkAsPurchased={markAsPurchased}
      />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
