import { Component, OnInit } from "@angular/core";
import { Gif } from "../gif";
// import { GifRequestService } from "../gif-request.service";
import { HttpClient } from "@angular/common/http";
import {} from "../giphy-class/giphy";
// import { url } from "inspector";

@Component({
  selector: "app-giphy",
  templateUrl: "./giphy.component.html",
  styleUrls: ["./giphy.component.css"]
})
export class GiphyComponent implements OnInit {
  title = "Giphy";

  gif: Gif;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=RObuFKOjZnPVAXYp3Q7NZEsRJ2JTS17O&tag=&rating=G"
      )
      .subscribe(data => {
        console.log(data);
        //from request
      });
  }
}
