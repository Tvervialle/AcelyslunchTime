import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommandesService } from '../services/commandes.service';
import { Subscription } from 'rxjs';
import { Commande } from '../models/Commande.model';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit, OnDestroy {
  commandes: Commande[];
  commandeSubscription: Subscription;
  constructor(private commandesService: CommandesService, private router: Router) { }

  ngOnInit() {
    this.commandeSubscription = this.commandesService.commandeSubject.subscribe(
      (commandes: Commande[]) => {
        this.commandes = commandes;
      }
    );
    this.commandesService.getCommandes();
    this.commandesService.emitCommandes();
  }

  onNewcommande() {
    this.router.navigate(['/commandes', 'new']);
  }

  onDeletecommande(commande: Commande) {
    this.commandesService.removeCommande(commande);
  }

  ngOnDestroy() {
    this.commandeSubscription.unsubscribe();
  }

}
