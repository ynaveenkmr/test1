import { Component, OnInit } from '@angular/core';
import { example }  from '../example';

@Component({
  selector: 'app-example',
  template:`{{myList}}`,
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {


public myList ='a';

  constructor() { }

  ngOnInit() {
  }

}