import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery:any;
declare var GMaps:any;
declare var mapZoom:any;
@Component({
  selector: 'app-bflocation',
  templateUrl: './bflocation.component.html',
  styleUrls: ['./bflocation.component.css']
})
export class BflocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.gMap()
  }
   gMap () {
    if ($('.google-map').length) {
          $('.google-map').each(function () {
            // getting options from html 
            var mapName = $(this).attr('id');
            var mapLat = $(this).data('map-lat');
            var mapLng = $(this).data('map-lng');
            var iconPath = $(this).data('icon-path');
            var mapZoom = $(this).data('map-zoom');
            var mapTitle = $(this).data('map-title');
  
            
            // if zoom not defined the zoom value will be 15;
         
            var map;
              map = new GMaps({
                  div: '#'+mapName,
                  scrollwheel: false,
                  lat: mapLat,
                  lng: mapLng,
                  zoom: mapZoom
              });
              // if icon path setted then show marker
              if(iconPath) {
              map.addMarker({
                  icon: iconPath,
                    lat: mapLat,
                    lng: mapLng,
                    title: mapTitle
                });
              map.addMarker({
                  icon: iconPath,
                    lat: 41.375066,         //you can
                    lng: -74.177262,
                    title: "South Bloming Grove"
                });
            }
          });  
    };
  }
}
