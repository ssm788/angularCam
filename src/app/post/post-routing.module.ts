import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full'},  
{ path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{ path: 'post/index', component: IndexComponent },
{ path: 'post/:postId/view', component: ViewComponent },
{ path: 'post/create', component: CreateComponent },
{ path: 'post/:postId/edit', component: EditComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
