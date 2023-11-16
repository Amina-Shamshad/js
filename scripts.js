let addPage = document.querySelector("button");
// console.log(addPage)

let pageNo = 0;
function dltAllPage(){
    userInput = confirm("Do you want to delete all pages?")
    if (userInput) {
        dltpg = document.querySelectorAll('.todopage')
        Array.from(dltpg).forEach((e) => {
            e.remove()
        })
    }
}
addPage.addEventListener('click', () => {
    //div for todopages and buttons
    newPage = document.createElement('div')
    newPage.setAttribute('class', `todopage newPage-${pageNo}`)
    newPage.setAttribute('tabIndex', '1')
    
    divbtn = document.createElement("div")
    divbtn.setAttribute('class', `btn-todo page-${pageNo}`)
    divbtn.setAttribute('tabIndex', '1')
    
    //adding title to todo page
    title = document.createElement('input')
    title.setAttribute('class', `todo-title`)
    title.setAttribute('placeholder', `Add Title Here...`)
    newPage.appendChild(title)

    // progress
    progress = document.createElement('progress')
    progress.setAttribute('value', '0')
    progress.setAttribute('max', '100')
    newPage.appendChild(progress)

    //button for adding and deleting
    btnAdd = document.createElement("button")
    btnAdd.setAttribute('class', `buttonadd addBtn-${pageNo}`)
    btnDlt = document.createElement("button")
    btnDlt.setAttribute('class', `dltBtn- ${pageNo}`)
    addIcon = document.createElement('i')
    delIcon = document.createElement('i')
    addIcon.setAttribute('class', 'fa-regular fa-square-plus')
    delIcon.setAttribute('class', 'fa-regular fa-trash-can')
    
    btnAdd.appendChild(addIcon)
    btnDlt.appendChild(delIcon)
    divbtn.appendChild(btnAdd)
    divbtn.appendChild(btnDlt)
    newPage.appendChild(divbtn)
    document.querySelector(".todo").append(newPage);

    addIcon.setAttribute('onclick',`todoAdding("${pageNo}")`)
    delIcon.setAttribute("onclick", `deletingPage("${pageNo}")`);
    pageNo += 1;
})

//adding individual todos
let todoNo = 0;

function todoAdding(noPage) {
    // console.log(noPage)
    indiTodo = document.createElement('div')
    indiTodo.setAttribute('class', `todosi todo-${todoNo}`)
    indiTodo.setAttribute('tabIndex', '1')
    //adding checkbox
    checkBox = document.createElement('input')
    checkBox.setAttribute('type', "checkbox")
    checkBox.setAttribute('class', `ckb-${todoNo}`)
    checkBox.setAttribute("onchange", `checkDone("${todoNo}", "${pageNo}")`);

    indiTodo.appendChild(checkBox)
    //adding todo-content
    content = document.createElement('p')
    content.setAttribute('contenteditable', '')
    content.setAttribute('class', `content-${todoNo}`)
    
    indiTodo.appendChild(content)
    //adding individual delet button
    btnDel = document.createElement('button')
    btnDel.setAttribute('class', `btns del`)
    delIcon = document.createElement('i')
    delIcon.setAttribute("class", "fa-regular fa-circle-xmark")
    btnDel.appendChild(delIcon)
    indiTodo.appendChild(btnDel)

    delIcon.setAttribute('onclick', `deletingTodo("todo-${todoNo}")`);
    
    parent = document.querySelector(`.newPage-${noPage}`);
    // console.log(`.newPage-${pageNo}`);
    indiappend = document.querySelector(`.newPage-${noPage} progress`);
    parent.insertBefore(indiTodo, indiappend)
    
    todoNo += 1;
}
function showProgress(pageNo) {
    // console.log(pageNo)
    prg = document.querySelectorAll(`.newPage-${pageNo-1} input`);
    prg2 = Array.from(prg)
    len = prg2.length-1
    console.log(prg)
    let checkedarr =0
    prg.forEach((e) => {
        if (e.checked) {
            checkedarr += 1;
            console.log(checkedarr);
        }
    })
    di = 1*((checkedarr / len) * 100);
    console.log(di)
    pgbtn = document.querySelector(`.newPage-${pageNo-1} progress`)
    pgbtn.setAttribute('value', `${di}`)

}

function checkDone(todoNo, pageNo) {

    // console.log(pageNo)
  //cheakBox = document.querySelector(`.ckb-${todoNo}`);//
  para = document.querySelector(`.content-${todoNo}`);
  para.classList.toggle("closed");
  showProgress(pageNo);
}
function deletingTodo(todoNo) {
  userInput = confirm("Do you want to delete the todo?");
  if (userInput) {
    document.querySelector(`.${todoNo}`).remove();
  }
}

function deletingPage(pageNo) {
  userInput = confirm("Do you want to delete the todo page?");
  if (userInput) {
    document.querySelector(`.newPage-${pageNo}`).remove();
  }
}
