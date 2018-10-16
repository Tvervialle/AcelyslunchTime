import { Injectable } from '@angular/core';
import { Commande } from '../models/Commande.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  commandes: Commande[] = [];
  commandeSubject = new Subject<Commande[]>();
  constructor() { }

  emitCommandes() {
    this.commandeSubject.next(this.commandes);
  }

  saveCommandes() {
    firebase.database().ref('/commandes').set(this.commandes);
  }

  getCommandes() {
    firebase.database().ref('/commandes')
      .on('value', (data) => {
        this.commandes = data.val() ? data.val() : [];
        this.emitCommandes();
      });
  }

  createNewCommnandes(newCommande: Commande) {
    this.commandes.push(newCommande);
    this.saveCommandes();
    this.emitCommandes();
  }

  removeCommande(commande: Commande) {
       const commandeIndexToRemove = this.commandes.findIndex(
      (bookEl) => {
        if (bookEl === commande) {
          return true;
        }
      }
    );
    this.commandes.splice(commandeIndexToRemove, 1);
    this.saveCommandes();
    this.emitCommandes();
  }

}
