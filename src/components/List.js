import React from "react";
import "./List.css";

export default function List(props) {
  const deleteFromList = (key) => {
    const newList = props.ItemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.setItemList(newList);
  };

  return (
    <div className="List">
      {props.ItemList.map((itemObj) => {
        return (
          <div className="Item">
            <span>{itemObj.item} </span>
            <span>{itemObj.number}</span>
            <button onClick={() => deleteFromList(itemObj.key)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
