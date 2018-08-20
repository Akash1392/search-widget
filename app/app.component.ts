
import {Component, Pipe, PipeTransform} from '@angular/core';
import {Logger} from "./common/logger";


const Highcharts = require('highcharts')


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}


@Component({
    selector: 'application',
    template: `

        <div class="container">
            <router-outlet></router-outlet>
        </div>

`
})

export class AppComponent  {
    previewMenu: any;
    currentPreview: number;

    constructor(
        private _logger: Logger,

    ) {
        this.currentPreview =1;
    }


    showPreview = function(i) {
        this.currentPreview = i;

    }


}



