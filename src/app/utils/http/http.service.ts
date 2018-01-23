import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule, Response, Request } from '@angular/http';
import 'rxjs/Rx';

/**
 * @ngdoc service
 * @name HTTPService
 * @description
 * Provides an API to abstract http requests and provide
 * the ability of cache the requests if requested
 */
@Injectable()
export class HTTPService {
    private headers: Headers;

    constructor (
        public http: Http,
    ) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    };

    /**
     * @ngdoc method
     * @name addDefaultHeader
     * @description
     * Method to add a default header to the list of headers sent on every request.
     */
    addDefaultHeader (name: string, value: string) {
        if (this.headers.has(name)) {
            this.headers.delete(name);
        }

        this.headers.append(name, value);
    }

    /**
     * @ngdoc method
     * @name removeDefaultHeader
     * @description
     * Method to remove a default header thats send on every request
     */
    removeDefaultHeader (name: string) {
        this.headers.delete(name);
    }
    /**
     * @ngdoc method
     * @name get
     * @description
     * Method to abstract an http get request.
     *
     * @returns {Promise} returns a Promise of the HTTP response
     */
    get(url: string): Promise<any> {
        return this.http.get(url, { headers: this.headers })
                .toPromise()
                .then((res: Response) => res.json())
                .catch(err => this._handleError(err));
    }

    /**
     * @ngdoc method
     * @name post
     * @description
     * Method to abstract an http post request.
     *
     * @returns {Promise} returns a Promise of the HTTP response
     */
    post <T>(url: string, data?: Object): Promise<T> {
        return this.http.post(url, data, { headers: this.headers })
                .toPromise()
                .then((res: any) => res && (res._body || res.body) ? res.json() : {})
                .catch(err => this._handleError(err))
        ;
    }

    /**
     * @ngdoc method
     * @name put
     * @description
     * Method to abstract an http put request.
     *
     * @returns {Promise} returns a Promise of the HTTP response
     */
    put <T>(url: string, data?: Object): Promise<T> {
        return this.http.put(url, data, { headers: this.headers })
                .toPromise()
                .then((res: any) => res && (res._body || res.body) ? res.json() : {})
                .catch(err => this._handleError(err))
        ;
    }

    /**
     * @ngdoc method
     * @name delete
     * @description
     * Method to abstract an http delete request.
     *
     * @returns {Promise} returns a Promise of the HTTP response
     */
    delete <T>(url: string, data?: Object): Promise<T> {
        return this.http.delete(url, { headers: this.headers })
                .toPromise()
                .then((res: any) => res && (res._body || res.body) ? res.json() : {})
                .catch(err => this._handleError(err))
        ;
    }

    /**
     * @ngdoc method
     * @name get#request
     * @description
     * Method to abstract an http request.
     *
     * @returns {Observable} returns an Observable of the HTTP response
     */
    request(data?: Request): Promise<Response> {
        return this.http.request(data)
                .toPromise()
                .catch(err => this._handleError(err));
    }

    private _handleError(error: any): Promise<any> {
        let body;
        if (typeof error._body === 'string') {
            body = JSON.parse(error._body);
        } else {
            body = error._body;
        }
        // TODO: Add error handling
        let errMsg = (body.message) ? body.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);

        return Promise.reject(errMsg);
    }
}
