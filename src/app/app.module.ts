import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookAddComponent } from './book-add/book-add.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import {RouterModule, Routes} from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'book-add',
    component: BookAddComponent
  },
  {
    path: 'book-update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookAddComponent,
    BookUpdateComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
