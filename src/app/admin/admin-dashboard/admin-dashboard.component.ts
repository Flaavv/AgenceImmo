import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from 'src/app/interfaces/property';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  constructor( ) { }

  ngOnInit(): void {
   
  }

}
