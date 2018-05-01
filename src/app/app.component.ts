import { Component } from '@angular/core';

interface FavoriteArguments {
  name: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular favorite';
  like = {'isLiked' : false,
          'noOfLikes' : 5};

  onFavoriteChange(args: FavoriteArguments) {
    console.log('Favorite Changed ', args.name);
  }
}
