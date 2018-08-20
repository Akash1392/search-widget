import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { Cookie } from 'ng2-cookies';
import {Router} from "@angular/router";
import {Logger} from "./logger";




@Injectable()
export class
Session  {
    username: string = null;
    public authenticated: boolean = false;
    token: string = null;
    role:number = null;
    language:string = null;
    FirstExp:string =null;
    firstexpbool:boolean = true;
    constructor(
        private logger: Logger
    ) {
        if(!this.FirstExp){

            this.FirstExp=localStorage.getItem('first');
            if(this.FirstExp=='2'){
                this.firstexpbool=true;
            }
            else{
                this.firstexpbool=false;
            }
        }
    }

    set(username, token, role) {
        //  this.logger.info("in Session : ");
        this.username = username;
        this.authenticated = true;
        this.token = token;
        this.role = role;
        this.logger.debug("User name from SET session ", this.username);

    }
    getUsername(){
        this.logger.debug("User name from GET session ", this.username);
        return this.username;
    }

    setlang(lang){
        this.language=lang;
    }

    setFirstExp(exp){
        this.FirstExp=exp;
        localStorage.setItem('first',this.FirstExp);
        if(this.FirstExp=='2'){
            this.firstexpbool=true;
        }
        else{
            this.firstexpbool=false;
        }

    }

    clear() {
        this.username = null;
        this.authenticated = false;
        this.token = null;
        localStorage.removeItem('first');
        this.FirstExp=null;
    }


};
