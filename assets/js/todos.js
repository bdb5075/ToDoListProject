// Check Off Specific To-Dos By Clicking 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
});

//Click on X to delete To-Do 
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabbing new To-Do text from input
		var toDoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});