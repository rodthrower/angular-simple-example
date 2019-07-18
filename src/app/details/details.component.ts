import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  //styleUrls: ['./details.component.css']
  styles: [`
    .displayParagraph {
        color: green;
    }`]
})

export class DetailsComponent implements OnInit {
  displayStatus: string = 'on';

  constructor() {
   // this.displayStatus = this.displayStatus === 'on' ? 'off': 'on';
   }

  ngOnInit() {
  }

  getDisplayStatus() {
    return this.displayStatus;
  }

  toggleDisplayStatus() {
    this.displayStatus = this.displayStatus === 'on' ? 'off': 'on';
  }

}
