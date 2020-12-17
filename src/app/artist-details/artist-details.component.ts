import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artist']
})
export class ArtistDetailsComponent implements OnInit {
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
