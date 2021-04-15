import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: '', component: ProdutoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto-cadastrar', component: ProdutoCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
