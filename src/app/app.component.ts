import { Component, OnInit } from '@angular/core';
import { GoogleAnaliticsService } from './services/google-analitics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'NgInit';

  constructor(private gas: GoogleAnaliticsService) {

  }

  ngOnInit(): void {
    // Set that the user was here
    this.gas.send('/');
  }
}
