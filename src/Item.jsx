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
      <button onClick={() => onDeleteItem(item.id)} class="btn-del">
        Delete
      </button>
    </li>
  );
};
export default Item;
