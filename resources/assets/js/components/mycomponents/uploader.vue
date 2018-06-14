<template>
<center>
	<div class="imgContainer">
		<input 
			type="file" 
			:id="fileId" 
			class="file"  
			:name="fileName"
			v-on:change="readFile(fileId, imageId)" />									
		<img 
			:src="imageSrc" 
			height="100%" 
			width="100%" 
			class="imgUpload img-rounded" 
			:id="imageId"/>
		<span class="imgText">Select Image</span>
	</div>
</center>
</template>

<script type="text/javascript">
export default {
	props: {
		fileId: {default:'fileId'},
		fileName: {default:'file_name'},
		imageId: {default:'imageId'},
		imageSrc:{default:'#'}
	},
	methods: {
		/** 
		 * Print the selected file into image
		 * @param String fileID, String imageId
		 * 
		 */
		readFile: function(fileId, imageId) {
			var inputFile = $('#'+fileId)[0];
			var inputImage = $('#'+imageId);
			if (inputFile.files && inputFile.files[0]) {
				var reader = new FileReader();
				reader.onload = function(e) { inputImage.attr('src', e.target.result)};
				reader.readAsDataURL(inputFile.files[0]);
			}
		}
	}
}
</script>

<style type="text/css">
.imgContainer {
	position: relative; 
	height: 200px; 
	width: 200px;

}

.file {
	position: absolute; 
	height: 100%; 
	width: 100%; 
	opacity: 0;
}

.imgUpload {
	background-color: #ffffff;
	border:2px black solid;
}

.imgText {
	position: absolute; 
	left: 0; 
	top: 45%; 
	width: 100%; 
	text-align: center;
}
</style>