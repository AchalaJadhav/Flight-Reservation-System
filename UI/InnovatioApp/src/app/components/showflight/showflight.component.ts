import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})
export class ShowflightComponent implements OnInit {
  
  flightNo: number;
  
  private url: string;
  flight!: FlightService[];
  isShowMore: boolean;
  FlightService: any;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8081/flights/'
 }

  ngOnInit(): void {
    // var x = document.getElementById("title").innerText;

    this.FlightService.viewFlight(this.flightNo)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
  }

  
  list(){
    this.router.navigate(['flights']);
  }

  
  public findFlightById(x:Object): Observable <FlightService[]> {
    return this.http.get<FlightService[]>(this.url);
  }

  show(x:Object){
    this.findFlightById(x).subscribe(data => {
      this.flight=Object.values(Object.values(data)[0]);
      console.log(this.flight[0]);
    });
  }
}
