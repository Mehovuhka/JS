(function(){
    CreateAppTitle()
    work = false
    function CreateAppTitle(){
        let div = document.querySelector('.container')
        let formTitle = document.createElement('h1')
        div.append(formTitle)
        formTitle.textContent = "Список дел"
        CreateTodoItenForm()
        CreateTodoList()
    }
   

    function CreateTodoItenForm(){
        let div = document.querySelector('.container')
        let mainForm = document.createElement('div')
        let inputDo = document.createElement('input')
        let buttonCreateDo = document.createElement('button')
        div.append(mainForm)
        mainForm.append(inputDo)
        mainForm.append(buttonCreateDo)
        mainForm.className = "mainForm"
        inputDo.className = "inputDo"
        inputDo.placeholder = "Напишите сюда ваше дело"
        buttonCreateDo.className = "CreateDo waves-effect waves-light btn"
        buttonCreateDo.textContent = "Добавить дело"
        buttonCreateDo.id = "but"
    }

    function CreateTodoList(){
        let div = document.querySelector('.container')
        let buttonCreateDo = document.querySelector('.CreateDo')
        let caseRecordForm = document.createElement('div')
        let todoList = document.createElement('ul')
        div.append(caseRecordForm)
        caseRecordForm.append(todoList)
        todoList.className ="todoList collection"
        buttonCreateDo.addEventListener("click", createTodoItem)
    }
    function createTodoItem(event){
        event.preventDefault()
        let ready = confirm("Вы уверенны, что хотите внести данную запись?")
        let inputDo = document.querySelector('.inputDo')
        if (inputDo.value != ""){
            let todoList = document.querySelector('.todoList')
            let inputDo = document.querySelector('.inputDo')
            let entry = document.createElement('li')
            let butComplited = document.createElement('button')
            let butDelete = document.createElement('button')
            let div2 = document.createElement('div')
            let p = document.createElement('p')

            entry.append(p)
            entry.append(div2)
            div2.append(butComplited)
            div2.append(butDelete)
            todoList.append(entry)
            p.textContent = inputDo.value

            div2.className = "div2"
            entry.className = "entry collection-item"
            butComplited.className = "butComplited button waves-effect waves-light btn-small green"
            butDelete.className ="butDelete button waves-effect waves-light btn-small red"
            butComplited.textContent = "Пометить как выполненую"
            butDelete.textContent = "Удалить задачу"

            butComplited.addEventListener("click", ()=>{
                markEntryCompleted()
            })
            butDelete.addEventListener("click", ()=>{
                deleteEntry()
            })

        }
        else if(inputDo.value == "" && ready){
            return createTodoItem
        }
    }

    function deleteEntry(){
        let entry = document.querySelector('.entry')
        let todoList = document.querySelector('.todoList')
        todoList.removeChild(entry)
    }

    function markEntryCompleted(){
        let entry = document.querySelector('.entry')
        if(entry.style.backgroundColor == ""){
            entry.style.backgroundColor = "lightgreen";
        } 
        else{
            entry.style.backgroundColor = "";
        }

    }

})()

