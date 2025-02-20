import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
headername="Gopinath N";
salary="10000";
isdisable=false;
Functionclick(name:string){
  if(name){
    alert(name)
  }else{
  alert("Gopinath N")
  }
}
classname= 'headclass';
stylevalue={"color":"yellow","font-size":"50px"}

colors=['green','red','yello','white']
ngOnInit(): void {
  }
 
}
