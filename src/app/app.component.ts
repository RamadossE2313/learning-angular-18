import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // old way to use ngfor, ngif we have to import
  // imports: [RouterOutlet, UserComponent, NgFor, NgIf],
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular-18';
  UndefinedValue?: string;
  NumberValue: number = 10;
  showItems: boolean = false;
  
  items : string[] = [
    "first", "second", "third", "fourth", "fifth"
  ];

  user = {
    "id": 1,
    "name": "test1",
    "gender": "male"
  };

  newString(inputString: string){
    console.log(inputString);
  }


}
