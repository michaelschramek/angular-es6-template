class NgResourceService {
	
    constructor(resourceName, $resource){
        this.resourceName = resourceName;
        this.$resource = $resource('https://api.github.com/users/:id', {
          id: '@id'
        }, {
          update: {
            method: 'PUT'
          }
        });
    }

    findById(id) {
        
    }
 
    getAll() {
        return this.$resource.query().$promise;
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
 
NgResourceService.$inject = ['$resource'];
 
export { NgResourceService };