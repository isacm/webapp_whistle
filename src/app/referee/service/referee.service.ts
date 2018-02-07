import { Injectable } from '@angular/core';

import { HTTPService } from 'app/utils/http/http.service';
import { ApiUrlsService } from 'app/utils/api-urls/api-urls.service';

import { RefereeModel } from '../model/referee.model';

@Injectable()
export class RefereeService {
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
    getAll (sort?: string): Promise<Array<RefereeModel>> {
        return this.httpService.get(this.apiUrlsService.REFEREE.getAll(sort))
            .then(res => res.map(referee => RefereeModel.deserialize(referee)))
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
    getOne (id: string): Promise<RefereeModel> {
        return this.httpService.get(this.apiUrlsService.REFEREE.getOne(id))
            .then(referee => RefereeModel.deserialize(referee))
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
    create (payload: RefereeModel): Promise<any> {
        return this.httpService.post(this.apiUrlsService.REFEREE.create(), payload)
            .then(referee => RefereeModel.deserialize(referee))
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
    update (id: string, payload: any): Promise<RefereeModel> {
        return this.httpService.put(this.apiUrlsService.REFEREE.update(id), payload)
            .then(referee => RefereeModel.deserialize(referee))
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
        return this.httpService.delete(this.apiUrlsService.REFEREE.delete(id))
            .then(referee => RefereeModel.deserialize(referee))
            ;
    }

    mail (payload: RefereeModel): Promise<any> {
        return this.httpService.post(this.apiUrlsService.REFEREE.mail(), payload)
            .then(referee => RefereeModel.deserialize(referee))
            ;
    }
}
