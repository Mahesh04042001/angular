import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book:any;
  constructor() { }

  ngOnInit(): void {
  }
  onbuy(book:any){
    console.log('Book added to the cart....'+book.name);
  }
}
