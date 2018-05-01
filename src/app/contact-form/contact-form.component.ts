import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [{id: 1, name: 'sgdvh'}, {id: 2, name: 'uyfuy'}, {id: 2, name: 'ufgjy'}];

  constructor() { }

  ngOnInit() {
  }

  submitForm(formElement) {
    console.log(formElement.value);
  }

}
