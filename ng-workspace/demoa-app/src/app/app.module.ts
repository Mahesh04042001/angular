import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { AppFooterComponent } from './app.footer.component';
import { BoxaComponent } from './boxa/boxa.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'books',component:CatalogueComponent},
  {path:'addbook',component:BookformComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BoxaComponent,
    EmployeeFormComponent,
    BookListComponent,
    PriceDiscountPipe,
    BookComponent,
    TabComponent,
    CatalogueComponent,
    NewsComponent,
    MenuComponent,
    BookformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [HomeComponent,AppComponent,AppHeaderComponent,AppFooterComponent,EmployeeFormComponent]
})
export class AppModule { }
