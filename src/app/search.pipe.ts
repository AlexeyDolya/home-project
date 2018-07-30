import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProducts'
})
export class SearchProducts implements PipeTransform {

  transform(value: any, a?: any): any {
    a[0] = a[0].replace(/^\s*/, '');
    a[0] = a[0].toLowerCase();
    if (a[1] === 'all') {
      return value.filter(item => (item.name.toLowerCase().indexOf(String(a[0])) !== -1
        ||
        item.articul.toLowerCase().indexOf(String(a[0])) !== -1 || item.brand.toLowerCase().indexOf(String(a[0])) !== -1));
    }
    return value.filter(item => item[a[1]].toLowerCase().indexOf(String(a[0])) !== -1);
  }

}
