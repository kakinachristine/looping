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
    });
    $(".chainBtn").click(function(){
        $(".chaining")
        .css("color","green")
        .slideUp(2000)
        .slideDown(2000,function(){
            $(".chaining")
            .css("background-color","pink")

            
        });
        
    });
    $("#showtext").click(function(){
        alert("THE TEXT:" +$("#test").text());
    });
    
    $("#showhtml").click(function(){
        alert("SHOW ME THE CODE:" + $("#test").html())
    });
    $("#showval").click(function(){
        alert("SHOW ME THE CODE:" + $("#text").val())
    });

})
