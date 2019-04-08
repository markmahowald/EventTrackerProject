## Finance Tracker App
![Landing Screen](https://img.publishthis.com/images/clientImages/cid1235/2015/05/e/c/d/ecddd192a9076283e2d5fcfb617d9702_clientImage_1000x667_xlarge_original_1.jpg)

### Collaborators

Mark Mahowald

### Overview

To continue learning RESTful design & angular development, studends were tasked with developing an application of their choice from database through rest endpoints, all the way to a Angular front end deployed to AWS. 

I chose to do an expense tracking application, and called it ExpenseTracker. 

### Back End

#### Database
The database for this project is a Mysql DB built in Mysql Workbench. 

#### End Points

#### Account Endpoints
* Index accounts: Get -> http://3.17.252.182:8080/expenseREST/api/accounts 
* Request a single account by ID:Get ->  http://3.17.252.182:8080/expenseREST/api/accounts/#
* Post a new account via Json:Post ->  http://3.17.252.182:8080/expenseREST/api/accounts
* Modify an existing account: Put: -> http://3.17.252.182:8080/expenseREST/api/accounts/#
* Delete an existing account: Delete -> http://3.17.252.182:8080/expenseREST/api/accounts/#

#### Transaction end points
* Index transactions: Get -> http://3.17.252.182:8080/expenseREST/api/transactions 
* Request a single transaction by ID:Get ->  http://3.17.252.182:8080/expenseREST/api/transactions/#
* Post a new transaction via Json:Post ->  http://3.17.252.182:8080/expenseREST/api/transactions
* Modify an existing transaction: Put: -> http://3.17.252.182:8080/expenseREST/api/transactions/#
* Delete an existing transaction: Delete -> http://3.17.252.182:8080/expenseREST/api/transactions/#


### Front End
This application was built using Angular in microsoft Visual Studio Code. It communicates with the endpoints through an HTTP Client built into the Service.  

### Technologies Used

* Spring Boot
* JPA
* MySQL
* Java 8 
* Slack
* Gradle
* AWS
* MAMP
* Angular
* Botstrap
* Angular Material

