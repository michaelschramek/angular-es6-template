import { PageController } from '../../abstract/PageController';

class UserController extends PageController {
    constructor($log, $http, UserRestService) {
        let text = 'Hello World';
        super(text);
        this.UserRestService = UserRestService;
        this.init();

        this.clickError = function () {
            $log.log('error');
        };
    }
 
    init(){
        
        this.UserRestService.getAll().then(users => {
                this.users = users;
                console.log(users);
            });

        this.UserRestService.findById('mojombo').then(user => {
            this.userName = user.name;
            console.log(user);
        });
    }
}
 
UserController.$inject = ['$log', '$http', 'UserRestService'];
 
export { UserController };