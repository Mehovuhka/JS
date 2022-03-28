(function(){
    function CreateAppTitle(){
        const formTitle = document.createElement('h1')

        formTitle.className = "h1"
        formTitle.textContent = document.querySelector('.todo').textContent

        return formTitle
    }
   

    function CreateTodoItenForm(){
        let mainForm = document.createElement('form')
        let inputDo = document.createElement('input')
        let buttonCreateDo = document.createElement('button')

        mainForm.append(inputDo)
        mainForm.append(buttonCreateDo)
        
        mainForm.className = "mainForm"
        inputDo.className = "inputDo"
        inputDo.placeholder = "Напишите сюда ваше дело"
        buttonCreateDo.className = "CreateDo waves-effect waves-light btn"
        buttonCreateDo.textContent = "Добавить дело"

        return mainForm
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

        return caseRecordForm
    }
    
    function createTodoItem(event){
        event.preventDefault()
        let ready = confirm("Вы уверенны, что хотите внести данную запись?")
        let inputDo = document.querySelector('.inputDo')

        if (inputDo.value != ""){
            let deleteAllEntry = document.querySelector('.deleteAllEntry')
            deleteAllEntry.style.display = "block"

            let todoList = document.querySelector('.todoList')
            let inputDo = document.querySelector('.inputDo')

            let entry = document.createElement('li')
            let butComplited = document.createElement('button')
            let butDelete = document.createElement('button')
            let div2 = document.createElement('div')
            let p = document.createElement('p')
            // let i = document.createElement('i')

            entry.append(p)
            entry.append(div2)
            div2.append(butComplited)
            div2.append(butDelete)
            todoList.append(entry)
            // butComplited.append(i)
            p.textContent = inputDo.value

            p.className = "p"
            div2.className = "div2"
            entry.className = "entry collection-item"
            butComplited.className = "butComplited button waves-effect waves-light btn-small green"
            // i.className = "i medium material-icons left"
            // i.innerHTML= "beenhere"
            butDelete.className ="butDelete button waves-effect waves-light btn-small red"
            
            butComplited.textContent = "Пометить как выполненую"
            butDelete.textContent = "Удалить задачу"

            butComplited.addEventListener("click", ()=>{
                if(entry.style.backgroundColor == ""){
                    entry.style.backgroundColor = "lightgreen";
                } 
                else{
                    entry.style.backgroundColor = "";
                }
            })
            butDelete.addEventListener("click", ()=>{
                entry.remove()
                if(todoList.innerHTML == ""){
                    deleteAllEntry.style.display = "none"
                }
            })

        }
        else if(inputDo.value == "" && ready){
            return createTodoItem
        }
    }
    document.addEventListener("DOMContentLoaded", function(){
        const div = document.querySelector('.container')
        
        div.append(CreateAppTitle())
        div.append(CreateTodoItenForm())
        div.append(CreateTodoList())
        
        let deleteAllEntry = document.createElement('button')

        div.append(deleteAllEntry)

        deleteAllEntry.style.display = "none"
        
        deleteAllEntry.className = "deleteAllEntry button waves-effect waves-light btn-small red"
        deleteAllEntry.textContent = "Удалить все записи"

        deleteAllEntry.addEventListener("click", ()=>{
            deleteAllEntry.style.display = "none"
            let ul = document.querySelector('.todoList')
            ul.innerHTML = ""
        })
    })
})()

