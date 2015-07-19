import { RestService } from '../../abstract/RestService';

class UserRestService extends RestService {
    
    constructor(Restangular) {
    	
    	let resource = 'users';
        super(resource, Restangular);
    }
}
 
UserRestService.$inject = ['Restangular'];
 
export { UserRestService };