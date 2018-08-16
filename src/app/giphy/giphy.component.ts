import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
// import { gifs } from '../'
// import { GifRequestService } from '../gif-request.service';
import { HttpClient } from '@angular/common/http';
// import {} from '../giphy-class/giphy';
// import { url } from 'inspector';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  title = 'Giphy';

  // gif: Gif;

  gifs = [
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://api.giphy.com/v1/gifs/trending?api_key=RObuFKOjZnPVAXYp3Q7NZEsRJ2JTS17O&tag=&rating=G'
      )
      .subscribe(data => {
        console.log(data.data);
        for (let i = 0; i < data.data.length; i++) {
          this.gifs.push(this.gif = new Gif(data.data[i].images.downsized_small.url); );
        }
        // this.gif = new Gif(data.data[0].images.original.url);

        // from request
      })
  }
}
