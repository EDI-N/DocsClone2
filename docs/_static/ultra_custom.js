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

(function () {
	var modal = document.querySelector(".error_modal");   
	var closeButton = document.querySelector(".close-button");
	closeButton.addEventListener("click", hideModal);

	var urlErrorModal = document.querySelector("#error_modal_url");
	var messageErrorModal = document.querySelector("#error_modal_message");

    function shwModal() {
        modal.style.visibility = "visible" ;
	}
	
	function hideModal() {
        modal.style.visibility = "hidden" ;
    }
		
function getErrorTextModal(e) 
{
        if (!e) e= window.event; 
        if((e.ctrlKey) && ((e.keyCode==10)||(e.keyCode==13))) 
        {shwModal();} 
	return true;
}	
	document.onkeypress = getErrorTextModal;    

	function sendHiddenJivoMessage()
	{
		var jivoMess =  document.querySelector(".inputField_G5 __textarea_1Z __bluredEmpty_1o");
		document.querySelector(".inputField_G5 __bluredEmpty_1o").value = 'ewewewe@fcgg.kkk';		
		jivoMess.value(`${messageErrorModal.value} (${urlErrorModal.value})`);

		document.querySelector(".button_Jn _green_1q").click();
	}
})
();

