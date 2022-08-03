import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './components/header/header.component';
import { ExplorerNavigationComponent } from './components/explorer-navigation/explorer-navigation.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

//pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ExplorerNavigationComponent,
    MainScreenComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
