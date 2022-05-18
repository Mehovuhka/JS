(function () {
  let storageArr = []
  // let letyShops

  // function checkStorage(){
  //   if(document.querySelector(".todo").textContent === "Список дел сына"){
  //     letyShops = "itemsSon"
  //     storageArr = JSON.parse(localStorage.getItem(letyShops)) || []
  //   } 
  //   else if(document.querySelector(".todo").textContent === "Список дел мамы"){
  //     letyShops = "itemsMom"
  //     storageArr = JSON.parse(localStorage.getItem(letyShops)) || []
  //   } 
  //   else if(document.querySelector(".todo").textContent === "Список дел папы"){
  //     letyShops = "itemsDad"
  //     storageArr = JSON.parse(localStorage.getItem(letyShops)) || []
  //   }
  // }

  function CreateAppTitle() {
    const formTitle = document.createElement("h1");

    formTitle.className = "h1";
    formTitle.textContent = document.querySelector(".todo").textContent;

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
    buttonCreateDo.setAttribute("disabled", "disabled");
    return mainForm;
  }

  function CreateTodoList() {
    let div = document.querySelector(".container");
    let buttonCreateDo = document.querySelector(".CreateDo");
    let caseRecordForm = document.createElement("div");
    let todoList = document.createElement("ul");
    let inputDo = document.querySelector(".inputDo");

    div.append(caseRecordForm);

    caseRecordForm.append(todoList);
    caseRecordForm.className = "RecordForm";
    todoList.className = "todoList collection";

    buttonCreateDo.addEventListener("click", ()=>{
      createTodoItem(inputDo.value)
    });
    return todoList;
  }

  async function pushDo(inputDo, owNer){
    let response1 = await fetch('http://localhost:3000/api/todos', {
        method: "POST",
        body: JSON.stringify({
          name: inputDo.value,
          owner: owNer,
          done: false
        })
      })
    let result1 = await response1.json();
    console.log(result1);
  }

  async function checkDo(){
    let response2 = await fetch('http://localhost:3000/api/todos/1652898668818')
    let result2 = await response2.json();
    console.log(result2)
  }

  async function createDo(){
    // let response2 = await fetch('http://localhost:3000/api/todos/1652898668818')
    // let result2 = await response2.json();
    var a = fetch('http://localhost:3000/api/todos/1652898668818')
    .then(promiseResult => {
      console.log(promiseResult)
      return promiseResult.text()
    })
    .then(responseResult => {
      console.log(responseResult)
      return responseResult
    })
    // console.log(result2);
  }

  function createTodoItem(name = "", done = false, index, responseResult) {
    let inputDo = document.querySelector(".inputDo");
    let owNer = document.querySelector(".todo").textContent

    if (inputDo.value != ""){
      // storageArr.push({name: (inputDo.value).textContent ,owner: owNer, done: false})
      pushDo(inputDo, owNer)
      createDo()
    }
    // localStorage.setItem(letyShops, JSON.stringify(storageArr))
    
      let todoList = document.querySelector(".todoList");

      let entry = document.createElement("li");
      
      let butComplited = document.createElement("button");
      let butDelete = document.createElement("button");
      let div2 = document.createElement("div");
      let p = document.createElement("p");
      let buttonCreateDo = document.querySelector(".CreateDo");
      
      const indexArr = index || storageArr.length - 1
      
      buttonCreateDo.setAttribute("disabled", "disabled");

      let deleteAllEntry = document.querySelector(".deleteAllEntry");

      entry.append(p);
      entry.append(div2);
      div2.append(butComplited);
      div2.append(butDelete);
      todoList.append(entry);

      p.textContent = name || responseResult[{name}]
      inputDo.value = "";

      p.className = "p";
      if (done || responseResult[{done}] == true) {
        entry.style.backgroundColor = "lightgreen";
      }
      else{
        entry.style.backgroundColor = ""
      }
      div2.className = "div2";
      entry.className = "entry collection-item";
      butComplited.className = "butComplited button waves-effect waves-light btn-small green";
      butDelete.className = "butDelete button waves-effect waves-light btn-small red";

      butComplited.textContent = "Пометить как выполненую";
      butDelete.textContent = "Удалить задачу";

      butComplited.addEventListener("click", () => {
        if (entry.style.backgroundColor == "") {
          storageArr[indexArr].done = true
          entry.style.backgroundColor = "lightgreen";
        } else {
          storageArr[indexArr].done = false
          entry.style.backgroundColor = "";
        }
        localStorage.setItem(letyShops, JSON.stringify(storageArr))
      });
      butDelete.addEventListener("click", () => {
        entry.remove();
        if (todoList.innerHTML == "") {
          deleteAllEntry.style.display = "none";
        }
        deleteOneEntry(letyShops, storageArr)
      });
  }

  function deleteOneEntry(letyShops, storageArr){
    storageArr = []

    let entry = document.querySelectorAll('.entry')
    let p = document.querySelectorAll('.p')
    let status = false
    let schet = 0

    for (let i of entry){
      if (i.style.backgroundColor == "lightgreen"){
        status = true
      }
      else if (i.style.backgroundColor == ""){
        status = false
      }
      storageArr.push({name: p[schet].textContent, done: status})
      schet++
    }

    // localStorage.setItem(letyShops, JSON.stringify(storageArr))
  }
  
  // function createArrEntry(tasksArr = []){
  //   for (let i = 0; i < tasksArr.length; i++){
  //   createTodoItem(tasksArr[i].name, tasksArr[i].done)
  //   }
  // }
    
  document.addEventListener("DOMContentLoaded", () => {
      // checkStorage()

      const div = document.querySelector(".container");

      div.append(CreateAppTitle());
      div.append(CreateTodoItenForm());
      div.append(CreateTodoList());

      for(let index = 0; index < storageArr.length; index++){
        console.log(storageArr[index])
        createTodoItem(storageArr[index].name, storageArr[index].done, index)
      }
      
      let deleteAllEntry = document.createElement("button");
      div.append(deleteAllEntry);

      deleteAllEntry.style.display = "none";
      deleteAllEntry.className ="deleteAllEntry button waves-effect waves-light btn-small red";
      deleteAllEntry.textContent = "Удалить все записи";

      deleteAllEntry.addEventListener("click", () => {
        deleteAllEntry.style.display = "none";
        let ul = document.querySelector(".todoList");
        ul.innerHTML = "";
      });
      // createArrEntry(tasks)

      let buttonCreateDo = document.querySelector(".CreateDo");
      buttonCreateDo.setAttribute("disabled", "disabled");
      let inputDo = document.querySelector(".inputDo");

      inputDo.addEventListener("input", () => {
        if (inputDo.value.trim().length != 0) {
          buttonCreateDo.removeAttribute("disabled");
        } else {
          buttonCreateDo.setAttribute("disabled", "disabled");
        }
      });
    });
})();
