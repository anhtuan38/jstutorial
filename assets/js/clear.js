const clearAll = () => {
  // remove area
  const para = document.getElementById("tableTask");
  para.remove();
  // create Div
  const createDiv = document.createElement("div");
  createDiv.setAttribute("id", "tableTask");
  $("wraptask").append(createDiv);
};
