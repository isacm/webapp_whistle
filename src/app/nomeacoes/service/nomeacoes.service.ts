import { Injectable } from '@angular/core';

import { HTTPService } from 'app/utils/http/http.service';
import { ApiUrlsService } from 'app/utils/api-urls/api-urls.service';

import { NomeacoesModel } from '../model/nomeacoes.model';

@Injectable()
export class NomeacoesService {
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
    getAll (sort?: string): Promise<Array<NomeacoesModel>> {
        return this.httpService.get(this.apiUrlsService.GAME.getAll(sort))
            .then(res => res.map(game => NomeacoesModel.deserialize(game)))
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
    getOne (id: string): Promise<NomeacoesModel> {
        return this.httpService.get(this.apiUrlsService.GAME.getOne(id))
            .then(game => NomeacoesModel.deserialize(game))
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
    create (payload: NomeacoesModel): Promise<any> {
        return this.httpService.post(this.apiUrlsService.GAME.create(), payload)
            .then(game => NomeacoesModel.deserialize(game))
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
    update (id: string, payload: any): Promise<NomeacoesModel> {
        return this.httpService.put(this.apiUrlsService.GAME.update(id), payload)
            .then(game => NomeacoesModel.deserialize(game))
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
        return this.httpService.delete(this.apiUrlsService.GAME.delete(id))
            .then(game => NomeacoesModel.deserialize(game))
            ;
    }
}
