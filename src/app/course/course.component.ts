import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'List Of courses';
  courses ;

  constructor() {
    const service = new CoursesService();

    this.courses = service.getCoursES ();
  }

  // tslint:disable-next-line: typedef
  getTitle(){
    return this.title;
  }



}
