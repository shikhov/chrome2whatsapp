function newMsg(phone) {
	if (phone == '') {
		phone = prompt('Введите номер:');
	}
	phone = processNumber(phone)

	if (phone.length != 11) {
		alert('Не похоже на номер телефона :-/')
	}
	else {
		window.open('https://web.whatsapp.com/send?phone=' + phone);
	}

	void 0;
}


title = 'Сообщение в WhatsApp'

chrome.contextMenus.create({
	"title": title,
	"contexts": ["selection"],
	"onclick": function myOnClick(info, tab) {
		newMsg(info.selectionText);
	}
});

chrome.contextMenus.create({
	"title": title,
	"contexts": ["page"],
	"onclick": function myOnClick(info, tab) {
		newMsg('');
	}
});
