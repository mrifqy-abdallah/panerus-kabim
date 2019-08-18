import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  img: any;

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  logoutUser() {
    this.getData(this.authService.logout());
  }

  next(para) {
    this.authService.isAuthenticated();
    this.router.navigate([para]);
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController,
    private storage: Storage,
    ) {
      this.storage.get('USER_INFO').then(res => {
        this.namae = res.NAMA_KABIM;
        this.ide = res.NIM_KABIM;
        this.prodie = res.PRODI_KABIM;
        this.fakultase = res.FAKULTAS_KABIM;
        this.img = res.FOTO;
      });
    }

}
