class RestService {
	
    constructor(resourceName, Restangular){
        this.resourceName = resourceName;
        this.Restangular = Restangular;
    }

    findById(id) {
        return this.Restangular
            .one(this.resourceName, id)
            .get();
    }
 
    getAll() {
        return this.Restangular
        	.all(this.resourceName)
        	.getList();
    }

    create(entity) {
        
    }

    update(entity) {
        
    }

    delete(entity) {

    }

    deleteById(id) {

    }
}
 
RestService.$inject = ['Restangular'];
 
export { RestService };