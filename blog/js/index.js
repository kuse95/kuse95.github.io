$(document).ready(function() {
	$.ajax({
		url:"./blog/data/index.json",
		dataType:"json",
		success:function(data) {
			console.log(data);
		}
	});
});