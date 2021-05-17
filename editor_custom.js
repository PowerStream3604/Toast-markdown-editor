//import { ttb } from "../ttb_request.js";

if(!window.TOAST_EDITOR) window.TOAST_EDITOR = {};
document.addEventListener("DOMContentLoaded",()=>
{
	document.querySelectorAll('.ttb-editor').forEach((editor_node) =>
	{//editor_node.innerHTML = editor_node.innerText.replaceAll('&gt;','>')
		const toast_editor = new tui.Editor(
		{
			el: editor_node,
			initialEditType: 'markdown',
			previewStyle: 'vertical',
			height: editor_node.dataset.editorHeight,
			//initialValue: editor_node.innerHTML,
			//initialValue: editor_node.innerHTML.replaceAll('&gt;','>'),
			initialValue: unescapeHtml(editor_node.innerHTML),
			options: {linkAttribute: {target: '_blank'}	}
		});

		TOAST_EDITOR[editor_node.dataset.name] = toast_editor;
		
		const clipboard_data_holder = editor_node.querySelector(":scope #clipboard_data");
		window.addEventListener('paste', function(e)
		{
			console.log('e => path');
			console.dir(e.composedPath);
			e.composedPath().find((node) =>
			{
				if(!node.id)
				{return;}
				if(!node.id.match(/clipboard/))
				{
					return false;
				}
				if(node.id.match(/clipboard_data/))
				{
					// 여기 부분 수정 필요
					if(e.clipboardData.items[0].type.includes('image'))
					{
						window.clip_item = {type: 'image'};
						
						window.clip_item.blob = e.clipboardData.items[0].getAsFile();
		
						window.postMessage('COMMAND_UPLOAD','*');
					}
					return true;
				}
				
			});
		});

		// 1. 대상 선정
		let preview_target = document.querySelector('div.te-preview');
		
		window.addEventListener('message', function(e)
		{
			console.log('mess posted');
			if(e.origin !== location.origin) return;
			console.log(e.data);
			switch(e.data)
			{
				case "COMMAND_UPLOAD":
				{
					console.log('in case');
					if(e.source.command)
					{
						console.log('in case -> if');
						window.editor = toast_editor;
						e.source.command.type="UPLOAD";
						e.source.command.do.call(e.source.page);
					}
					break;
				}
				case "COMMAND_WRITE":
				{
					console.log('in case');
					if(e.source.command)
					{
						console.log('in case -> if');
						e.source.command.type="WRITE";
						window.editor = toast_editor;
						e.source.command.do.call(e.source.page);
					}
				}
				case "COMMAND_MODIFY":
				{
					console.log('in case');
					if(e.source.command)
					{
						console.log('in case -> if');
						e.source.command.type="MODIFY";
						window.editor = toast_editor;
						e.source.command.do.call(e.source.page);
					}
				}
			}
		});
	});
});
	let body = document.querySelector('body');
	
	function success_prompt()
	{
		var obj = document.createElement('div');
		obj.id = "prompt";
		obj.innerText = 'SUCCESS';
		obj.style.cssText = `background-color: green;
		color: white;
		position: absolute;
		right: 35%;
		top: 70%;
		height: 5%;
		/* margin: auto; */
		width: 25%;
		min-width: fit-content;
		border-radius: 15px;
		height: fit-content;
		padding: 15px;
		text-align: center;
		animation-name: show-to-none;
		animation-duration:3s;`;
		document.querySelector('section').appendChild(obj);
		setTimeout(function(){window.document.body.querySelector('section> div#prompt').remove()},2500);
		//window.document.body.innerHTML += '';
	}
	// fail prompt
	function fail_prompt()
	{
		var obj = document.createElement('div');
		obj.id = "prompt";
		obj.innerText = 'FAIL';
		obj.style.cssText = `background-color: red;
		color: white;
		position: absolute;
		right: 35%;
		top: 70%;
		height: 5%;
		/* margin: auto; */
		width: 25%;
		min-width: fit-content;
		border-radius: 15px;
		height: fit-content;
		padding: 15px;
		text-align: center;
		animation-name: show-to-none;
		animation-duration:3s;`;
		document.querySelector('section').appendChild(obj);
		setTimeout(function(){window.document.body.querySelector('section> div#prompt').remove()},2500);
	}
	/* 이 웹페이지를 상징하는 시멘틱 객체 */
	window.page = {};
	page.field = {};
	page.reload = function(form_node)
	{
		form_node.querySelectorAll(':scope input, :scope textarea, :scope select').forEach((ele) => 
		{
			console.log(ele.name);
			this.field[ele.name] = ele.value;
		});
	}
	page.get_page_formData = function()
	{
		if(command.type == "UPLOAD")
		{
			console.log('page.get_page_formData');
			console.dir(window.clip_item);
			if(window.clip_item.type.includes('image'))
			{
				console.log('adding to formdata');
				let formData = new FormData();
				formData.append('image[]', window.clip_item.blob);
				//window.clip_item = null;
				return formData;
			}
		}
		if(command.type == "WRITE" || command.type == 'MODIFY')
		{
			let formData = new FormData();
			// formData.append('title', title.value);
			// formData.append('writer', writer.value);
			for(const value in page.field)
			{
				formData.append(value, page.field[value]);
				console.log(value + ":" + page.field[value]);
			}
			formData.append('content', window.editor.getMarkdown());
			return formData;
		}
	}
	
	/* command 객체는 customizing 필요 */
	window.command = {};
	command.do = function()
	{
		console.log('command.do');
		this.reload(document.querySelector("form.ttb-content"));
		request.do(this.get_page_formData());
	}
	/* 외부로 전송 */
	let request = {};
	
	request.get_setting = () =>
	{
		if(command.type == "UPLOAD")
		{
			request.setting =
			{
				use:'SEND',
				method: 'POST',
				action_url: '/loose_couple/save-image',
				callback: function(json)
				{
					if(100 == json.code)
					{
						// 여기서 upload 성공이라는 prompt box를 화면 가운데 출력한다.
						//alert('upload success');
						success_prompt();
						window.editor.insertText("![image](//" + window.location.hostname + json.url + ")");
					}
					else{fail_prompt(); alert(json.message);} 
				},
				custom_header:{}//'Content-Type': 'multipart/form-data'}
			}
		}
		else if(command.type == "WRITE")
		{
			request.setting = 
			{
				use:"SEND",
				method:"POST",
				action_url:'/loose_couple/write',
				callback: function(json)
				{
					if(100 == json.code)
					{
						alert("Write Complete");
						window.location.href = "//dev-admin.nefone.net/loose_couple/main";
					}
					if(100 != json.code)
					{
						alert('fail');
					}
				}
			}
		}
		else if(command.type == "MODIFY")
		{
			request.setting = 
			{
				use:'SEND',
				method: 'POST',
				action_url: '/loose_couple/modify',
				callback: function(json)
				{
					if(100 == json.code)
					{
						//success_prompt();
						alert("Modify Complete");
						window.location.href = "//dev-admin.nefone.net/loose_couple/main";
					}
				}
			}
		}
		return request.setting;
	}
	request.do = function(formData)
	{
		console.log('get_setting 확인 위한 request입니다.');
		console.dir(this);
		let setting = this.get_setting();
		ttb.request(setting.use, setting.method, setting.action_url, formData, setting.callback, setting.custom_header);
	};
