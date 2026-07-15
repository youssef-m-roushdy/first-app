import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  // interpolation binding using {{ name }}
  name = "Youssef";

  changeName = () => {
    this.name = "Youssef Elhaj";
  }

  // property binding using [src] attribute
  imageUrl = "https://www.w3schools.com/howto/img_avatar.png";

  isDisabled = true;


  // event binding using (click) event
  counter = 0;

  increase = () => {
    this.counter++;
  }

  // two way data binding using ngModel
  nickname = "";
  
  isLogedIn = false;
  email = "";
  password = "";
  setIslogedIn = () => {
    if (this.email  && this.password ) {
      this.isLogedIn = true;
    } else {
      alert("Invalid email or password");
    }
  }

  logout = () => {
    this.isLogedIn = false;
  }

  courses = [
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

  courseName = "";
  courseDescription = "";
  couresDuration = "";

  addCourse = () => {
    const newCourse = {
      "id": this.courses.length + 1,
      "name": "New Course",
      "description": "This is a new course.",
      "duration": "1 month"
    };
    this.courses.push(newCourse);
  }
}
