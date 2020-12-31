import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
