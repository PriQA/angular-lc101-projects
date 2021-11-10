import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://i.pinimg.com/736x/59/e7/21/59e7218972b6e4c858effc5093f9ae33--wallpaper.jpg';
  image2 = 'https://2.bp.blogspot.com/-DvODUy13bi0/UQToKWm9wzI/AAAAAAAAPAs/_ElLTDuj2PE/s1920/cats-animals-kittens-1200.jpg';
  image3 = 'https://www.thesprucepets.com/thmb/UNkESGbVGGKprH7PAJfJMSOxeIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/28153129_1787532741290933_404125326990376960_n-5a9320dda18d9e003727ca39.jpg';

  constructor() { }

  ngOnInit() {
  }

}