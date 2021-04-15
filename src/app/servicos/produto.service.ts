import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //private SERVER_URL = "http://localhost:21326/api/produto/";
  private SERVER_URL = "http://apiproduto.azurewebsites.net/api/produto/";

  constructor(private httpClient: HttpClient) { }

  public obterListaTodos(){  
		return this.httpClient.get(this.SERVER_URL);
	}

  public obterProdutoPorId(id: number){  
		return this.httpClient.get(this.SERVER_URL + id);
	}
  
  public salvar(data: any) {
    return this.httpClient.post(this.SERVER_URL, data); 
  }

  public deletar(id: number){
    return this.httpClient.delete(this.SERVER_URL +  id);
  }

  public alterar(id: number, dadosProduto: any){
    return this.httpClient.put(this.SERVER_URL + id, dadosProduto);
  }
}
