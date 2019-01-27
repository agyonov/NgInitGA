import { Component, OnInit } from '@angular/core';
import { GoogleAnaliticsService } from '../services/google-analitics.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(private gas: GoogleAnaliticsService) { }

  ngOnInit() {
     // Set that the user was here
     this.gas.send('page-2');
  }
}
