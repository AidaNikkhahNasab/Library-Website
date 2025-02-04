import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'library_angular';
  
  mediaSub!: Subscription;
  deviceXs!: boolean;
  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((res: MediaChange[]) => {
      console.log(res[0].mqAlias);
      if ( res[0].mqAlias === 'xs'){
        this.deviceXs = false;}
      else{
        this.deviceXs= true;}

    });


  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
