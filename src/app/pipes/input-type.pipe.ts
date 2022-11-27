import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputType'
})
export class InputTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
