import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  courses: any[] = [];

  constructor(private studentService: StudentService) {
    this.courses = this.studentService.getAllSttudentCourses();
  }
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

  studentFullName = input<string>(); // comes from parent component (app.ts) using property binding [studentFullName]="fullName"
  studentAddress = input<string>();

  deleteClicked = output<void>(); // sends event to parent component (app.ts) using event binding (deleteClicked)="delete()"

  delete() {
    this.deleteClicked.emit();
  }

  students: any[] = [];

 ngOnInit() {
  this.studentService.getStudents().subscribe((data: any[]) => {
    console.log('Data from API:', data);

    this.students = data;

    console.log('Students after assignment:', this.students);
    console.log('Length:', this.students.length);
  });
}
}

 

  

  
