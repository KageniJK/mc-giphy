import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Gif } from "./gif";

@Injectable()
export class GifRequestService {
  gif: Gif;

  constructor(private http: HttpClient) {
    // this.gif = new Gif("");
  }

  quoteRequest() {
    interface ApiResponse {
      gif: string;
      author: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          response => {
            // this.gif.gif = response.gif;
            resolve();
          },
          error => {
            // this.gif.gif = "Never, never, never give up.";
            reject(error);
          }
        );
    });

    return promise;
  }
}
