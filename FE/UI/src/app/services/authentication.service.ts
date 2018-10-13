import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import {AppConfig} from '../config/app.config'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let url = "http://freshers.gadgeon.com/login"
        let data = {
            "email":username,
            "password":password
        }
        let userlogin;
        return this.http.post(url,data,{
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            observe: 'response'
          });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    }
}