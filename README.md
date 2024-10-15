# Grocery Shopping List App

A simple grocery shopping list application built with React. Users can add items to their shopping list, mark them as purchased, and delete items. The app also provides user feedback using Toast notifications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App Component](#app-component)
  - [ItemForm Component](#itemform-component)
  - [ItemList Component](#itemlist-component)
  - [Item Component](#item-component)
- [Functions and Methods](#functions-and-methods)
- [Styles](#styles)

## Installation

1. Clone the Repository\*\*
   ```bash
   git clone https://github.com/yourusername/grocery-shopping-list-app.git
   cd grocery-shopping-list
   ```
2. Install Dependencies

```bash
npm install
```

3. Run the Application

```bash
npm start
```

## Usage

- Open your web browser and navigate to http://localhost:3000 to view the app.
- Enter a grocery item in the input field and click "Add Item" to add it to the list.
- Check the box next to an item to mark it as purchased. The text will be crossed out.
- Click the "Delete" button to remove an item from the list.

## Components

App Component
The App component serves as the main component of the application. It manages the state of the grocery items and provides the functionality to add, delete, and mark items as purchased.

```javascript
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
    setItems((prevItems) => [...prevItems, newItem]);
    toast.success(`${newItem.text} added successfully!`);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

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
```

## ItemForm Component

The ItemForm component handles user input for adding new grocery items. It uses the nanoid library to generate unique IDs for each item.

```javascript
import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

const ItemForm = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // If input value is empty, show error message
    if (!inputValue.trim()) {
      toast.error("Please enter a value");
      return;
    }

    const newItem = {
      id: nanoid(),
      text: inputValue,
      purchased: false,
    };

    onAddItem(newItem);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new grocery item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
```

## ItemList Component

The ItemList component displays the list of grocery items. It maps through the items array and renders an Item component for each item.

```javascript
import Item from "./Item";

const ItemList = ({ items, onDeleteItem, onMarkAsPurchased }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onMarkAsPurchased={onMarkAsPurchased}
        />
      ))}
    </ul>
  );
};

export default ItemList;
```

## Item Component

The Item component represents a single grocery item in the list. It includes a checkbox for marking the item as purchased, a span for the item text, and a delete button

```javascript
const Item = ({ item, onDeleteItem, onMarkAsPurchased }) => {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => onMarkAsPurchased(item.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          textDecoration: item.purchased ? "line-through" : "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
        onClick={() => onMarkAsPurchased(item.id)}
      >
        {item.text}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="btn-del">
        Delete
      </button>
    </li>
  );
};

export default Item;
```

### Functions and Methods

- useState: A React Hook that lets you add React state to function components. It is used in the App and ItemForm components to manage the list of items and the input value.

- nanoid: A small, secure, URL-friendly, unique string ID generator for JavaScript. Used in the ItemForm component to create unique IDs for new items.

- toast: Part of the react-toastify library, used for displaying toast notifications to inform users about actions such as adding an item or encountering an error.

### Important Functions

- addItem: Adds a new item to the list and displays a success toast.
- deleteItem: Removes an item from the list based on its ID.
- markAsPurchased: Toggles the purchased status of an item.

### Styles

CSS File: The application uses an external CSS file (index.css) for styling. Ensure you create this file in the src directory and import it in the App component.

### Conclusion

> This Grocery Shopping List App is a straightforward yet functional example of a React application. It demonstrates core concepts such as component-based architecture, state management, and user interaction through forms and toasts. Feel free to build upon this foundation by adding new features like notifications, sound alerts, or even a task list for better productivity tracking. Thank you!
