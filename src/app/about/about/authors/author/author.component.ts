import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: []
})
export class AuthorComponent implements OnInit {

  public authorName = 'Name';

  constructor(activateRoute: ActivatedRoute) {
    this.authorName = activateRoute.snapshot.params.name;

   }

  ngOnInit() {
  }

}
