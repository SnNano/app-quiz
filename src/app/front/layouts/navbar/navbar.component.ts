import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show:boolean=false;
  constructor(
  ) { }

  ngOnInit(): void {
    if(localStorage.length>0){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }
   onLogOut(){
    localStorage.clear();
    window.location.reload();
   }
}
