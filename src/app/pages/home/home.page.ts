import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  searchButton = "Search"
  list: any = []; 
  isLoading: boolean = false;
  
  constructor(private newsService: NewsService) { 
  }

  ngOnInit() {
  }

  getBookList = () => {
    this.isLoading = true;
    this.newsService.getBestSellersNameList()
    .subscribe(
      (response: any) => {
        let retornable:any = []
        response.results.books.forEach(item => {
          retornable.push(item)
        });
        console.log(response)
        this.list = retornable;
        this.isLoading = false;
      }
    )
  }

  getBookReviewByTitle(book: any) {
    this.isLoading = true;
    this.newsService.getBookReviewByTitle(book.title.replace(" ", "+"))
    .subscribe((response: any) => {
      console.log(response)
      this.isLoading = false;
    })
  }

  getBookReviewByIsbn(book: any) {
    this.isLoading = true;
    this.newsService.getBookReviewByIsbn(book.primary_isbn10)
    .subscribe((response: any) => {
      console.log(response)
      this.isLoading = false;
    })
  }
  
}
