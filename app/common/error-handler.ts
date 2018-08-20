import { Injectable } from "@angular/core"

@Injectable()
export class ErrorHandler {
    call(error, stackTrace = null, reason = null) {
        // do something with the exception
        console.log("CALL ERROR", error, stackTrace, reason)
    }

    // Official Error Handler
    public handleError( error: any ): void {
        console.log("ERROR:",  error);
    }
}

