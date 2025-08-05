import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private router: Router){}

  login(){
    this.router.navigate(['/admin'],{
      state: {usuario: 'Carlos', nivel: 'admin'},
    })
  }
}
