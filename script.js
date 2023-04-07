document.querySelector("#addBtn").onclick = function () {
  if (document.querySelector("#addTask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#taskList").innerHTML += `
            <div class="singleTask">
                <span id="taskName">
                    ${document.querySelector("#addTask input").value}
                </span>
                <button class="remove">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".remove");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".singleTask");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#addTask input").value = "";
  }
};

const widgetContainer = document.querySelector(".widget-container");

widgetContainer.addEventListener("click", () => {
  widgetContainer.classList.toggle("clicked");
});
