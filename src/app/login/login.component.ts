import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
