$(document).ready(function(){
    // event starts then action
    $(".myclick").click(function(){ //event
        $(this).hide();//action
    });
    $(".mydbclick").dblclick(function(){
        $(this).hide();
    });
    $(".mymouseleave").mouseleave(function(){
        // alert("Alert box popup!!")
    });

    
    $("#mydiv").on({
       mouseenter:function(){
           $(this).css("background-color","blue");
       },
        dblclick:function(){
        $(this).css("background-color","red");
       },
       click:function(){
        $(this).css("color","white");
      }
    });

    $("#hide").click(function(){
        $(".lead").hide("slow");
    });
    $("#show").dblclick(function(){
        $(".lead").toggle();
    })

    })
