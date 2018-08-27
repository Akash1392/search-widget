import { NgModule  }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {Logger} from "./common/logger";
import {AppComponent, KeysPipe} from "./app.component";
import {ErrorHandler} from "./common/error-handler";

import {routing} from "./app.routing";
import {Location} from "@angular/common";
import {ApiService} from "./common/api-service";
import {SolarSearchComponent} from "./components/solar-search.component";

import {SearchPipe} from "./common/searchByPipe";

import {NguiDatetimePickerModule} from "@ngui/datetime-picker";
import {ImageUploadModule} from "angular2-image-upload";
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NguiDatetimePickerModule,
        ReactiveFormsModule,
        routing,
        ImageUploadModule.forRoot(),
        MyDatePickerModule,
//        FocusModule.forRoot()
    ],
    declarations: [
        AppComponent,
        SolarSearchComponent,
        SearchPipe


    ],
    providers: [ErrorHandler, Logger, Location, ApiService
    ],
    bootstrap:    [
        AppComponent
    ]
})



export class AppModule { }
