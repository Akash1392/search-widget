import {Component, Input, ElementRef} from "@angular/core";
import {ApiService} from "../common/api-service";




//import {FocusModule} from 'angular2-focus';

@Component({
    selector: 'user-login',
    templateUrl: "app/components/solar-search.component.html",
    styles: [`
        .login-form {
            background-color: rgba(255,255,255,0.75);
            padding: 20px;
        }

    `]

})

export class SolarSearchComponent{
    title: string;
    list:any[];
    temp2:boolean=false;

    constructor(
        private apiService: ApiService,



    ) {

        this.title = "";

    }

    //*********************************************************
    //This method executes when Search page loads
    //*********************************************************
    ngOnInit() {
                                                            //api_service call
               this.apiService.search()


    }
    //*********************************************************
    //When user search, this method is used
    //*********************************************************
    search =function() {

        this.temp2 = 1;
        // console.log("HI")
        this.apiService.search()                            //api_service call
        if (this.temp2 == 1 && this.title.length!=0){
            this.users = this.apiService.data
            var i;
            var y = [];
            for (i = 0; i < this.apiService.data.length; i++) {
                y.push(this.apiService.data[i].title)           //Loading content of "title" in y.
            }
            this.list = y
            // console.log("hi2")
            // console.log(this.x)
            // this.logger.debug("Users: ", this.apiService.data);
        }
    }


    search2 =function() {

            this.temp2 = 0;

    };

}