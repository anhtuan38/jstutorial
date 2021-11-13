const searchPerson = () => {
  const optionSearch = $("optionSearch");
  const textSearchInput = $("textSearchInput");
  const searchedPerson = [];
  console.log("a");
  let searchValue = optionSearch.value;
  let searchValue = textSearchInput.value;

  console.log(searchValue);
  console.log(searchValue);

  console.log(searchedPerson);
  // reload table
  // $("tableData").remove();
  // let newTable = createTable(searchedPerson);
  // $("data").append(newTable);
};
