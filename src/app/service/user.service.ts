import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable, of} from "rxjs";
import {User} from "../model/User";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  public getUsers(): Observable<User[]> {
    return this.http.get('/demo').pipe(
      map(response => {
        return response.body.map(user => Object.assign(User.empty(), user));
      }),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public saveUser(user: User): Observable<string> {
    return this.http.post('/demo', user).pipe(
      map(response => {
        return response.body.message;
      }),
      catchError(err => {
        console.log(err);
        return of('error');
      })
    );
  }
}
