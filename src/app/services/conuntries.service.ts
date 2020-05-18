import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConuntriesService {

  constructor(private http: HttpClient) { }

  public getConuntries() {
    const url = 'https://restcountries.eu/rest/v2/lang/es';
    return this.http.get(url).pipe(map((res: any[]) => {
      return res.map(country => {
        return {
          name: country.name,
          code: country.alpha3Code
        }
      })
    }))
  }
}
