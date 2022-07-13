import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
  name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMayuscula: boolean = true): string {

    return (enMayuscula) 
      ? value.toUpperCase()
      : value;


    throw new Error("Method not implemented.");
  }

}