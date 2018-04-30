import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Angular courses';
  courseList;
  isActive = true;
  name = 'Raghav';
  amount = 239.3442;
  dateOfBirth = new Date();
  summaryText = 'jfvjv ygjvjfvjy jvjvjfv yjvjvjvjv dgdytdytdfy yfhfvjhvjvbj dcytdcytdcyhtchch cghcycgyc';

  constructor(service: CoursesService) {
    this.courseList = service.getCourses();
  }

  onEnterClick(email) {
    alert(email);
  }

  onEnterClickName() {
    alert(this.name);
  }

  ngOnInit() {
  }

}
