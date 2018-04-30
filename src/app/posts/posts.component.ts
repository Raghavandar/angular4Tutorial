import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      response => {
      this.posts = response.json();
    });
  }

  postData(input: HTMLInputElement) {
    const postObj = {title: input.value};
    this.service.post(postObj).subscribe(
      response => {
      console.log(response.json());
    }, (error: AppError) => {
      if (error instanceof BadInput) {
        alert(error.originalError);
      } else {
        throw error;
      }
    });
  }

  patchData(post) {
    this.service.patch(post.id).subscribe(
      response => {
      console.log(response.json());
    }, (error: AppError) => {
      if (error instanceof BadInput) {
        alert(error.originalError);
      } else {
        throw error;
      }
    });
  }

  deleteData(post) {
    this.service.delete(post.id).subscribe(
      response => {
      console.log(response.json());
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('Post already deleted');
      } else {
        throw error;
      }
    });
  }
}
