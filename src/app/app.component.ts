import { Component, OnInit,OnDestroy } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
   placehold:any[]=[
    {cityname:"chennai"}
  ];
  placehold2:any[]=[
    {tem:"300.14"},
    {countryname:"India"}
  ];
  placehold3:any[]=[
    {speed:"3.09"},
  ];
  placehold4:any[]=[
    {humidity:"73"},
  ];
  placehold5:any[]=[
    {description:"mist"},
  ];
  placehold6:any[]=[
    {pressure:"1012"},
  ];
  placehold7:any[]=[
    {visibility:"4000"},
  ];
  placehold8:any[]=[
    {sunrise:"1705280691"},
  ];

  liveTime: string = '';

  private timerInterval: any;

  ngOnInit() {
    this.updateLiveTime();
    // Update the time every second
    this.timerInterval = setInterval(() => this.updateLiveTime(), 1000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.timerInterval);
  }

  private updateLiveTime() {
    const currentTime = new Date();
    this.liveTime = currentTime.toLocaleTimeString();
  }
  
  
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherServiceService) {}

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    });
  }
  

  
}
