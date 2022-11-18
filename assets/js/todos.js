var checked = false;
// checking off the marked item
$("ul").on("click","li",function(){
 if (!checked) {
  $(this).css("color", "grey",);
 $(this).css("text-decoration", "line-through");
 } else {
  $(this).css("color", "azure",);
 $(this).css("text-decoration", "none");
 }

 checked = !checked;
});
//click on x to delete
$("ul").on("click","span", function(event){
 $(this).parent().fadeOut(500,function(){
  $(this).remove()
 });
 event.stopPropagation();
});
//creating a new todo
$("#txt").keypress(function(event){
if(event.which === 13){
//grab the value of the new todo
var newText = $(this).val(); 
//reset the val
$(this).val("");
//create a new li and add to ul
$("ul").append("<li><span><i class='fa-solid fa-trash-can'></i></span> " + newText + "</li>");  
};
});
$(".fa-pencil").on("click", () =>{
$('input').fadeToggle();
});