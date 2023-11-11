import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  collection,
  doc,
  Firestore,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  getDocs,
  getDoc,
  orderBy,
  Query,
  fromRef,
} from '@angular/fire/firestore';
import { catchError, map, of, filter, from } from 'rxjs';

interface IUser {
  name: string;
  email: string;
  password: string;
  permission: string;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class V2ApiService {
  auth = getAuth();

  constructor(public firestore: Firestore) {}

  //indicado para criar um documento com o uid setado por aqui
  set(document: string, id: string, data: {}) {
    return setDoc(doc(this.firestore, document, id), data)
      .then(() => {
        return { status: 'success' };
      })
      .catch((err) => {
        if (
          err.toString().indexOf('Missing or insufficient permissions') != -1
        ) {
          return {
            status: 'error',
            message: 'Você não tem permissão para realizar essa ação!',
          };
        }
        return { status: 'error', message: 'Houve algum erro no processo!' };
      });
  }

  //indicado para criar um documento com o uid automatico pelo firebase
  add(document: string, data: {}) {
    return addDoc(collection(this.firestore, document), data)
      .then(() => {
        return { status: 'success' };
      })
      .catch((err) => {
        if (
          err.toString().indexOf('Missing or insufficient permissions') != -1
        ) {
          return {
            status: 'error',
            message: 'Você não tem permissão para realizar essa ação!',
          };
        }
        return { status: 'error', message: 'Houve algum erro no processo!' };
      });
  }

  update(document: string, id: string, data: {}) {
    return updateDoc(doc(this.firestore, document, id), data)
      .then(() => {
        return { status: 'success' };
      })
      .catch((err) => {
        if (
          err.toString().indexOf('Missing or insufficient permissions') != -1
        ) {
          return {
            status: 'error',
            message: 'Você não tem permissão para realizar essa ação!',
          };
        }
        return { status: 'error', message: 'Houve algum erro no processo!' };
      });
  }

  delete(document: string, id: string) {
    return deleteDoc(doc(this.firestore, document, id))
      .then(() => {
        return { status: 'success' };
      })
      .catch((err) => {
        if (
          err.toString().indexOf('Missing or insufficient permissions') != -1
        ) {
          return {
            status: 'error',
            message: 'Você não tem permissão para realizar essa ação!',
          };
        }
        return { status: 'error', message: 'Houve algum erro no processo!' };
      });
  }

  getAll(document: string) {
    const coll = collection(this.firestore, document);

    return collectionData(coll).pipe(
      map((res: any) => {
        return {
          status: 'success',
          message: 'consulta com sucesso',
          data: res,
        };
      }),
      catchError((err: any) => {
        if (err.toString().includes('Missing or insufficient permissions')) {
          return of({ status: 'error', message: 'Permissão de acesso negada' });
        }
        return of(err);
      })
    );
  }

  getAllPages(document: string) {
    const coll = collection(this.firestore, document);
    return collectionData(coll).pipe(
      map((res) =>
        res.filter((it: any) => it.published === true && it.page === true)
      ),
      map((res) => res.sort(sortByOrder)),
      map((res) => {
        return {
          status: 'success',
          message: 'consulta com sucesso',
          data: res,
        };
      }),
      catchError((err: any) => {
        if (err.toString().includes('Missing or insufficient permissions')) {
          return of({ status: 'error', message: 'Permissão de acesso negada' });
        }
        return of(err);
      })
    );

    function sortByOrder(a: any, b: any) {
      if (a.order >= b.order) return 1;
      else return -1;
    }
  }

  get(document: string, id: string) {
    const docRef = doc(this.firestore, document, id);
    return from(
      getDoc(docRef).then((res) => {
        return {
          status: 'success',
          message: 'consulta com sucesso',
          data: res.data(),
        };
      })
    );
  }

  getAllPublished(document: string) {
    const coll = collection(this.firestore, document);
    return collectionData(coll).pipe(
      map((res) => res.filter((it: any) => it.published === true)),
      map((res) => {
        return {
          status: 'success',
          message: 'consulta com sucesso',
          data: res,
        };
      }),
      catchError((err: any) => {
        if (err.toString().includes('Missing or insufficient permissions')) {
          return of({ status: 'error', message: 'Permissão de acesso negada' });
        }
        return of(err);
      })
    );
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredentials: UserCredential) => {
        localStorage.setItem('login', JSON.stringify(userCredentials));
        return {
          status: 'success',
          message: 'Usuário logado com sucesso!',
        };
      })
      .catch((err) => {
        return {
          status: 'error',
          message: 'Erro',
          ...err,
        };
      });
  }

  createUser(email: string, password: string, data: IUser) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredentials: UserCredential) => {
        const uid = userCredentials.user.uid;
        if (!uid) {
          return {
            status: 'error',
            message: 'Não foi possível encontrar o uid do usuário',
          };
        }

        return this.set('users', uid, data)
          .then((res) => {
            return {
              status: 'success',
              message: 'Usuário criado com sucesso!',
            };
          })
          .catch((err) => {
            return {
              status: 'error',
              message: 'Erro',
              err,
            };
          });
      })
      .catch((err) => {
        if (err.toString().includes('(auth/email-already-in-use)')) {
          return {
            status: 'error',
            message: 'Esse email já está em uso!',
          };
        }
        return {
          status: 'error',
          message: 'Erro',
          err,
        };
      });
  }

  logout() {
    return signOut(this.auth)
      .then(() => {
        return { status: 'success', message: 'Usuário deslogado com sucesso!' };
      })
      .catch((err) => ({
        status: 'error',
        message: 'Erro',
        err,
      }));
  }

  updateUser(data: Partial<User>) {
    let currentUser = this.auth.currentUser;
    if (!currentUser) {
      return Promise.resolve({
        status: 'error',
        message: 'Você não está autenticado!',
      });
    }
    return updateProfile(currentUser, data)
      .then(() => {
        return {
          status: 'success',
          message: 'Atualização realizada com sucesso!',
        };
      })
      .catch((err) => ({
        status: 'error',
        message: 'Erro',
        err,
      }));
  }

  detectUserChanges() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          return resolve({ status: 'connected', data: user });
        } else {
          return reject({ status: 'desconnected' });
        }
      });
    });
  }
}
