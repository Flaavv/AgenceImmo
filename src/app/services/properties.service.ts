import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Observable, Subject } from 'rxjs';
import { Property } from '../interfaces/property';
//import { emit } from 'cluster';
import * as firebase from 'firebase';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
}) 
export class PropertiesService {

properties : Property[] = [];
 
  propertiesSubject = new Subject<Property[]>();
  constructor() { }
  emitProperties(){
    this.propertiesSubject.next(this.properties); 
  }

  saveProperties(){
    firebase.database().ref('/properties').set(this.properties);
    this.emitProperties();
  }

  getProperties(){
    firebase.database().ref('/properties').on('value', (snapshot)=>{
      this.properties = snapshot.val() ? snapshot.val() : [];
      
      console.log(snapshot.val());
      this.emitProperties();
      
    });
    
  }
  
  createProperties(property){
    //console.log('test');
    
    this.properties.push(property);
    this.saveProperties();
    this.emitProperties();

  }
  
  deleteProperty(index){
  
    
  console.log('test');
  this.properties.splice(index, 1);
  this.saveProperties();
  this.emitProperties();
    
}
  updateProperty(property : Property, index){
    firebase.database().ref('/properties/' + index).update(property) ;
    
     
    // Reviens au même qu'écrire le code qu'il y a en dessous
    
    /** this.properties[index] = property;
    this.saveProperties();
    this.emitProperties; */
  } 

    uploadFile(file: File){
      return new Promise(
        (resolve, reject)=>{
          const uniqueId = Date.now().toString();
          const fileName = uniqueId + file.name;
          const upload = firebase.storage().ref().child('images/properties/' + fileName).put(file);
          upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
              console.log('chargement');
              
            },
            (error)=>{
              console.log(error);
              reject(error);
            },
            ()=>{
              upload.snapshot.ref.getDownloadURL().then(
                (downloadUrl)=>{
                  resolve(downloadUrl);
                }
              )
            }
            );
        }
        );

    }

    removeFile(fileLink: string){
      if(fileLink){
        const storageRef = firebase.storage().refFromURL(fileLink);
        storageRef.delete().then(
          ()=>{
            console.log('file deleted');
            
          }
          ).catch(
            (error)=>{
              console.log(error);
              
            }
          );

      }

    }

}
