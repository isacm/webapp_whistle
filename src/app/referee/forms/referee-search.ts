import { FormGroup, FormControl } from '@angular/forms';

export const refereeSearchForm = () => (
    new FormGroup({
        name: new FormControl(''),
    })
);
