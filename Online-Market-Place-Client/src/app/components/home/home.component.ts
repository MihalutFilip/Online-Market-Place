import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit(): void {
    this.authorizeService.get().subscribe(s => console.log(s));
  }

}
