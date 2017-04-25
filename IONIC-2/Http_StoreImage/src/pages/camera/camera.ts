import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers: [HTTP, Camera]
})
export class CameraPage {
  data;
  private http: HTTP = null;
  private camera: Camera = null;

  constructor(public loadingCtrl: LoadingController, public alerCtrl: AlertController) {
    this.http = new HTTP();
    this.camera = new Camera();
  }

  takePicture(){
    const okMessage = 'Ok';

    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: "crescent"
    });

    let success = this.alerCtrl.create({
      title: 'Success',
      message: 'Image successfully received by the server.',
      buttons: [okMessage]
    });

    let alert = this.alerCtrl.create({
      title: 'Error',
      message: 'Network error, please try again.',
      buttons: [okMessage]
    });

    let alertCam = this.alerCtrl.create({
      title: 'Error',
      message: 'Camera error, please try again.',
      buttons: [okMessage]
    });

    const options: CameraOptions = {
      destinationType: 0,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpg;base64,' + imageData;
      this.data = base64Image;

      loading.present();

      this.http.post('http://192.168.0.104:3000' + '/UploadImage', { 'Data': this.data }, { 'Content-Type': 'application/json', 'Content-Transfer-Encoding': 'base64' })
        .then(data => {

          let objectResponse = JSON.parse(data.data);
          loading.dismiss();

          if (objectResponse.status === 201)
            success.present();
          else
            alert.present();

          console.log(data.status);
          console.log(data.data);
          console.log(data.headers);

        })
        .catch(error => {

          loading.dismiss();

          alert.present();

          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);

        });

    }, (err) => {

      alertCam.present();

    });
  }
}
