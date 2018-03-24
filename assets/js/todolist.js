//Check off li's by clicking X
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Click on X to delete todo
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13)
	{
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + todo + "</li>");
	}
});

$("#edit").on("click", function(){
	$("input").fadeToggle();
});