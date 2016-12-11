$(document).ready(function(){
	$("#imageForm").submit(function(event) {
		alert "Successfully Uploaded Images";
		//var theFile = $(":file")[0].files[0];
		//var formData = new FormData();
		//formData.append('images', theFile);
		event.preventDefault();
	});
});