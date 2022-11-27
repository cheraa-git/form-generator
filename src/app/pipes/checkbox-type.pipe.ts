import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkboxType'
})
export class CheckboxTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
