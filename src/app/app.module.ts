import { CategoriesService } from './services/categories.service';
import {ProductService} from './services/product.service'
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Top100Component } from './Top100(product)/top100.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewComponent } from './Top100(product)/new/new.component';
import { NewformComponent } from './Top100(product)/newform/newform.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Top100Component,
    NewComponent,
    NewformComponent,
    ProductDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    HttpClientModule,
    MatDatepickerModule, MatNativeDateModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
       }
      }),
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    CarouselModule 
    
  ],
  providers: [
    CategoriesService,
    ProductService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
