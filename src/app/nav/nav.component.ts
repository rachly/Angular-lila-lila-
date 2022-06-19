import { Component, Output,EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints ,BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
//import * as EventEmitter from 'events';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  btnClick() {
    this.router.navigateByUrl('/app-adminstar');
};
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
    // .pipe(
    //   map(result => result.matches),
    //   shareReplay()
    // );
    // openSerch(){
    
    // }
  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}
 
}
