import { NgResourceService } from '../../abstract/NgResourceService';

class NgResourceUserRestService extends NgResourceService {
    
    constructor($resource) {
    	
    	let resource = 'users';
        super(resource, $resource);
    }
}
 
NgResourceUserRestService.$inject = ['$resource'];
 
export { NgResourceUserRestService };