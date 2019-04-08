import { TransactionServiceService } from './services/transaction-service.service';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { TransactionComponent } from './components/transaction/transaction.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // TransactionComponent,
    TrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule, 
    MatSortModule,
    BrowserAnimationsModule, 
    FormsModule,
    NgbModule,
    HttpClientModule,
   
  ],
  providers: [
    TransactionServiceService,
  ],
  bootstrap: [AppComponent],
})



export class AppModule { }
