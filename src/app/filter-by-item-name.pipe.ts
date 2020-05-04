import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByItemName'
})
export class FilterByItemNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText){
      return items;
    }
    return items.filter(item => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
  }
}
