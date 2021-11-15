const searchPerson = () => {
  const optionSearch = $("optionSearch");
  const textSearchInput = $("textSearchInput");

  let searchValue = optionSearch.value;
  let searchText = textSearchInput.value;

  let personSearch = [];
  personArr.forEach((elemnent) => {
    if (elemnent[searchValue].indexOf(searchText) !== -1) {
      personSearch.push(elemnent);
    }
  });
  console.log(personSearch);
  //reload table
  $("tableData").remove();
  let newTable = createTable(personSearch);
  $("data").append(newTable);
};
