alert("Js connected");
let btn= document.getElementById("btn");
let display= document.getElementById("display");
let list= document.getElementById("list");

btn.addEventListener("click",
    function(){
        let task= display.value;
        if (task=== ""){
            alert("Enter today's task");
            return;
        }

        let newtask= document.createElement("li");
        newtask.innerText= task;

        let removebtn= document.createElement("button");
        removebtn.innerText= "Remove";
        removebtn.classList.add("removebtn");
        removebtn.addEventListener("click",
            function(){
                newtask.remove();
            }
        )

        newtask.appendChild(removebtn);
        list.appendChild(newtask);

        display.value= "";
    }
);