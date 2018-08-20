import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    public transform(value, keys: string, term: string) {
        console.log("hi");
        console.log(value);
        console.log(keys);
        console.log(term);
        if (!term) return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

    }
}