
import * as moment from 'moment';

export class Hydrator {
    static assign (obj: Object, mapProperties: Object = {}, keyTransformer: Object = {}) {
        return (instance, key) => {
            const transformedKey = keyTransformer[key] !== undefined ? keyTransformer[key] : key;
            const mappedValue = mapProperties[key] !== undefined ? mapProperties[key](obj[key]) : obj[key];

            instance[transformedKey] = mappedValue;
            return instance;
        };
    }

    static date (aDate: string): Date {
        if (aDate !== undefined && aDate !== null) {
            return moment(aDate).toDate();
        }
    }

    static fromArray (func: Function) {
        return (arr: Array<any>) => arr.map(a => func(a));
    }

    static numberToString (numb: any): string {
        if (typeof numb === 'string') {
            return numb;
        }

        if (typeof numb === 'number') {
            return numb.toString();
        }

        return '';
    }

    static toString (elem: any): string {
        return `${elem}`;
    }
}
