/*
    ===== Código de TypeScript =====
*/
//import * as Modelos from './modelos';

class Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

class Maestro extends Persona {
  rfc: string;
  departamento: string;

  constructor (name: string, age: number, rfc: string) {
    super();
    this.edad = age;
    this.nombre = name;
    this.rfc = rfc;
  }
}
class Estudiante extends Persona {
  inscrito: boolean;
  private egresado: boolean;

  constructor(name: string, edad: number, direccion: string) {
    super();
    this.nombre = name;
    this.edad = edad;
    this.direccion = direccion;
  }

  setEgresado () {
    this.egresado = true;
  }
}

const estudiante = new Estudiante('Ruddy', 27, 'Calle 1');
console.log(estudiante);

const maestro = new Maestro('Pedro', 30, 'SOTP870213');
console.log(maestro);

