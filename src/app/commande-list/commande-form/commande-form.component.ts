import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande.model';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {


  commandeForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  constructor(private formBuilder: FormBuilder,
    private commandesService: CommandesService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.commandeForm = this.formBuilder.group({
      name: ['', Validators.required],
      menu: ['', Validators.required],
      burger: ['', Validators.required],
      cuisson: ['', Validators.required],
      accompagnement: ['', Validators.required],
      boisson: ['', Validators.required],
      supplement: ['rien', Validators.required]
    });
  }

  onSaveCommande() {
    const name = this.commandeForm.get('name').value;
    const menu = this.commandeForm.get('menu').value;
    const burger = this.commandeForm.get('burger').value;
    const cuisson = this.commandeForm.get('cuisson').value;
    const accompagnement = this.commandeForm.get('accompagnement').value;
    const boisson = this.commandeForm.get('boisson').value;
    const supplement = this.commandeForm.get('supplement').value;
    const newCommande = new Commande(name, menu, burger, cuisson, accompagnement, boisson, supplement);
    this.commandesService.createNewCommnandes(newCommande);
    this.router.navigate(['/commandes']);
  }
}
