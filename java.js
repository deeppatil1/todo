  var addbtn = document.querySelector("#addbtn")
  var count = 0;
 
  addbtn.addEventListener("click",function(){
    var taskfield = document.querySelector("#taskfield")
    var division = document.querySelector("#division")
    var task = taskfield.value ;
    if(task!=""&&task!=null)
    {
        count +=1;
        division.innerHTML +=` <div style="display:flex;padding:3px;height:background-color:red;align-items:center;justify-content:center;margin-bottom:0px"><input  style="margin:3px;"type="checkbox" id="${count}" name="checkbox1" value="value1">
        <h4 style="margin:3px;" id="${count}">${task}</h4><div>`
    }
    
  })
  
  