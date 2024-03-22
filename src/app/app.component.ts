import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPAAngular';
  data: any= 'lalalal';
  constructor(private http:HttpClient){
    this.http.get('http://localhost:3000/users').subscribe(
      (data) => {
        this.data = data
        console.log("data",this.data);
      });
    
  }
}
