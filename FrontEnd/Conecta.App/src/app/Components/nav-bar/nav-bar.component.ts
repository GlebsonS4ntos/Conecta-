import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  LogoPath = 'assets/imgs/LogoProjeto.png';
  navbarVisible = true;
  constructor() { }

  ngOnInit(): void {
    $(function(){
      $('ul li a').click(function(i){
        $('ul li a').removeClass('active');
        $(this).addClass('active');
      });
      $('ul li a').hover(function(i){
        $('ul li a').removeClass('active');
        $(this).addClass('active');
      });
    });
  }

  alterarVisibilidadeNavbar():void{
    this.navbarVisible = !this.navbarVisible;
  }
}
