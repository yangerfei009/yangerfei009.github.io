$(document).ready(function(){
	$('button').click(function(){
	$.get("JS/ceshi.php",function(data,status){
			alert("数据: " + data + "\n状态: " + status);
		});
	
	});
	
	
});
