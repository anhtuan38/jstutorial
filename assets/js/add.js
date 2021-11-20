const $ = (name) => {
  return document.getElementById(name);
};

// function create Button
const creatBtn = (name, index) => {
  const Btn = document.createElement("button");
  Btn.setAttribute("type", "button");
  Btn.innerHTML = `${name}`;
  Btn.setAttribute("class", "btn btn-link mx-1");
  Btn.setAttribute("onclick", `deleteRow(${index})`);
  return Btn;
};

// function delete ROW
const deleteRow = (element) => {
  $(`task${element}`).remove();
};

// creat Paragraph include Button and Name task
const createPara = () => {
  const task = $("task");
  const row = document.createElement("p");
  row.setAttribute("id", `task${element}`);
  row.append(creatBtn("delete", `${element}`));
  row.append(`${task.value}`);
  return row;
};

// function when click ADD TASK
$("addtask").setAttribute("onclick", "addtaskFunction()");
let element = 1;

const addtaskFunction = () => {
  if (!task.value) alert("Enter a task");
  else {
    const createP = createPara();
    $("tableTask").append(createP);
    element += 1;
    task.value = "";
  }
};
