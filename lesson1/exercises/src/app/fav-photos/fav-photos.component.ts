import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of My Favorite Art';
  image1 = 'https://assetsnffrgf-a.akamaihd.net/assets/m/102014006/univ/art/102014006_univ_lss_lg.jpg';
  image2 = 'https://assetsnffrgf-a.akamaihd.net/assets/m/502018115/univ/art/502018115_univ_lss_lg.jpg';
  image3 = 'https://assetsnffrgf-a.akamaihd.net/assets/m/502014236/univ/art/502014236_univ_lss_lg.jpg';

  constructor() { }

  ngOnInit() {
  }

}