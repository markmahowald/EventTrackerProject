window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	let xhr = new XMLHttpRequest();
	let url = 'api/transactions/';

	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				let data = JSON.parse(xhr.responseText);
				displayAllTransactions(data);
			}
		}
	}
	xhr.send();
}

function displayAllTransactions(transactions) {
	console.log('made it to display all transactions');
	let transactionDatadiv = document.getElementById('transactionData');
	let transHeading = document.createElement('h3');
	transHeading.textContent = 'Here are all the transactions stored:';
	transactionDatadiv.appendChild(transHeading);

	let ul = document.createElement('ul');
	transactionDatadiv.appendChild(ul);

	for (let i = 0; i < transactions.length; i++) {
		let li = document.createElement('li');

		if (transactions[i].incomeOrExpense === 'expense') {
			li.textContent = 'Category: '+ transactions[i].category+ '-> - $ '+(transactions[i].amount);
		} else {
			li.textContent = 'Category: '+ transactions[i].category+ '-> $ '+(transactions[i].amount);		}
		ul.appendChild(li);
	}
}