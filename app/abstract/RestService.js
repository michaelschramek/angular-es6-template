class RestService {
	
    constructor(resourceName, Restangular){
        this.resourceName = resourceName;
        this.Restangular = Restangular;
    }

    findById(id) {

    }
 
    getAll() {
        return this.Restangular
        	.all(this.resourceName)
        	.getList();
    }
}
 
RestService.$inject = ['Restangular'];
 
export { RestService };