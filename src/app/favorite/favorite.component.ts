import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private isSelected = false;
  private selectionClass = 'fa fa-star-o';
  // tslint:disable-next-line:no-input-rename
  @Input('fav-title') favoriteTitle;
  // tslint:disable-next-line:no-output-rename
  @Output('alias-change') change = new EventEmitter;

  constructor() { }

  toggleFavoriteSelection() {
    this.isSelected = !this.isSelected;
    this.selectionClass = this.isSelected ? 'fa fa-star' : 'fa fa-star-o';
    this.change.emit({name: 'Raghav'});
  }

  ngOnInit() {
  }

}
