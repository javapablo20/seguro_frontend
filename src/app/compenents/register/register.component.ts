import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Register',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // Pegar o valor do formulário e salvar com formbuilder.
  
  active: boolean = false;

  activedButton(): boolean {
    this.active = !this.active
    return this.active
  }
}
