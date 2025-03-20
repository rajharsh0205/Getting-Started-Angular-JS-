import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, FormsModule]
})
export class AppComponent {
  title = 'HelloworldApp';
  imgUrl = 'assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com';
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridzeLabz."
  }

  onClick($event : any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event : any) {
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
