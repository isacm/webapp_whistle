import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class ApiUrlsService {
    static API_URL = `${ environment.BASE_API_URL }`;


    public REFEREE: any = {
        getAll: (sort?: string): string => (
            `${ ApiUrlsService.API_URL }/Referees?${sort ? 'sort=' + sort : ''}`
        ),
        getOne: (id: string): string => (
            `${ ApiUrlsService.API_URL }/Referees/${id}`
        ),
        create: (): string => (
            `${ ApiUrlsService.API_URL }/Referees`
        ),
        update: (id): string => (
            `${ ApiUrlsService.API_URL }/Referees/${id}`
        ),
        delete: (id): string => (
            `${ ApiUrlsService.API_URL }/Referees/${id}`
        ),
    }

    public GAME: any = {
        getAll: (sort?: string): string => (
            `${ ApiUrlsService.API_URL }/Games?${sort ? 'sort=' + sort : ''}`
        ),
        getOne: (id: string): string => (
            `${ ApiUrlsService.API_URL }/Games/${id}`
        ),
        create: (): string => (
            `${ ApiUrlsService.API_URL }/Games`
        ),
        update: (id): string => (
            `${ ApiUrlsService.API_URL }/Games/${id}`
        ),
        delete: (id): string => (
            `${ ApiUrlsService.API_URL }/Games/${id}`
        ),
    }

}
