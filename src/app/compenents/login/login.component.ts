import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  active: boolean = false;

  activedButton(): boolean {
    this.active = !this.active
    return this.active
  }
}
