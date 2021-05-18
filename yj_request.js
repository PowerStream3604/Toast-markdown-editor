/* 하단 부분은 필요시 수정하고 모듈로 변환하여 통신시 사용하도록 만들어두삼 */
/* 브라우저 환경에서 통신시 사용할 통신 인터페이스formData는 new FormData() 임 */
const ttb = {};
ttb.request = function(use, method, url, formData, callback, custom_headers)
{
	if (use == "SEND")
	{
		let headers = {
			//'Content-Type': 'application/json',
			//'Accept': 'application/json'
			//'Content-Type': 'application/json',
			//'Access-Control-Allow-Origin':'*'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		};

		if (6 == arguments.length && "object" === typeof custom_headers && custom_headers !== null)
		{
			console.log('in header');
			headers = custom_headers;
		}

		let param = {
			method: method, // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'include', // include, *same-origin, omit
			headers: headers,
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer' // no-referrer, *client
		};

		if (false === (formData instanceof FormData))
		{
			formData = JSON.stringify(formData, null, 2);
		}

		if (!method.match(/GET|HEAD/i)) param.body = formData; // body data type must match "Content-Type" header

		fetch(url, param).then(function(response)
		{
			try
			{//console.log(response.text());

				if (response.ok) return response.json();
				
			}
			catch (error)
			{
				throw new Error('Server response not json....' + error.message + response);
			}

		}).then(function(json)
		{
			//if (100 == json.code && json.url && callback) callback(json);
			if (callback) callback(json);

			console.log(json);

			return true;
		});
	}
	if (use == "REDIRECT")
	{
		var params = "?";
		for (var pair of formData.entries())
		{
			params += pair[0] + "=" + pair[1]+"&";
		}
		console.log(url + params);
		window.location.href = url + params;
	}
};
ttb.redirect = function() {

}
//export { ttb }
