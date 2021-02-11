import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FirstComponent } from './components/first/first.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { HomeComponent } from './components/home/home.component';
import { SecondComponent } from './components/second/second.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { Secondpage1Component } from './components/secondpage1/secondpage1.component';

const routes: Routes = [


  {
    path:'', component: HomeComponent

  },


  {
    path:'first',
    component: FirstComponent,
    children:[
      {
        path:'', component : FirstComponent

      }
      
      ,{
      path:'firstpage', component : FirstpageComponent
    }]


  },


  {

    path:'second',
    component: SecondComponent,
    children:[
      {
        path:'', component : SecondComponent

      }
      
      ,
      {
        path:'secondpage', component: SecondpageComponent


      },
      
      {

        path:'secondpage1', component: Secondpage1Component
      }
    ]


  },



  {
  path:'**' , component: ErrorComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
