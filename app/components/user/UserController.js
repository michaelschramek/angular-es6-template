import { PageController } from '../../abstract/PageController';

class UserController extends PageController {
    constructor($log, $http, UserRestService, NgResourceUserRestService) {
        let text = 'Hello World';
        super(text);
        this.UserRestService = UserRestService;
        this.NgResourceUserRestService = NgResourceUserRestService;
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

        /*
        this.NgResourceUserRestService.getAll()
            // on success...
            .then(users => {
                this.usersNeu = users;
                console.log(users);
            
            }, 
            function (repsonse) {
            // something went wrong
             console.log(response);
            });
        */

        this.UserRestService.findById('mojombo').then(user => {
            this.userName = user.name;
            console.log(user);
        });
    }
}
 
UserController.$inject = ['$log', '$http', 'UserRestService', 'NgResourceUserRestService'];
 
export { UserController };