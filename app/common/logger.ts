import { Injectable } from "@angular/core"

@Injectable()
export class Logger {
    logHistory: string[];


    constructor() {
        this.logHistory = [];
    }
    log(type, message:any) {
        this.logHistory.push( new Date().getUTCMilliseconds() + ':[' + type +'] -' + message);
        while(this.logHistory.length > 100) {
            this.logHistory.shift();
        }
        console.log("{" + this.logHistory.length + "}" + new Date().getUTCMilliseconds() + ':[' + type +'] -', message)
    }

    debug(...args: any[]) {
        this.log("DEBUG", arguments)
    }
    info(...args: any[]) {
        this.log("INFO", arguments)
    }

    warn(...args: any[]) {
        this.log("WARN", arguments)
    }

    error(...args: any[]) {
        this.log("ERROR", arguments)
    }

}

