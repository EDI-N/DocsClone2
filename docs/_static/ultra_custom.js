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
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
	window.addEventListener("click", windowOnClick);
	
function getErrorTextModal(e) 
{
        if (!e) e= window.event; 
        if((e.ctrlKey) && ((e.keyCode==10)||(e.keyCode==13))) 
        {trigger.click();} 
	return true;
}	
	document.onkeypress = getErrorTextModal;    
})
();

