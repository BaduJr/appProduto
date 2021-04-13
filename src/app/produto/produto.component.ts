import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void{
    this.dataSource = ELEMENT_DATA;
  }
}