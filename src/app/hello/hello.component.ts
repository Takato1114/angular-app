import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
  // template: `
  //   <div id ="body">
  //     <h1>{{title}}</h1>
  //     <p>{{message}}</p>
  //   </div>
  //   `
  })
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  myControl:FormGroup;

  constructor() {
   }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'FormContorolを使う';
    this.myControl = new FormGroup({
      control: new FormControl()
    });
  }

  doClick() {
    this.message = '「'+ this.myControl.value + '」と書きましたね。';
  }

  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}
