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

	submitForm();
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
			li.setAttribute('style', 'color: red');
			li.textContent = 'Date: ' + transactions[i].date + ' Category: '
					+ transactions[i].category + '-> - $ '
					+ (transactions[i].amount)+ ' - '+ transactions[i].source;;
		} else {
			li.setAttribute('style', 'color: green');
			li.textContent = 'Date: ' + transactions[i].date + ' Category: '
					+ transactions[i].category + '-> $ '
					+ (transactions[i].amount)+ ' - '+ transactions[i].source;
		}
		ul.appendChild(li);
	}
};

function submitForm() {document.submitTransactionForm.saveTrans.addEventListener('click',function(e) {
		e.preventDefault();
		let form = document.forms.submitTransactionForm;
		let transaction = {
			incomeOrExpense:  form.incomeOrExpense.value,
			date : form.transDate.value,
			category: form.category.value,
			amount: form.amount.value,
			source: form.source.value,
			
//			multiple accounts will be implemented in a future release. 
			account: { id: 1,
	            name: "checking",
	            total: 3000
	            }
		};
		console.log (transaction);
		if (!(transaction.date === null || transaction.category === null || transaction.amount === null)) {
	
//			console.log(transaction.date);
			let xhr = new XMLHttpRequest();
			let url = 'api/transactions/';
			xhr.open('POST', url);
			xhr.setRequestHeader("Content-type","application/json");
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status == 200 || xhr.status == 201) {
						var data = JSON.parse(xhr.responseText);
					}
					// TODO - write a post failure notification.
				}
			}
			let transactionJSON = JSON.stringify(transaction);
			xhr.send(transactionJSON);
		} else {
			console.log("POST request failed.");
		      

		}

	});
	
};