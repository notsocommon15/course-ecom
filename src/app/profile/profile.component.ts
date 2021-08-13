import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name;
  fname; lname; ay; designer;
  developer; manager; sales;
  work; workex;
  role;
  skill;
  constructor() { }

  ngOnInit(): void {
  }

  log(x)
  {
    console.log(x);
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid)
    {
      return;
    }
    this.ay = submittedForm.ay;
    this.designer = submittedForm.designer;
    this.developer = submittedForm.developer;
    this.fname = submittedForm.fname;
    this.name = submittedForm.name;
    this.lname = submittedForm.lname;
    this.manager = submittedForm.manager;
    this.sales = submittedForm.sales;
    this.work = submittedForm.work;
    this.workex = submittedForm.workex;
    this.skill = submittedForm.skill;
    this.role = submittedForm.role;
    window.alert("Your profile is saved");
  }

}
