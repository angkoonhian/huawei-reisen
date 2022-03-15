import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


export default class helper { 

    public generateUUID() {
        return uuidv4();
    }
}
