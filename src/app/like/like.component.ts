import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked: boolean;
  @Input() noOfLikes: number;

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.noOfLikes = this.isLiked ? this.noOfLikes + 1 : this.noOfLikes - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
