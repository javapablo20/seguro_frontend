import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'Register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  active: boolean = false;

  activedButton(): boolean {
    this.active = !this.active
    return this.active
  }

  private formBuilder = inject(FormBuilder);
  registerForm = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    date: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  })

  get formControls() {
    return this.registerForm.controls;  // Retorna os controles do formulário em um objeto
  }

  isPasswordMatching(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }
  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert('Por favor, preencha os campos corretamente!');
      return;
    }

    if (!this.isPasswordMatching()) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Dados do formulário', this.registerForm.value);
    alert('Formulário enviado com sucesso!');
  }
}
