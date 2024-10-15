import Item from "./Item";

const ItemList = ({ items, onDeleteItem, onMarkAsPurchased }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onMarkAsPurchased={onMarkAsPurchased}
          />
        );
      })}
    </ul>
  );
};
export default ItemList;
