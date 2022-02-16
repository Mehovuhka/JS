let objects = [
    { name: "Василий", surname: "Васильев" },
    { name: "Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" }
    ]
    
    function filter({ name }, desiredName){
        for(let obj of objects){
            if(obj.name === desiredName){
                return obj
            }
            
        }
        return "ОшИьОчКа!"
    }
    let desiredName = "Иван"
    
    console.log(filter(objects, desiredName))