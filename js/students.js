document.addEventListener("DOMContentLoaded", function () {
  let main = document.getElementById("main");
  let container = document.getElementById("container");

  let form = document.createElement("form");
  let studentName = document.createElement("input");
  let faculty = document.createElement("input");
  let startDate = document.createElement("input");
  let finishDate = document.createElement("input");

  studentName.type = "text";
  faculty.type = "text";
  startDate.type = "date";
  finishDate.type = "date";

  studentName.placeholder = "ФИО студента";
  faculty.placeholder = "Факультет";

  form.appendChild(studentName);
  form.appendChild(faculty);
  form.appendChild(startDate);
  form.appendChild(finishDate);
  container.appendChild(form);
  main.appendChild(container);

});
