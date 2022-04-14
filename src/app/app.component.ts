import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
public appPages = [
   // { title: 'Aluno', Component: AlunoPage},
    { title: 'Responsável'},
    { title: 'Condutor'},
    { title: 'Colégio'},
    { title: 'Veículo'},
    
  ];  
  constructor(public navCtrl: NavController) {

  }
  login() {
    
  }
}
