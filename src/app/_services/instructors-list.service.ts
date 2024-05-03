import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntructorsListService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private http:HttpClient) { }

getInstructors(){
  return this.http.get(`${this.apiUrl}/instructors`);
}

}
