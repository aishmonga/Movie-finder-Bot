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
  askQuestion() {
    this.recast.interactWithRecast(this.question).subscribe(data => {
      console.log(data);
      // this.responseArr.push(data);
      console.log("resp : ", this.responseArr.push(data));
      this.check = true;
    });
  }
}
