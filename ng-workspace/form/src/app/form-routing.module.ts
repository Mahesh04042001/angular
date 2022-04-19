import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'child/:id/:name',component:ChildComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
