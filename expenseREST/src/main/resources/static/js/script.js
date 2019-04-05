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
	let xhrTotal = new XMLHttpRequest();
	let urlTotal = 'api/transactions/totals';
	
	xhrTotal.open('GET', urlTotal);
	xhrTotal.onreadystatechange = function() {
		if (xhrTotal.readyState === 4) {
			if (xhrTotal.status >= 200 && xhrTotal.status < 300) {
				let data = JSON.parse(xhrTotal.responseText);
				displayTotals(data);
			}
		}
	}
	xhrTotal.send();

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
		
		let editDiv = document.createElement('div');
		editDiv.textContent = 'test';	
//		editDiv.style.visibility = 'hidden';
		li.appendChild(editDiv);
		
		let editForm = document.createElement('form');
		li.appendChild(editForm);
		
		let incomeOrExpense = document.createElement('select');
		incomeOrExpense.setAttribute.name='incomeOrExpense';
		incomeOrExpense.setAttribute.textContent='Income Or Expense';
		editForm.appendChild(incomeOrExpense);
		
			let income = document.createElement('option');
			income.setAttribute.textContent='Income';
			income.setAttribute.value='income';
			incomeOrExpense.appendChild(income);
			
			let expense = document.createElement('option');
			expense.setAttribute.textContent='Expense';
			expense.setAttribute.value='expense';
			incomeOrExpense.appendChild(expense);
			
		
		
		let category = document.createElement('select');
		editForm.appendChild(category);
		
		
			let charity = document.createElement('option');
			expense.setAttribute.textContent='Charity';
			expense.setAttribute.value='Charity';
			category.appendChild(charity);
			
			let clothing = document.createElement('option');
			expense.setAttribute.textContent='Clothing';
			expense.setAttribute.value='Clothing';
			category.appendChild(clothing);
			
			let funMoney = document.createElement('option');
			expense.setAttribute.textContent='Fun Money';
			expense.setAttribute.value='FunMoney';
			category.appendChild(funMoney);
			
			let gifts = document.createElement('option');
			expense.setAttribute.textContent='Gifts';
			expense.setAttribute.value='Gifts';
			category.appendChild(gifts);
			
			
			let groceries = document.createElement('option');
			expense.setAttribute.textContent='Groceries';
			expense.setAttribute.value='Groceries';
			category.appendChild(groceries);
			
			let health = document.createElement('option');
			expense.setAttribute.textContent='Health';
			expense.setAttribute.value='Health';
			category.appendChild(health);
			
			let lifestyle = document.createElement('option');
			expense.setAttribute.textContent='Lifestyle';
			expense.setAttribute.value='Lifestyle';
			category.appendChild(lifestyle);
			
			let housing = document.createElement('option');
			expense.setAttribute.textContent='Housing';
			expense.setAttribute.value='Housing';
			category.appendChild(housing);
			
			let saving = document.createElement('option');
			expense.setAttribute.textContent='Saving';
			expense.setAttribute.value='Saving';
			category.appendChild(saving);
			
			let transportation = document.createElement('option');
			expense.setAttribute.textContent='Transportation';
			expense.setAttribute.value='Transportation';
			category.appendChild(transportation);
			
			let utilities = document.createElement('option');
			expense.setAttribute.textContent='Utilities';
			expense.setAttribute.value='Utilities';
			category.appendChild(utilities);
			
			let taxes = document.createElement('option');
			expense.setAttribute.textContent='Taxes';
			expense.setAttribute.value='Taxes';
			category.appendChild(taxes);
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		editButton.addEventListener('click', function(e){
			
			console.log(e.target.parentElement);
//			e.target.parentElement.editDiv.style.visibility = 'visible';
			
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

function displayTotals(data){
	let totalsDiv = document.getElementById('totals');
	let expense = data[0];
	let income = data[1];
	
	let h2 = document.createElement('h2');
	h2.textContent = ('Total Expenses: $'+expense+' & Total Income: $'+income);
	
	totalsDiv.appendChild(h2);
}

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
						reInit();
					}
					console.log("POST request failed.");
				}
			}
			let transactionJSON = JSON.stringify(transaction);
			xhr.send(transactionJSON);
			
		} else {
			console.log("POST request failed.");
		}
	});
};

function updateTransaction(e){
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};
	