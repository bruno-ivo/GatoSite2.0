import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostraMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  abreMenu(){
    this.mostraMenu = !this.mostraMenu;
  }

}
