import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';
import { Property } from '../interfaces/property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  properties = [];
  propertiesSubscription : Subscription;
  title = 'AgenceImmo';
  constructor(private propertiesService : PropertiesService) { }
  

  ngOnInit(): void {
    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data : any)=>{
      console.log(data);
      this.properties = data;
      }
    ),
      (error)=>{
        console.error(error);
      },
      
      ()=>{
        console.log('observable complete');
        
      }
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }
  ngOnDestroy(): void {
   this.propertiesSubscription.unsubscribe();
  }
  
  

 

  getSoldColor(index){
    if(this.properties[index].sold){
      return 'green';
    }else{
      return 'red';
    }
  }

}
