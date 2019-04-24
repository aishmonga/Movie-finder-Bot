import { Component } from "@angular/core";
import { MovieBotService } from "../movie-bot.service";

@Component({
  selector: "app-recast",
  templateUrl: "./movie-recast.component.html",
  styleUrls: ["./movie-recast.component.css"]
})
export class MovieRecastComponent {
  constructor(private recast: MovieBotService) {}
  question;
  responseArr: any = [];
  check = false;
  source = false;
  count = 1;

  askQuestion() {
    console.log(this.count, "jkjjhkjh");
    this.count++;
    this.recast.interactWithRecast(this.question).subscribe(data => {
      console.log(data);
      console.log("normal query resp: ", this.responseArr.push(data));
      this.check = true;
    });
  }

  onClick(val) {
    this.recast.interactWithRecast(val).subscribe(data => {
      console.log(data);
      console.log("button click resp : ", this.responseArr.push(data));
      this.check = true;
    });
  }

  onClickMovieResult(val: String) {
    console.log("nothing");
    var x = val.toLowerCase();
    window.open(x, "_blank");
  }
}
