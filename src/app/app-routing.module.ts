import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/home/pages/contact/contact.component';
import { GithubComponent } from './modules/home/pages/github/github.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ProjectsComponent } from './modules/home/pages/projects/projects.component';
import { SobreComponent } from './modules/home/pages/sobre/sobre.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent},
  {path: "github", component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
