import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  
  constructor() {}

  ngOnInit() {}

  openCameraPlugin(){
    Camera.getPhoto({
      resultType: CameraResultType.Base64,
    }).then((imageData) => {
      
    });
  }
}
