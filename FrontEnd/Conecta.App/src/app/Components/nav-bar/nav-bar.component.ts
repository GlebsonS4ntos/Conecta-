import { NavbarService } from './../shared/navbar.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  LogoPath = 'assets/imgs/LogoProjeto.png';
  constructor(private router: Router, public navbarService: NavbarService) { }

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
    localStorage.clear();
  }
  login(){
    this.router.navigate(['/NavBar/Login']);
  }
  Sair(){
    this.router.navigate(['']);
    this.navbarService.visibilidadeOpcoes = true;
    this.navbarService.visibilidadeAdm = false;
    this.navbarService.visibilidadeAluno = false;
    this.navbarService.visibilidadeProfessor = false;
  }
}
