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

// Отправка опечаток на почту
/*document.addEventListener("DOMContentLoaded", () => {
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
		var jivoMess =  document.getElementsByClassName(".inputField_G5 __textarea_1Z __bluredEmpty_1o")[0];
		document.querySelector(".inputField_G5 __bluredEmpty_1o")[0].value = 'ewewewe@fcgg.kkk';		
		jivoMess.value(`${messageErrorModal.value} (${urlErrorModal.value})`);

		document.querySelector(".button_Jn _green_1q").click();
	}
  }); */

// Папытка номер два



$elements = $("input, textarea, button");
$elements.keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (this.nodeName === "BUTTON") {
            $(this).click();
        }
       $(this).next().focus();           
    }
});

// Ñêðèïò îòïðàâêè ñîîáùåíèé îá îøèáêå http://mistakes.ru/script/mistakes_dev
// Âåðñèÿ 4.1
// 27.04.2015
var loc = window.location;
var mis;
nN = navigator.appName; 

function createMessage() {
// Èçìåíèòå ñëåäóþùóþ ñòðîêó. Çäåñü íóæíî óêàçàòü ïóòü ê ôàéëó mistakes.php
  var container = document.createElement('div')
  var scroll = dde.scrollTop || db.scrollTop;
  var mtop = scroll + 100 + 'px';
  var mleft = Math.floor(dde.clientWidth/2) - 175 + 'px';
  container.innerHTML = '<div id="mistake">\
  <div id="m_window" style="top:' + mtop + '; left:' + mleft + '";>\
        <iframe frameborder="0" name="mis" id="m_frame" src="' + misphploc + '"></iframe></div> \
  </div></div>'

  return container.firstChild
}

function positionMessage(elem) {
  elem.style.position = 'absolute';
  var pageheight = Math.max(dde.scrollHeight, db.scrollHeight, dde.clientHeight);
  var pagewidth = Math.max(dde.scrollWidth, db.scrollWidth, dde.clientWidth);
  elem.style.height = pageheight + 'px';
  elem.style.width = pagewidth + 'px';
}

function winop() {
  dde=document.documentElement;
  db=document.body;
  var messageElem = createMessage()
  positionMessage(messageElem)
  db.appendChild(messageElem)
}

function getText(e) 
{
        if (!e) e= window.event; 
        if((e.ctrlKey) && ((e.keyCode==10)||(e.keyCode==13))) 
        {CtrlEnter();} 
    return true;}
    
function mis_get_sel_text(){
   if (window.getSelection) {
    txt = window.getSelection();
    selected_text = txt.toString();
    full_text = txt.anchorNode.textContent;
    selection_start = txt.anchorOffset;
    selection_end = txt.focusOffset;
  }
  else if (document.getSelection) {
    txt = document.getSelection();
    selected_text = txt.toString();
    full_text = txt.anchorNode.textContent;
    selection_start = txt.anchorOffset;
    selection_end = txt.focusOffset;
  }
  else if (document.selection) {
    txt = document.selection.createRange();
    selected_text = txt.text;
    full_text = txt.parentElement().innerText;

    var stored_range = txt.duplicate();
    stored_range.moveToElementText(txt.parentElement());
    stored_range.setEndPoint('EndToEnd', txt);
    selection_start = stored_range.text.length - txt.text.length;
    selection_end = selection_start + selected_text.length;
  }
  else {
    return;
  }
  var txt = {
    selected_text: selected_text,
    full_text: full_text,
    selection_start: selection_start,
    selection_end: selection_end
  };
  return txt;
}

function mis_get_sel_context(sel) {
  selection_start = sel.selection_start;
  selection_end = sel.selection_end;
  if (selection_start > selection_end) {
    tmp = selection_start;
    selection_start = selection_end;
    selection_end = tmp;
  }
  
  context = sel.full_text;

  context_first = context.substring(0, selection_start);
  context_second = context.substring(selection_start, selection_end);
  context_third = context.substring(selection_end, context.length);
  context = context_first + '<strong>' + context_second + '</strong>' + context_third;
  
  context_start = selection_start - 60;
  if (context_start < 0) {
    context_start = 0;
  }

  context_end = selection_end + 60;
  if (context_end > context.length) {
    context_end = context.length;
  }

  context = context.substring(context_start, context_end);

  context_start = context.indexOf(' ') + 1;

  if (selection_start + 60 < context.length) {
    context_end = context.lastIndexOf(' ', selection_start + 60);
  }
  else {
    context_end = context.length;
  }

  selection_start = context.indexOf('<strong>');
  if (context_start > selection_start) {
    context_start = 0;
  }

  if (context_start) {
    context = context.substring(context_start, context_end);
  }

  return context;
}

function CtrlEnter(){
    var sel = mis_get_sel_text();
    if (sel.selected_text.length > 300) {
		alert('Не так не пайдет- давай меньше 300 символов');
    }
    else if (sel.selected_text.length == 0) {
		alert('Выдели какой нибудь символ!');
    }
    else {
      // Get selection context.
      mis = mis_get_sel_context(sel);
      winop();

    }
  };
  
 function PressLink(){
		mis = 'Ïîæàëóéñòà, îïèøèòå îøèáêó â êîììåíòàðèè.';
		winop();
  };

document.onkeypress = getText;
