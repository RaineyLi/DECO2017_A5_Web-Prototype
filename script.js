function justify_priority(){
            var priority;
            if(document.getElementById("High").checked){
                priority=document.getElementById("High").value;
            }
            else if(document.getElementById("Med").checked){
                priority=document.getElementById("Med").value;
            }
            else if(document.getElementById("Low").checked){
                priority=document.getElementById("Low").value;
            }
            return priority;
        }

        }
        addtask();