// function delete Row
const confirmDelete = (index) => {
  const isDel = confirm("Do you want to delete this row?");
  if (isDel) {
    $("index").remove();
  }
};
