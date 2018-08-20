import {Injectable} from "@angular/core";

import {Http, Headers, RequestOptions, Response} from '@angular/http';

import 'rxjs/Rx';

import {Router} from "@angular/router";
import {Logger} from "./logger";
import {Session} from "./session";

@Injectable()
export class
ApiService {
    apiUrl: string;
    data:any[];


    constructor(private http: Http,
                private router: Router,
                private logger: Logger,
                private session: Session,
                ) {
        this.apiUrl = config.api.url;


    }


    //*********************************************************
    //Search method
    //*********************************************************
    search(): Promise<any> {

        this.logger.debug("In Api service getUsers");
        return new Promise((resolve, reject) => {

            var url = this.apiUrl + "/posts";

            this.http.get(url)
                .toPromise()
                .then(response => {
                    this.logger.info("Get Blog response ", response.json());
                    this.data = response.json();
                   // resolve(this.mapUserListModel(response.json().content));
                })
                .catch(error => {                                                                           //if call fails throw error message
                    this.logger.debug("From api service catch: ", error);
                    reject({});
                });

        });
    }


};