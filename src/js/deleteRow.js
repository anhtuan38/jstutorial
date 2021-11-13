// function delete Row
const confirmDelRow = (index) => {
  const isDel = confirm("Do you want to delete this row?");
  if (isDel) {
    const indexRowDel = $(`row${index}`);

    // remove element from Array Data
    indexRowDel.remove();
    personArr.splice(index - 1, 1);

    // creat New Table
    // console.log(personArr);
    $("tableData").remove();
    const newTb = creatTable(personArr);
    $("data").append(newTb);
  }
};
