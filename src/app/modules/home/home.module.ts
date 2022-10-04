import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './components/header/header.component';
import { ExplorerNavigationComponent } from './components/explorer-navigation/explorer-navigation.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideIconComponent } from './components/aside-icon/aside-icon.component';
import { MainScreenSobreComponent } from './components/main-screen-sobre/main-screen-sobre.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MainScreenProjectsComponent } from './components/main-screen-projects/main-screen-projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainScreenContactComponent } from './components/main-screen-contact/main-screen-contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ExplorerNavigationComponent,
    MainScreenComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    AsideIconComponent,
    MainScreenSobreComponent,
    ProjectsComponent,
    MainScreenProjectsComponent,
    ContactComponent,
    MainScreenContactComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
