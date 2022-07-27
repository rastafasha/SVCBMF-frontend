import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {



  blog$: Observable<Blog>;
  public Editor = DecoupledEditor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private titleService: Title,
     private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.blog$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getBlog(+params.get('id'))
      )
    );

    window.scrollTo(0, 0);

  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
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
