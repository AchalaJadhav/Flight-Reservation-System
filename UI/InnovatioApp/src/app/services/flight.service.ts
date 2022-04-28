import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
    Id!: String;
    Departure!:  String;
    Arrival!:  String;
    DepartureDate!:  String;
    ArrivalDate!: String;
    
  
  

  constructor(private http:HttpClient) { 
    console.log('Service Connected')
  }
  
}
