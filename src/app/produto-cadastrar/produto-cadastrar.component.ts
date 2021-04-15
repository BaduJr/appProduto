import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../servicos/produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {
  produtoForm = new FormGroup ({
    nome: new FormControl(),
    preco: new FormControl(),
    quantidade: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', 
        [ 
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ]
      ],
      quantidade: ['', 
        [ 
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });
  }

  saveOnClick(): void{
    this.produtoService.salvar(this.produtoForm.value).subscribe(
      res => {
        alert('Produto cadastrado com sucesso');
      }
    );
  }
}