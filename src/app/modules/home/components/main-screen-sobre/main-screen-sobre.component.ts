import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen-sobre',
  templateUrl: './main-screen-sobre.component.html',
  styleUrls: ['./main-screen-sobre.component.scss']
})
export class MainScreenSobreComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const mainSection = document.querySelector("section.main-teste") as HTMLElement;
    const alturaMain = mainSection.offsetHeight;
    console.log("Altura da seção main: " + alturaMain + "px");
  }
}
