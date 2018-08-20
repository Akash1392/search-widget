/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'angular2-highcharts': 'node_modules/angular2-highcharts',
            'highcharts': 'node_modules/highcharts',
            'angular2-focus': 'node_modules/angular2-focus',
            'ng2-cookies': 'node_modules/ng2-cookies/cookie.js',
            'ng2-charts': 'npm:ng2-charts/bundles/ng2-charts.umd.min.js',
            'ng2-slider-component/ng2-slider.component': 'npm:ng2-slider-component/ng2-slider.component.js',
            'ng2-slider.skins': 'npm:ng2-slider-component/ng2-slider.skins.js',
            'ng2-slideable-directive/slideable.directive': 'npm:ng2-slideable-directive/slideable.directive.js',
            'ng2-styled-directive/ng2-styled.directive': 'npm:ng2-styled-directive/ng2-styled.directive.js',
            '@ngui/datetime-picker': 'node_modules/@ngui/datetime-picker/dist',
            'angular2-image-upload': 'node_modules/angular2-image-upload',
            'crypto-js': 'node_modules/crypto-js',
            'angular2-spinner':'node_modules/angular2-spinner/dist',
            'mydatepicker': 'npm:mydatepicker/bundles/'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            highcharts: {
                main: './highcharts.js',
                defaultExtension: 'js'
            },
            'angular2-highcharts': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-focus': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-slider-component/ng2-slider.component' : {
                defaultExtension: 'js'
            },
            '@ngui/datetime-picker': {
                main: 'datetime-picker.umd.js',
                defaultExtension: 'js'
            },
            'angular2-image-upload': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'crypto-js':{
                main: './index.js',
                defaultExtension: 'js'

            },
            'angular2-spinner':{
                main: './index.js',
                defaultExtension: 'js'
            },
            mydatepicker:{
                main:'mydatepicker.umd.min.js',
                defaultExtension: 'js'
            }




        }


    });

})(this);