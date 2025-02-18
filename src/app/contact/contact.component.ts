import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact works!
</h2>
 <a routerLink="add">Addcontact</a> 
 <a routerLink="edit/201">Edit contact</a>
 <router-outlet></router-outlet>
 `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  }

}
