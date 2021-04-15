import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from '../servicos/produto.service';

export interface dadosProduto {
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {

  id: number;

  produtoForm = new FormGroup ({
    id: new FormControl(),
    nome: new FormControl(),
    preco: new FormControl(),
    quantidade: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    public dialogRef: MatDialogRef<ModalProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.produtoService.obterProdutoPorId(this.id).subscribe(
      (data: dadosProduto)=>{
        this.produtoForm = this.formBuilder.group({
          id: [this.id],
          nome: [data.nome, Validators.required],
          preco: [data.preco, 
            [ 
              Validators.required,
              Validators.pattern('^[0-9]*$')
            ]
          ],
          quantidade: [data.quantidade,
            [ 
              Validators.required,
              Validators.pattern('^[0-9]*$')
            ]
          ]
        });
      }
    );
  }

  cancelarOnClick(): void{
    this.dialogRef.close();
  }

  alterarOnClick(): void{
    this.produtoService.alterar(this.id, this.produtoForm.value).subscribe(
      res => {
        this.cancelarOnClick();
        location.reload();
      }
    );
  }
}