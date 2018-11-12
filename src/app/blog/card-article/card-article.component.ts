import {
  HttpClient
} from '@angular/common/http';
import {
  ArticlesService
} from './../../ngrx/services/article.service';
import {
  ArticleLogic
} from './../../ngrx/logic/articles.store';
import {
  ArticleblogComponent
} from './../articleblog/articleblog.component';
import {
  Article
} from './../../ngrx/models/article.model';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MatDialog
} from '@angular/material';
@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {


  @Input() article: any;

  id: any;

  constructor(public dialog: MatDialog,
    public _logic: ArticleLogic,
    private _service: ArticlesService,
    private http: HttpClient) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {

  }

  seeMore(article) {

    const dialogRef = this.dialog.open(ArticleblogComponent, {
      width: '800px',
      data: {
        type: 'see more',
        article: article
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  likeArticle(user, article ) {
    console.log('article: ', article);
    const like = {
      user: user,
      article: article
    };

    // this.http.post<any>('http://localhost:3000/article/like', like).subscribe(res => {
    //   console.log(res);
    // });
    this._logic.likeArticle(user, article);
  }

}
