import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloworldApp';
  imgUrl = 'assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com';

  ngOnInit(): void {
    this.title = "Hello from BridzeLabz."
  }

  onClick($event : any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
