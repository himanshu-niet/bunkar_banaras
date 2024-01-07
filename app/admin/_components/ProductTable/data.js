import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "TITLE", uid: "title", sortable: true},
  {name: "PRICE", uid: "price", sortable: true},
  {name: "DISCOUNT", uid: "discount", sortable: true},
  {name: "CATEGORY", uid: "category"},
  {name: "COLOR", uid: "color"},
  {name: "STOCK", uid: "stock", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const columnsOrder = [
  {name: "ID", uid: "id", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "TOTAL", uid: "total"},
  {name: "ADDRESS", uid: "address"},
  {name: "PROCEED", uid: "proceed"},
  {name: "ACTIONS", uid: "actions"}
];


export {columns,columnsOrder};
