import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../models/blog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styles: []
})
export class BlogHomeComponent implements OnInit {

  blogs: Blog;

  error: string;

  order = "create_at";
ascending = true;

  constructor(public blogService: BlogService,
    private orderPipe: OrderPipe,
    private _sanitizer: DomSanitizer,
    ) {

   }

  ngOnInit() {

    this.blogService.getBlogs().subscribe(
      (data: Blog) => this.blogs = data,
      error => this.error = error
    );

  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
