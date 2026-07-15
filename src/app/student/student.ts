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



}
