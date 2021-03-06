import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {  AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import {AngularFireModule} from 'angularFire2'

@Injectable()
@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private afAuth: AngularFireAuth,
        private authenticationService: AuthenticationService) {
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
    }
    loginFlag = false
    ngOnInit() {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    Register() {
        this.router.navigateByUrl('/user-profile')
    }
    validate() {
        if (this.model.name == undefined || this.model.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    authProvider;
    IsInvalidUser =false;
    message;
    
    login() {
       // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(success =>{
            //this.router.naviga
       //});
        if (this.model.username == "hr@gadgeon.com" && this.model.password == "Hr@Gad#2018") {
            localStorage.setItem("adminLoginGad", "true");
            localStorage.setItem('userLogin', 'true');
            localStorage.setItem('username', this.model.username);
            this.loginFlag = true;
            this.loading = true;
            this.router.initialNavigation();
            this.router.navigateByUrl('/candidate-details')
            location.reload();
        }
        else {
            this.authenticationService.login(this.model.username, this.model.password).subscribe(
                data => {
                    console.log(data["body"])
                    if (data["body"]['succuss'] == true) {
                        console.log("Success")
                        localStorage.setItem('userLogin', 'true');
                        localStorage.setItem('username', this.model.username);
                        this.loading = true;
                        localStorage.setItem("gadLoginTocken", data["body"]["token"])
                        this.loginFlag = true;
                        this.router.initialNavigation();
                        this.router.navigateByUrl('/candidate-details')
                    }
                },
                error => {
                    this.IsInvalidUser = true;
                    this.message = "Invalid username or password"
                });
        }
    }
}
