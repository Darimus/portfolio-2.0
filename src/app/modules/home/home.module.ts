import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ExplorerNavigationComponent } from './components/explorer-navigation/explorer-navigation.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ExplorerNavigationComponent,
    MainScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
