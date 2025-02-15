import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact works!
</h2>
 <a routerLink="add">Addcontact</a> 
 <a routerLink="edit/1">Edit contact</a>
 <router-outlet>
 `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
