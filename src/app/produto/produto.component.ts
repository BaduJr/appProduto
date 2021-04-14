import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProdutoComponent } from '../modal-produto/modal-produto.component';
import { ProdutoService } from '../servicos/produto.service';

export interface produtoElement {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

const ELEMENT_DATA: produtoElement[] = [
  {id: 1, nome: 'Produto 1', preco: 10.00, quantidade: 10 },
  {id: 2, nome: 'Produto 1', preco: 10.00, quantidade: 10 },
  {id: 3, nome: 'Produto 1', preco: 10.00, quantidade: 10 },
  {id: 4, nome: 'Produto 1', preco: 10.00, quantidade: 10 },
  {id: 5, nome: 'Produto 1', preco: 10.00, quantidade: 10 },
];

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Preço', 'Quantidade', 'Ações'];
  dataSource = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarProdutos();
  }
  

  listarProdutos(): void{
    this.produtoService.obterListaTodos().subscribe((data: any[])=>{
			this.dataSource = data;
		})
  }

  deletar(id: number): void{
    if(confirm("Deseja realmente excluir esse produto?")) {
      this.produtoService.deletar(id).subscribe(
        res => {
          this.listarProdutos();
        }
      );
    }
  }

  alterar(id: number): void{
    this.dialog.open(ModalProdutoComponent,
    {
      width: '250px',
      data: { id: id }
    });
  }
}