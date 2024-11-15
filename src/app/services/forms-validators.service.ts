import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserForm';

@Injectable({
  providedIn: 'root'
})
export class FormsValidatorsService {

  userInfo: UserInfo = {
    firstname: '',
    lastname: '',
    email: '',
    cpf: '',
    date: '',
    gender: '',
    password: '',
    confirmpassword:''
  }
  
  constructor() { }
}
