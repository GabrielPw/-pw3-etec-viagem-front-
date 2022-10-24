import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [

  { path: 'detalhes-viagem', component: DetalhesViagemComponent },
  { path: '', component: ListagemViagemComponent },
  { path: 'excluir-viagem', component: ExclusaoViagemComponent },
  { path: 'cadastro-viagem', component: CadastroViagemComponent }
]

// sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
