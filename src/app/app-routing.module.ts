import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewformComponent } from './Top100(product)/newform/newform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top100Component } from './Top100(product)/top100.component';
import { NewComponent } from './Top100(product)/new/new.component';


const routes: Routes = [

    {path:'Employee/:id' , component:ProductDetailsComponent },
    {path:'products' , component:NewComponent },
    {path:'' , component:NewComponent },
    {path:'ManageEmployee' , component:Top100Component },
    {path:'ManageEmployee/new' , component:NewformComponent },
    {path:'ManageEmployee/new/:id' , component:NewformComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
