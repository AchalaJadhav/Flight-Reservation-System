import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url: string;
  flight!: FlightService[];
  isShowMore: boolean;

  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8081/flights/'
   }

  ngOnInit(): void {
  }
  
  public findAllFlights(product:Object): Observable <FlightService[]> {
    return this.http.get<FlightService[]>(this.url);
  }
  
  save(product:Object) {
  
    // this.findAllFlights(product).subscribe(data => {
    //   this.flight=Object.values(Object.values(data)[0]);
    //   console.log(this.flight[0]);

    // });
    this.http.get("http://localhost:8081/flights/");
  }
  
  // public findMovieById(product:Object): Observable <MovieService[]> {
  //   return this.http.get<MovieService[]>(this.url+'&i='+Object.values(product)[0]);
  // }

  // show(product:Object){
  //   this.findMovieById(product).subscribe(data => {
  //     this.movie=Object.values(Object.values(data)[0]);
  //     console.log(this.movie[0]);
  //   });
  // }

  public showClick(){
    console.log("function called");
  }
  
}
