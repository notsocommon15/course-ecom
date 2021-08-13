import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersort'
})
export class FiltersortPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const sortField = args[0];
    const sortTwoField = args[1];
    const sortDirection = args[2];
    let multiplier = 0;

    if(sortDirection === "desc")
    {
      multiplier = -1;
    }

    else if (sortDirection === "asc")
    {
      multiplier = 1;
}


    value.sort((a: any, b: any) => {
      if (a[sortField]-a[sortTwoField] < b[sortField]-b[sortTwoField]) {
        return -1 * multiplier;
      }
      else if (a[sortField]-a[sortTwoField] > b[sortField]-b[sortTwoField]) {
        return 1 * multiplier;
      }
      else {
        return 0;
      }
    });
    return value;
  }

}
