import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';

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
  message:string[];
  lastTarget:any;
  lastColor:string;
  myControl:FormGroup;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = ['First item.','Second item', 'Third item.'];
    this.myControl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      age: new FormControl('', [Validators.min(1), Validators.max(150)])
    });
  }

  get name() {return this.myControl.get('name')}
  get mail() {return this.myControl.get('mail')}
  get age() {return this.myControl.get('age')}

  doClick(event){
    if(this.lastTarget != null){
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }


  }
