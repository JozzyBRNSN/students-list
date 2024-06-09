let studentsList = [];

// Форматирование даты
function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth();
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}

// Функция добавления даты поступления в интервале от 2000 до нынешнего года
function minMaxStartValue(year) {
    if (
      year > new Date().getFullYear() ||
      year < new Date(2000)
    ) {
      return alert("Введите корректную дату");
    } else {
      return year;
    }
  };

// Функция создания нового студента
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
// Функция добавления нового студента в массив
const $btn = document.getElementById("add-btn");

let name = document.getElementById("name-inp");
let surname = document.getElementById("surname-inp");
let lastname = document.getElementById("lastname-inp");
let birthday = document.getElementById("birthday-inp");
let start = document.getElementById("start-inp");
let faculty = document.getElementById("faculty-inp");

document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let newStudentObj = {
      name: name.value,
      surname: surname.value,
      lastname: lastname.value,
      birthday: new Date(birthday.value),
      start: minMaxStartValue(parseInt(start.value)),
      faculty: faculty.value,
    };
 
    studentsList.push(newStudentObj);
    render(studentsList);

    name.value = "";
    surname.value = "";
    lastname.value = "";
    birthday.value = "";
    start.value = "";
    faculty.value =  "";
  });
