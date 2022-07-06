import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  similarity(s1, s2) {
    function editDistance(f1, f2) {
      f1 = f1.toLowerCase();
      f2 = f2.toLowerCase();
  
      var costs = new Array();
      for (var i = 0; i <= f1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= f2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (f1.charAt(i - 1) != f2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[f2.length] = lastValue;
      }
      return costs[f2.length];
    }
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }

  transform(value: any, filter: string, field: string[] | string): unknown {
    if (typeof field === 'string') {
      return value.filter(e => e[field].toLowerCase().includes(filter.toLowerCase()));
    } else if (field.length > 0) {
      return [...field.map(_ => {
        return value.filter(e => e[_].toLowerCase().includes(filter.toLowerCase())).sort((a, b) => this.similarity(a[_], filter))
      })].filter(e => e.length > 0).sort((a, b) => b.length - a.length)[0];
    } else {
      return value.filter(e => e.includes(filter));
    }
  }

}
