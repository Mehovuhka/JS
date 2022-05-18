(function () {
  function CreateAppTitle(title) {
    const formTitle = document.createElement("h1");

    formTitle.className = "h1";
    formTitle.textContent = title;

    return formTitle;
  }

  function CreateTodoItenForm() {
    let mainForm = document.createElement("form");
    let inputDo = document.createElement("input");
    let buttonCreateDo = document.createElement("button");

    mainForm.append(inputDo);
    mainForm.append(buttonCreateDo);

    mainForm.className = "mainForm";
    inputDo.className = "inputDo";
    inputDo.placeholder = "Напишите сюда ваше дело";
    buttonCreateDo.className = "CreateDo waves-effect waves-light btn";
    buttonCreateDo.textContent = "Добавить дело";

    return mainForm;
  }

  function CreateTodoList(div) {
    let buttonCreateDo = div.querySelector(".CreateDo");
    let caseRecordForm = document.createElement("div");
    let todoList = document.createElement("ul");

    div.append(caseRecordForm);
    caseRecordForm.append(todoList);

    todoList.className = "todoList collection";

    buttonCreateDo.addEventListener("click", createTodoItem);

    return caseRecordForm;
  }

  function createTodoItem(event) {
    event.preventDefault();

    let ready = confirm("Вы уверенны, что хотите внести данную запись?");
    let inputDo =
      event.target.parentElement.parentElement.querySelector(".inputDo");

    if (inputDo.value != "") {
      console.log(event.target);
      let todoList =
        event.target.parentElement.parentElement.querySelector(".todoList");

      let entry = document.createElement("li");
      let butComplited = document.createElement("button");
      let butDelete = document.createElement("button");
      let div2 = document.createElement("div");
      let p = document.createElement("p");
      // let i = document.createElement('i')

      entry.append(p);
      entry.append(div2);
      div2.append(butComplited);
      div2.append(butDelete);
      todoList.append(entry);
      // butComplited.append(i)
      p.textContent = inputDo.value;

      inputDo.value = "";
      p.className = "p";
      div2.className = "div2";
      entry.className = "entry collection-item";
      butComplited.className =
        "butComplited button waves-effect waves-light btn-small green";
      // i.className = "i medium material-icons left"
      // i.innerHTML= "beenhere"
      butDelete.className =
        "butDelete button waves-effect waves-light btn-small red";

      butComplited.textContent = "Пометить как выполненую";
      butDelete.textContent = "Удалить задачу";

      butComplited.addEventListener("click", () => {
        if (entry.style.backgroundColor == "") {
          entry.style.backgroundColor = "lightgreen";
        } else {
          entry.style.backgroundColor = "";
        }
      });
      butDelete.addEventListener("click", () => {
        entry.remove();
      });
    } else if (inputDo.value == "" && ready) {
      return createTodoItem;
    }
  }

  function contentLoaded(title, div) {
    div.append(CreateAppTitle(title));
    div.append(CreateTodoItenForm(div));
    div.append(CreateTodoList(div));
  }

  document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.querySelector(".container1");
    const div2 = document.querySelector(".container2");
    const div3 = document.querySelector(".container3");

    contentLoaded("Список дел сына", div1);
    contentLoaded("Список дел папы", div2);
    contentLoaded("Список дел мамы", div3);
  });
})();
