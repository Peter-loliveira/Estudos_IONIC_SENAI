import { IUsuarioService } from './../interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    'providedIn': 'root'
})

export class UsuarioService implements IUsuarioService {
    constructor(private _httpCliente: HttpClient){
        // FALTA
    }
    cadastrar(usuario: Usuario): Observable<Usuario> {
        if (!usuario.nome) throw new Error ('O campo NOME é OBRIGATÓRIO!')
        if (!usuario.email) throw new Error ('O campo EMAIL é OBRIGATÓRIO!')
        if (usuario.email.indexOf('@') == -1) throw new Error ('O campo EMAIL deve conter um email válido!')
        if (!usuario.senha) throw new Error ('O campo SENHA é OBRIGATÓRIO!')
        if (usuario.senha != usuario.confirmarSenha) throw new Error ('As sehas NÃO CONFEREM!')
        throw new Error("Já pode salvar!");
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    logar(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
    retornaUsuarioLogado(): Usuario {
        throw new Error("Method not implemented.");
    }

}