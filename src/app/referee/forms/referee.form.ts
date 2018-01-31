import { FormControl, FormGroup, Validators, } from '@angular/forms';

export const refereeForm = () => {
    return new FormGroup({
        name: new FormControl( '', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        address: new FormControl( '', Validators.required),
        city: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        entryDate: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
}

// <any>Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?\.[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i)),
// <any>Validators.pattern('[+][0-9 \\-()]*')