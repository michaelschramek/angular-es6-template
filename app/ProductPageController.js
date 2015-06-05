import { PageController } from './PageController';

class ProductPageController extends PageController {

    constructor() {
    	let text = 'ES6 inheritance with Angular';
        super(text);
    }
}

export { ProductPageController }