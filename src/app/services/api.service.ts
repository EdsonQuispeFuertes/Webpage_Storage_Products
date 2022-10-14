import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Products } from '../modules/products';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    post(dir: string, model: object) {
        return this.http.post(`${environment.url}${dir}`, model).toPromise();
    }

    get(dir: string) {
        const path = `${environment.url}/${dir}`;
        console.log(path)
        return this.http.get<Products[]>(path).toPromise();
    }

    put(dir: string, products: {}) {
        const path = `${environment.url}/${dir}`;
        return this.http.put(path, products).toPromise();
    }
}
