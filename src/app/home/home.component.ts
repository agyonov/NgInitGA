import { Component, OnInit } from '@angular/core';
import { GoogleAnaliticsService } from '../services/google-analitics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gas: GoogleAnaliticsService) { }

  ngOnInit() {
     // Set that the user was here
     this.gas.send('home');
  }

}
