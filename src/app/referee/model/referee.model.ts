import { FormControl, FormGroup, Validators, } from '@angular/forms';


export class RefereeModel {
    id: string;
    name: string;
    dateOfBirth: string;
    address: string;
    nib: number;
    email: string;
    category: string;
    phoneNumber: string;

    static deserialize (jsonObject: any): RefereeModel {
        const instance = new RefereeModel();

        Object.keys(jsonObject).forEach(prop =>
            instance[prop] = jsonObject[prop]
        );

        return instance;
    }

    static createForm (): FormGroup {
        return new FormGroup({
            name: new FormControl( '', Validators.required),
            phoneNumber: new FormControl('', Validators.required, <any>Validators.pattern('[+][0-9 \\-()]*')),
            dateOfBirth: new FormControl('', Validators.required),
            address: new FormControl( '', Validators.required),
            nib: new FormControl( '', Validators.required, <any>Validators.pattern(/^[0-9]{21}$/)),
            email: new FormControl('', Validators.required,
            <any>Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?\.[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i)),
            category: new FormControl('', Validators.required)
        });
    }

    getEditObject () {
        return {
            name: this.name,
            dateOfBirth: this.dateOfBirth,
            address: this.address,
            nib: this.nib,
            email: this.email,
            category: this.category
        }
    }

    filter (propName: string, filterValue: string): boolean {
                return this[propName].toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0;

    }
}
