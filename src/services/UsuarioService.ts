import { IUsuarioService } from './../interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';

export class UsuarioService implements IUsuarioService {
    cadastrar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
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