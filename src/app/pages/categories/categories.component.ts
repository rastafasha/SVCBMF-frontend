import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category;
  error: {};

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getCategories().subscribe(
      (data: Category) => this.categories = data
    );
  }

}
