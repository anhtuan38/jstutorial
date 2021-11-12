// function delete Row
const confirmDelete = (index) => {
  const isDel = confirm("Do you want to delete this row?");
  if (isDel) {
    const indexRowDel = $(`row${index}`);
    indexRowDel.remove();
  }
};
