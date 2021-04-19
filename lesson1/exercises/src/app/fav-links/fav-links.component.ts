import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://github.com/mpzettl', 'http://www.zettlphoto.com','https://www.google.com/search?q=peter+zettl&oq=peter+zettl&aqs=chrome..69i57j69i59j69i60j69i61j69i60l3j69i65.2046j0j7&sourceid=chrome&ie=UTF-8'];
  constructor() { }

  ngOnInit() {
  }

}
