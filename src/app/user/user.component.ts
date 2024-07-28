import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';

type UserType = {
  id: number,
  name: string,
  gender: string
}

interface IUser {
  id: number,
  name: string,
  gender: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Input decrator with required, it will throw compile time error
  @Input({required: true}) userName!: string;

  // Input decrator withoutrequired, it will not throw any error but it will affect functionality, it will render without value
  @Input() userNameWithoutRequired!: string;

  // Input decrator withoutrequired, we are sure this value can be null/undefined
  // @Input() userNameWithOptionalValues? : string;

  // Input decrator withoutrequired, we are sure this value can be null/undefined
  @Input() userNameWithOptionalValues? : string | undefined;

  // Input decrator withoutrequired, we are sure this value can be null/undefined
  @Input() userNameWithMultipleOptionalValues : string | undefined | number;

  // Input decrator with required with object type with inline object properties, not best practice
  // @Input({required: true}) user! : {
  //   id: number,
  //   name: string,
  //   gender: string
  // };

  // Input decrator with required with object type with type alias object properties good practice
  // @Input({required: true}) user! : UserType

    // Input decrator with required with object type with interface object properties and it's best practice
  @Input({required: true}) user! : IUser

  // using input function, with required
  //userName = input.required<string>();
  // using input function, without required
  //userNameWithoutRequired = input<string>();

  // using output decrator, this also used to emit the value
  @Output() emitString = new EventEmitter<string>();

  // using output function, this also used to emit value 
  // emitString = output<string>();
  
  buttonClicked()
  {
    this.emitString.emit("new value emitted");
  }
}
 
