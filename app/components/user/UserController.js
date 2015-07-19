import { PageController } from './PageController';

class UserController extends PageController {
    constructor($log, $http, RestService) {
        super('Hello World');
        this.RestService = RestService;
        this.init();

        this.clickError = function () {
            $log.log('error');
        };
    }
 
    init(){
        
        this.RestService.getUsers().then(users => {
                this.users = users;
                console.log(users);
            });
        
        /* 
        this.RestService.getService().query(function (data) {
            this.users = data;
            console.log(data);
        });
        */
    }
}
 
UserController.$inject = ['$log', '$http', 'RestService'];
 
export { UserController };