import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ProvaService {

    /**
     * Example GET something service: returns a name transformed as uppercase
     * @param name
     */
    get(name: string): Promise<string> {
        return new Promise(resolve =>
            setTimeout(() => resolve(name.toUpperCase()), 1000)
        );
    }

    getObservable(name: string) {
        return of(name.toUpperCase());
    }
}
