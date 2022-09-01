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
import { FormsModule } from '@angular/forms';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MainScreenSobreComponent } from './components/main-screen-sobre/main-screen-sobre.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ExplorerNavigationComponent,
    MainScreenComponent,
    HomeComponent,
    FooterComponent,
    AsideIconComponent,
    SobreComponent,
    MainScreenSobreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
