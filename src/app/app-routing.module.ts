import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecourseComponent } from './createcourse/createcourse.component';

const routes: Routes = [
  {path: "createcourse", component:CreatecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
