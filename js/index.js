$(function(){

/*	$("#change").click(function() {
		$("#result").load("more.html");
	});
*/

	$("#greet").click(function() {
	
		$.get("greet.php",{
			name: $("#name").val()
		},function(data) {
			$("#result").html(data);
		});
	
	});

});
