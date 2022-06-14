import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) {  }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
