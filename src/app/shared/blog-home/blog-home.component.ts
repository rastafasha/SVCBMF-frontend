import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../models/blog';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styles: []
})
export class BlogHomeComponent implements OnInit {

  blogs: Blog;

  error: string;

  constructor(public blogService: BlogService) {
    
   }

  ngOnInit() {

    this.blogService.getBlogs().subscribe(
      (data: Blog) => this.blogs = data,
      error => this.error = error
    );

  }

}
