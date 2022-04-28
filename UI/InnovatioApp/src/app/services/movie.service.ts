import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
    Title!: String;
    Year!:  String;
    imdbID!:  String;
    Type!:  String;
    Poster!: String;
    
    
  
  

  constructor(private http:HttpClient) { 
    console.log('Service Connected')
  }
  
}
