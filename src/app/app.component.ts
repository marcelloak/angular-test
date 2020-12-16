import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent {
  query: string;
  artists: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor() {
    this.query = ''
    this.artists = [
      {
        "name" : "Barot Bellingham",
        "shortname": "Barot_Bellinham",
        "reknown" : "Royal Academy",
        "bio" : "Barot has just finished his final year"
      },
      {
        "name" : "Hassum Harrod",
        "shortname": "Hassum_Harrod",
        "reknown" : "Art College",
        "bio" : "Hassum has just finished his final year"
      }
    ]
  }
}
