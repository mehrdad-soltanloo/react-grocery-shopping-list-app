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
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add a new grocery item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
export default ItemForm;
