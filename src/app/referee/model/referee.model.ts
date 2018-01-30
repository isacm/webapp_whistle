import { FormControl, FormGroup, Validators, } from '@angular/forms';


export class RefereeModel {
    id: string;
    name: string;
    dateOfBirth: string;
    address: string;
    email: string;
    category: string;
    phoneNumber: string;
    city: string;
    entryDate: string;
    password: string;

    static deserialize (jsonObject: any): RefereeModel {
        const instance = new RefereeModel();

        Object.keys(jsonObject).forEach(prop =>
            instance[prop] = jsonObject[prop]
        );

        return instance;
    }

    getEditObject () {
        return {
            name: this.name,
            dateOfBirth: this.dateOfBirth,
            address: this.address,
            city: this.city,
            email: this.email,
            category: this.category,
            password: this.password
        }
    }

    filter (propName: string, filterValue: string): boolean {
                return this[propName].toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0;

    }
}
