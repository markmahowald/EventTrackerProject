window.addEventListener('load', function(e) {
	console.log('document loaded');
	let errordiv = document.getElementById('errordiv)');

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

function reInit(){
	
	let transactionData = document.getElementById('transactionData');
	let transactionDataElements = transactionData.children;
	for (var i = 0; i <= transactionDataElements.length; i++) {
		transactionData.removeChild(transactionData.lastElementChild);
	}
	
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
	
};

function displayAllTransactions(transactions) {
	console.log('made it to display all transactions');
	let transactionDatadiv = document.getElementById('transactionData');
	let transHeading = document.createElement('h3');
	transHeading.textContent = 'Here are all the transactions stored:';
	transactionDatadiv.appendChild(transHeading);

	let ul = document.createElement('ul');
	transactionDatadiv.appendChild(ul);
	ul.setAttribute('id', 'currentTransactionList')
	
	for (let i = 0; i < transactions.length; i++) {
		let li = document.createElement('li');
		
		
//		delete functionality
		let deleteButton = document.createElement('button');
		deleteButton.value = "delete";
		deleteButton.textContent = 'Delete';
		deleteButton.value = transactions[i].id;

		
		
		deleteButton.addEventListener('click', function(e){
			console.log('in delete transaction function');
			let xhr = new XMLHttpRequest();
			let url = 'api/transactions/'+e.target.value;

			xhr.open('DELETE', url);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) {
						console.log('delete successful');
						reInit();
					}else{console.log('delete failed... maybe(1)')}
				}else{console.log('delete failed... maybe(2)')}
				}
			xhr.send();
		});

//		edit functionality
		let editButton = document.createElement('button');
		editButton.value = "edit";
		editButton.textContent = 'Edit';
		editButton.value = transactions[i].id;
		
		editButton.addEventListener('click', function(e){
			let editDiv = document.createElement('div');
			editDiv.style.visibility = 'hidden';
		});
		
		
		if (transactions[i].incomeOrExpense === 'expense') {
			li.setAttribute('style', 'color: red');
			li.textContent = ' Date: ' + transactions[i].date + ' Category: '
					+ transactions[i].category + '-> - $ '
					+ (transactions[i].amount)+ ' - '+ transactions[i].source;;
		} else {
			li.setAttribute('style', 'color: green');
			li.textContent = ' Date: ' + transactions[i].date + ' Category: '
					+ transactions[i].category + '-> $ '
					+ (transactions[i].amount)+ ' - '+ transactions[i].source;
		}
		li.insertBefore(deleteButton, li.firstChild);
		li.insertBefore(editButton, li.firstChild);
		
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
//		console.log (transaction);
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
					console.log("POST request failed.");
				}
			}
			let transactionJSON = JSON.stringify(transaction);
			xhr.send(transactionJSON);
			reInit()
		} else {
			console.log("POST request failed.");
		}
	});
};

function updateTransaction(e){
	
	
};
	