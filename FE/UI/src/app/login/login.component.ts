import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
    }
    ngOnInit() {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    Register(){
        this.router.navigateByUrl('/user-profile')
    }
    login() {

        if (this.model.username == "hr@gadgeon.com" && this.model.password == "Hr@Gad#2018") {
            localStorage.setItem("adminLoginGad", "true");
            localStorage.setItem('userLogin', 'true');
            localStorage.setItem('username', this.model.username);
            this.loading = true;
            this.router.initialNavigation();
            location.reload();
            this.router.navigateByUrl('/candidate-details')
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
                        localStorage.setItem("gadLoginTocken",data["body"]["token"])
                        this.router.initialNavigation();
                        location.reload();
                        this.router.navigateByUrl('/candidate-details')
                    }
                },
                error => {
                });
        }
    }
}