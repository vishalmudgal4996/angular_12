import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const x: Array<any> = args;
    return value * (x[0] + x[1]);
  }

}
