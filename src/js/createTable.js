const headers = [
  "stt",
  "full name",
  "age",
  "email",
  "gender",
  "BMI",
  "health status",
  "actions",
];

// function create button
const createButton = (name) => {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("data-bs-toggle", "modal");
  btn.setAttribute("data-bs-target", `#${name}`);
  btn.innerHTML = name;
  return btn;
};

// create table Header
const createTableHeader = () => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    tr.append(th);
    th.setAttribute("scope", "col");
  });
  thead.append(tr);
  return thead;
};

// create table body
const createTableBody = (array) => {
  const tbody = document.createElement("tbody");

  array.forEach((obj, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", `row${index + 1}`);

    const sttTd = document.createElement("td");
    const fullNameTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const BMITd = document.createElement("td");
    const healthTd = document.createElement("td");
    const actionTd = document.createElement("td");

    //create button
    const editBtn = createButton("edit");
    editBtn.setAttribute("onclick", `editRow(${index + 1})`);

    const deleteBtn = createButton("delete");
    deleteBtn.setAttribute("onclick", `confirmDelRow(${index + 1})`);

    //set data for cell
    sttTd.innerHTML = index + 1;
    fullNameTd.innerHTML = obj.fullName;
    ageTd.innerHTML = obj.age;
    emailTd.innerHTML = obj.email;
    genderTd.innerHTML = obj.gender;
    BMITd.innerHTML = obj.BMI;
    healthTd.innerHTML = obj.health;
    actionTd.append(editBtn);
    actionTd.append(deleteBtn);

    // append cell into row
    tr.append(sttTd);
    tr.append(fullNameTd);
    tr.append(ageTd);
    tr.append(emailTd);
    tr.append(genderTd);
    tr.append(BMITd);
    tr.append(healthTd);
    tr.append(actionTd);

    // append tr into tbody
    tbody.append(tr);
  });
  return tbody;
};
// creat Table
const createTable = (array) => {
  const table = document.createElement("table");
  const createTbHeader = createTableHeader();
  const createTbBody = createTableBody(array);

  table.append(createTbHeader);
  table.append(createTbBody);

  // style table
  table.setAttribute("id", "tableData");
  table.setAttribute("class", "table table-striped table-hover");
  return table;
};
