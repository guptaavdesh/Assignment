import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {
  createcourse=new FormGroup({
    courseid:new FormControl('',[Validators.required]),
    coursename: new FormControl('',[Validators.required]),
    department: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.createcourse.value);
    this.createcourse.reset();
  }

}
