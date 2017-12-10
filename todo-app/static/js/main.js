document.querySelector('.add_task_content').addEventListener('click', function () {
    var content = document.querySelector('.content_area')
    var form = document.querySelector('.add_task_form')

    if(content.style.top === "120px" || content.style.top === "") {
        form.style.height = '80px'
        content.style.top = '200px'
        this.innerText = "Close"
    } else {
        form.style.height = '0px'
        content.style.top = "120px"
        this.innerText = "Add a Task +"
    }
})