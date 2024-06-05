let studentsList = [];

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth();
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}

function $getNewStudent(studObj) {
  const $dataList = document.createElement("tr");
  const $FIO = document.createElement("td");
  const $birthday = document.createElement("td");
  const $faculty = document.createElement("td");
  const $start = document.createElement("td");

  $FIO.textContent = `${studObj.surname} ${studObj.name} ${studObj.lastname}`;
  $birthday.textContent = formatDate(studObj.birthday);
  $faculty.textContent = studObj.faculty;
  $start.textContent = studObj.start;

  $dataList.append($FIO, $birthday, $faculty, $start);
  return $dataList;
}

function render(arr) {
  let copyArr = [...arr];

  const $studTable = document.getElementById("stud-table");

  $studTable.innerHTML = "";
  for (const studObj of copyArr) {
    const $newStudTable = $getNewStudent(studObj);
    $studTable.append($newStudTable);
  }
}

render(studentsList);

document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let newStudentObj = {
      name: document.getElementById("name-inp").value,
      surname: document.getElementById("surname-inp").value,
      lastname: document.getElementById("lastname-inp").value,
      birthday: new Date(document.getElementById("birthday-inp").value),
      start: parseInt(document.getElementById("start-inp").value),
      faculty: document.getElementById("faculty-inp").value,
    };

    studentsList.push(newStudentObj);
    render(studentsList);
  });
