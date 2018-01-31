import { Injectable } from '@angular/core';

import { HTTPService } from 'app/utils/http/http.service';
import { ApiUrlsService } from 'app/utils/api-urls/api-urls.service';

import { DesignacoesModel } from 'app/designacoes/model/designacoes.model';

@Injectable()
export class DesignacoesService {
    constructor (
        private apiUrlsService: ApiUrlsService,
        private httpService: HTTPService,
    ) {}

    /**
     * @ngdoc method
     * @name team-service#get
     * @description
     * Get all teams
     *
     * @returns {array} values of teams or empty array
     */
    getAll (sort?: string): Promise<Array<DesignacoesModel>> {
        return this.httpService.get(this.apiUrlsService.DESIGNATION.getAll(sort))
            .then(res => res.map(game => DesignacoesModel.deserialize(game)))
            ;
    }

    /**
     * @ngdoc method
     * @name team-service#getOne
     * @description
     * Get a team for a given id
     *
     * @param {string} id of object
     * @returns {object} return a object
     */
    getOne (id: string): Promise<DesignacoesModel> {
        return this.httpService.get(this.apiUrlsService.DESIGNATION.getOne(id))
            .then(game => DesignacoesModel.deserialize(game))
            ;
    }

    /**
     * @ngdoc method
     * @name team-service#create
     * @description
     * Create a object
     *
     * @param {object} payload team
     * @returns {object} return the crated object
     */
    create (payload: DesignacoesModel): Promise<any> {
        return this.httpService.post(this.apiUrlsService.DESIGNATION.create(), payload)
            .then(game => DesignacoesModel.deserialize(game))
            ;
    }

    /**
     * @ngdoc method
     * @name team-service#update
     * @description
     * Update a team
     *
     * @param {string } id object id
     * @param {object} payload team
     * @returns {object} return the updated object
     */
    update (id: string, payload: any): Promise<DesignacoesModel> {
        return this.httpService.put(this.apiUrlsService.DESIGNATION.update(id), payload)
            .then(game => DesignacoesModel.deserialize(game))
            ;
    }

    /**
     * @ngdoc method
     * @name team-service#delete
     * @description
     * Delete a object
     *
     * @param {string} id of object
     * @returns {object} return the deleted object
     */
    delete (id: string): Promise<any> {
        return this.httpService.delete(this.apiUrlsService.DESIGNATION.delete(id))
            .then(game => DesignacoesModel.deserialize(game))
            ;
    }
}
