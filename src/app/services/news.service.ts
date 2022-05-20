import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API_KEY = "&api-key=nGjfaKr5DHQn2GzTM1w2fvjGIpviJGih";
const BASE_URL = "https://api.nytimes.com/svc/books/v3/"


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getBestSellersNameList() {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nGjfaKr5DHQn2GzTM1w2fvjGIpviJGih")
  }

  getBookReviewByTitle(title: string) {
    return this.http.get(BASE_URL + "/reviews.json?title=" + title + API_KEY)
  }

  getBookReviewByIsbn(Isbn: number) {
    return this.http.get(BASE_URL + "/reviews.json?isbn=" + Isbn + API_KEY)
  }
  
}

