import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  img: any;


  constructor(
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

  ngOnInit() {
  }

}
