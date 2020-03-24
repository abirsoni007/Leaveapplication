
import { BehaviorSubject, Subject } from 'rxjs';


export class AuthenticationService {

  
  authentcatsubje = new Subject<boolean>()

  onAuthentication(auth:boolean){
    this.authentcatsubje.next(auth);
    console.log(auth)

  }

}
