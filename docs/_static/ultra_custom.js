// Jivosite Chat
(function () {
    d = document;
    s = d.createElement("script");
    s.src = "//code.jivosite.com/widget.js";
    s.async = 1;
    s.setAttribute("jv-id", "iEUmonxahY");
    d.getElementsByTagName("head")[0].appendChild(s);
})
();

// error sender
jQuery(function(){
	jQuery(document).keydown(function (e) {
		if ((e.ctrlKey && e.keyCode == 13) || (e.metaKey && e.keyCode == 13)) {
			e.preventDefault();
			var text = "";
		    if (window.getSelection) {
		        text = window.getSelection().toString();
		    } else if (document.selection && document.selection.type != "Control") {
		        text = document.selection.createRange().text;
		    }

		    if(text!==''){
		    	jQuery.ajax({
		    		url: 'molly.submit.php',
		    		type: 'post',
		    		data: 'text='+text
		    	});
		    }
		}
	});
});


var show_molly_widget=function(){
	document.write('<div style="cursor: crosshair;background: #ecf0f1; border-radius: 5px; padding: 10px;font-family: sans-serif; font-size: 10px; display: inline-block;white-space: nowrap;color: #607D8B;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABw0lEQVRIS+2VwU3jUBCGv0nMebMVwHaQDhI6oAMeHYRDkECJcEQE2uRAqIBHB6ECkgqACjZUAHdszerZfs4z2SiAxGElfLH8Mp5v/pl/HOGLL/ni/HwDNna4bJGJL3ZIon2i5MbGxwv3pumN20DrbRY77A78memPDCrbQczcDrsz/5wBzMmoSY0WIhNUO0TprYOY3jhGOH0LELSt9a1HkqQJeolIcxmjlpQre3704M5yQH80A2nZs66Y/lhRBnbYjT3AnZcVO1XCHcpucc9iA0VZ9fbsyKnHJ3xyZ2VSMAjbDuQUfBBgQBoi/NFaNM8B6NwTQ0UegFJWiOgO8IuUDnW592pLBfFlg+T1Lm+bLgoF+iBCxwepMskCCgVrZ5AmzyHAVJK7t9QrWOO2D7RoNTmP1KN2ZQYBZmUGpvd7D6ldu1mh/Mzu+bAHRNFk2ZYsS5bcxocv75sBeuDM5pyWF6GW+tYh6esUZIrqfmDVMvnSRZuGjC5QOQCdIvKjAikHWq28smgb970IKBZytoTwAjSKnyuVfwoQbH0IqfR81XHvLT90QP5p8ZB/Vv5pBeVCZRDZcw5ybllX5/cfzsYJ/v8t+gv2ywKTchRVeAAAAABJRU5ErkJggg==" style="float: left;margin-right: 5px;"/>Нашли&nbsp;ошибку?<br><span>Ctrl/Cmd&nbsp;+&nbsp;Enter</span></div>');
}
