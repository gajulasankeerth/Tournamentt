import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], filterData: string): any[] {
    if (!items) return [];
    if (!filterData) return items;
    filterData = filterData.toString().toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(filterData)
    });
  }

}