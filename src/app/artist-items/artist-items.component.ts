import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {
  artist = {
    name: String,
    shortname: String,
    reknown :String,
    bio :String
  }

  constructor() { }

  ngOnInit(): void {
  }

}
