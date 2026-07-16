import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  constructor(private studentService: StudentService, private route: ActivatedRoute) {

  }

  student = signal<any | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("Student ID from route:", id);
    this.studentService.getStudentById(id).subscribe(data => {
      this.student.set(data);
    });
  }
}






