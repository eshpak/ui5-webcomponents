import { html} from 'lit-html';
import '@ui5/webcomponents/dist/FileUploader.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/FileUploader',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-file-uploader

	accept="${ args['accept'] }" 
	?disabled="${ args['disabled'] }" 
	?hideInput="${ args['hideInput'] }" 
	?multiple="${ args['multiple'] }" 
	name="${ args['name'] }" 
	placeholder="${ args['placeholder'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
			<ui5-button icon="upload">Upload Images</ui5-button>
		
</ui5-file-uploader>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accept: "",
	
	disabled: false,
	
	hideInput: false,
	
	multiple: false,
	
	name: "",
	
	placeholder: "",
	
	value: "",
	
	valueState: "None",
	
};




const UploadmultipleimagesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-file-uploader id="fileuploader1" accept="image/*" multiple="true">			<ui5-button icon="upload">Upload Images</ui5-button>		</ui5-file-uploader>		<div id="result"></div>			</div>
${ 
  (function () { setTimeout(function () { 
			var fileUploader = document.querySelector("#fileuploader1"),
				resultDiv = document.querySelector("#result");
			fileUploader.addEventListener("change", function(event) {
				var files = event.target.files;

				if (!files.length) {
					resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
				} else {
					resultDiv.innerHTML = "";
					resultDiv.style.marginTop = "1rem";

					for (var i = 0; i < files.length; i++) {
						var img = document.createElement("img");
						img.src = URL.createObjectURL(files[i]);
						img.width = 100;
						img.height = 100;
						img.onload = function() {
							URL.revokeObjectURL(img.src);
						}
						resultDiv.appendChild(img);
					}
				}
			})
		 }, 500) })()
}`;
}

export const Uploadmultipleimages = UploadmultipleimagesTemplate.bind({});

Uploadmultipleimages.storyName = `Upload multiple images`;
Uploadmultipleimages.parameters = {
  controls: {
		disabled: true,
	}
};const UploadSingleFileTemplate = () => {
	
return html`
<div class="snippet">		<ui5-file-uploader>			<ui5-button>Upload Single File</ui5-button>		</ui5-file-uploader>	</div>
${ 
  (function () { setTimeout(function () { 
	const fileUploader = document.querySelector("#fileuploader1"),
		resultDiv = document.querySelector("#result");
	fileUploader.addEventListener("change", event => {
		const files = event.target.files;

		if (!files.length) {
			resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
		} else {
			resultDiv.innerHTML = "";

			for (let i = 0; i < files.length; i++) {
				const img = document.createElement("img");
				img.src = URL.createObjectURL(files[i]);
				img.width = 100;
				img.height = 100;
				img.onload = () => {
					URL.revokeObjectURL(img.src);
				}
				resultDiv.appendChild(img);
			}
		}
	})
 }, 500) })()
}`;
}

export const UploadSingleFile = UploadSingleFileTemplate.bind({});

UploadSingleFile.storyName = `Upload Single File`;
UploadSingleFile.parameters = {
  controls: {
		disabled: true,
	}
};const FileUploaderWithNoInputTemplate = () => {
	
return html`
<div class="snippet">		<ui5-file-uploader hide-input>			<ui5-button>Upload File</ui5-button>		</ui5-file-uploader>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const FileUploaderWithNoInput = FileUploaderWithNoInputTemplate.bind({});

FileUploaderWithNoInput.storyName = `File Uploader With No Input`;
FileUploaderWithNoInput.parameters = {
  controls: {
		disabled: true,
	}
};const CustomFileUploadersTemplate = () => {
	
return html`
<div class="snippet">		<ui5-file-uploader hide-input>			<ui5-avatar icon="upload"></ui5-avatar>		</ui5-file-uploader>		<ui5-file-uploader hide-input>			<ui5-badge>Upload File</ui5-badge>		</ui5-file-uploader>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CustomFileUploaders = CustomFileUploadersTemplate.bind({});

CustomFileUploaders.storyName = `Custom File Uploaders`;
CustomFileUploaders.parameters = {
  controls: {
		disabled: true,
	}
};const ButtonWithIconFileUploaderTemplate = () => {
	
return html`
<div class="snippet">		<ui5-file-uploader>			<ui5-button icon="upload">Upload</ui5-button>		</ui5-file-uploader>		<ui5-file-uploader>			<ui5-button icon="upload" icon-end>Upload</ui5-button>		</ui5-file-uploader>		<ui5-file-uploader>			<ui5-button icon="upload" icon-only></ui5-button>		</ui5-file-uploader>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ButtonWithIconFileUploader = ButtonWithIconFileUploaderTemplate.bind({});

ButtonWithIconFileUploader.storyName = `Button With Icon File Uploader`;
ButtonWithIconFileUploader.parameters = {
  controls: {
		disabled: true,
	}
};
