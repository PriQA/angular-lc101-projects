import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
 
  favLinks = ["https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve", "https://www.ted.com/talks/kim_scott_and_trier_bryant_how_to_reduce_bias_in_your_workplace"]
  constructor() { }

  ngOnInit() {
  }

}
