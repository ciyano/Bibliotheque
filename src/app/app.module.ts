import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGardService } from './services/auth-gard.service';
import { BooksService } from './services/books.service';

const appRoots : Routes=[

{path: 'auth/signup', component: SignupComponent},
{path: 'auth/signin', component:SigninComponent},
{path: 'books', canActivate:[AuthGardService],  component:BookListComponent},

{path: 'books/new',canActivate:[AuthGardService], component:BookFormComponent},

{path: 'books/view/:id',canActivate:[AuthGardService], component:SingleBookComponent},

{path: ' ',redirectTo: 'books',pathMatch:'full'},
{path: '**',redirectTo: 'books'},
]



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoots)

  ],
  providers: [AuthService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
