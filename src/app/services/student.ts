import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}
  Studentcourses = [
    {
      "id": 1,
      "name": "Angular",
      "description": "Angular is a platform for building mobile and desktop web applications.",
      "duration": "3 months"
    },
    {
      "id": 2,
      "name": "React",
      "description": "React is a JavaScript library for building user interfaces.",
      "duration": "2 months"
    },
    {
      "id": 3,
      "name": "Vue",
      "description": "Vue.js is a progressive framework for building user interfaces.",
      "duration": "1 month"
    }
  ];

  getAllSttudentCourses = () => {
    return this.Studentcourses;
  }

  getStudents = () => {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
