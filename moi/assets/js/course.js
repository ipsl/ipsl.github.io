
$(document).ready(function(){
  var exercise_counter = 1;
  $(".note_emoji").html('🧐 ');
  $(".note_emoji").attr('title', 'Optional');
    //$(".note_emoji").tooltip();
    //$(".note_emoji").tooltip({show: {effect:"none", delay:0}});
    $(".highlight_emoji").html('💡');
    $(".highlight_emoji").attr('title', 'Highlight')
    //$(".exercise_emoji").html('✍'+ exercise_counter++ + ")");
    //$(".highlight_emoji").attr('title', 'Exercise')
  });

function showSolution(btn,id) {
  if (Array.isArray(id)){
    for (var i = 0; i<id.length; ++i){
      showSolutionExecuter(btn, id[i]);
    }
  } else {
    showSolutionExecuter(btn,id);
  }
}

function showSolutionExecuter(btn,id) {
  var x = document.getElementById(id);
  console.log(x.id);
  console.log(x.tagName.toLowerCase());
  if (x.tagName.toLowerCase()=="div") {
    if (x.style.display == "none") {
      x.style.display = "block";
      btn.innerHTML = "Hide solution"; 
    } else if (x.style.display == "block") {
      x.style.display = "none"; 
      btn.innerHTML = "Show solution";
    }
  }
  if (x.tagName.toLowerCase()=="span") {
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible"; 
      btn.innerHTML = "Hide solution"; 
    } else if (x.style.visibility == "visible") {
      x.style.visibility = "hidden";
      btn.innerHTML = "Show solution";
    }
  }
}
