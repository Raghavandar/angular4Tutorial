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
    this.service.getAll().subscribe(posts => this.posts = posts);
  }

  postData(input: HTMLInputElement) {
    const postObj = {title: input.value};
    this.posts.splice(0, 0, postObj);

    input.value = '';

    this.service.post(postObj).subscribe(
      newPost => {
        postObj['id'] = newPost.id;
      console.log(newPost.id);
    }, (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        alert(error.originalError);
      } else {
        throw error;
      }
    });
  }

  patchData(post) {
    this.service.patch(post.id).subscribe(
      newPost => {
      console.log(newPost.id);
    }, (error: AppError) => {
      if (error instanceof BadInput) {
        alert(error.originalError);
      } else {
        throw error;
      }
    });
  }

  deleteData(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      newPost => {
      console.log(newPost.id);
    }, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert('Post already deleted');
      } else {
        throw error;
      }
    });
  }
}
