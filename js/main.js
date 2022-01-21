//create and show tasks
showtask();
var addtaskinput = document.getElementById("addtaskinput");
var addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        var webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.unshift({'task_name':addtaskinputval, 'completeStatus':false});
		//push thêm phần tử vào cuối object còn unshift thêm  phần tử vào đầu object
        // console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addtaskinput.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    var webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    var html = '';
    var addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td  id="task_name" class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td id="task_name">${item.task_name}</td>`;
        }
        html += `<tr>
                    <td ><input type="checkbox" id=${index}" name="vehicle2" ></td>
                     ${taskCompleteValue}
                    <td><i  onclick="edittask(${index})" class="fa fa-edit"></i></td>
                    <td><i  onclick="deleteitem(${index})" class="fa fa-trash"></i></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}


// ******************************************************************************
// delete task
function deleteitem(index){
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

// delete all task
var deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    var savetaskbtn = document.getElementById("savetaskbtn");
    var addtaskbtn = document.getElementById("addtaskbtn");
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
})


// ******************************************************************************
// edit task
function edittask(index){
    var saveindex = document.getElementById("saveindex");
    var addtaskbtn = document.getElementById("addtaskbtn");
    var savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask); 
    
    addtaskinput.value = taskObj[index]['task_name'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}
// save task
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    var addtaskbtn = document.getElementById("addtaskbtn");
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask); 
    var saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addtaskinput.value;
        }
      }

    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value='';
    showtask();
})


// ******************************************************************************
// complete task




// ******************************************************************************
// time 
function dongho(){
    var today = new Date(); //lấy ngày giờ hiện tại
    var gio = today.getHours(); //lấy giờ hiện tại
    var phut = today.getMinutes(); //lấy phút hiện tại 
    var giay = today.getSeconds();
    // cập nhật thời gian sau 1 giây 
    setTimeout("dongho()", 1000); //cứ sau 1 giây ta gọi hàm đồng hồ
    //hiển thị đưa thông tin lên 
    var thongtin = gio+":"+phut+":"+giay;
    //truy cập vào id time, dan text thông tin
    document.getElementById("time").innerHTML= thongtin;
}
dongho();