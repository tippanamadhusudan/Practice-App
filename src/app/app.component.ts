import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Practice-app';

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    'name': ["", Validators.required],
    'password': ["", Validators.required],
    lessons: this.fb.array([])
  })

  // form = new FormGroup({
  //   'name': new FormControl("", Validators.required),
  //   "password": new FormControl("", Validators.required)
  // });

  ngOnInit(): void {
      this.form.valueChanges
        .pipe(map((value) => {
          value.name = value.name?.toUpperCase();
          return value;
        }))
        .subscribe( value => {
        console.log("Reactive Form subscribe", value);
      });
  }

  onSubmit() {
    console.log("Form submitted");
    console.log(this.form);
  }
}
