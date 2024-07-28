# LearningAngular18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Angular 18 feature

Introduced in angular 17

Input function: 
userName = input.required<string>()

Output function:
emitString = output<string>();

Example can be found in (required, optional, optional with multiple values)
user.component.ts

For:
For loop newly

<div>
 @for(item of items; track item){
    <p>{{item}}</p>
 }
</div>

If: 
If newly introduced
@if(showItems)
{
    <div>
        @for(item of items; track item)
        {
           <p>{{item}}</p>
        }
    </div> 
}
@else {
    <div><p>showItems value is false, so we are not displaying any values</p></div>
}

If you want to use ngfor/ngIf we should import below 
@Component({
  selector: 'app-root',
  standalone: true,
  // old way to use ngfor, ngif we have to import
  imports: [RouterOutlet, UserComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

Example: app.component.ts