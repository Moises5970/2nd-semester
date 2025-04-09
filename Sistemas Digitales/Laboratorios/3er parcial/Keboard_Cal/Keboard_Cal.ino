#include <Keypad.h>
const byte filas = 4; 
const byte columnas = 4;
byte pinesFilas[]  = {5,4,3,2};
byte pinesColumnas[] = {A3, A2, A1, A0};
char teclas[4][4] = {{'1','2','3','+'},
                     {'4','5','6','-'},
                     {'7','8','9','*'},
                     {'c','0','=','/'}};
Keypad teclado1 = Keypad( makeKeymap(teclas), pinesFilas, pinesColumnas, filas, columnas);  

String numero1 = "";
String numero2 = "";
char operador = 0;
bool esperandoSegundo = false;

void setup() {
  Serial.begin(9600);
  Serial.println();
}

void loop() {
  //Verifica si alguna tecla fue presionada
  char tecla_p = teclado1.getKey();

  //guardar numeros
  if (tecla_p >= '0' && tecla_p <= '9'){
    if(!esperandoSegundo){
      numero1 += tecla_p;
      Serial.print(tecla_p);
    }else{
      numero2 += tecla_p;
      Serial.print(tecla_p);
    }
  }else if (tecla_p == '+' || tecla_p == '-' || tecla_p == '*' || tecla_p == '/'){
    Serial.print(tecla_p);
    if (numero1 != ""){
      operador = tecla_p;
      esperandoSegundo = true;
    }
  }else if (tecla_p == '='){
    if (numero1 != "" && numero2 != ""){ 
      float n1 = numero1.toFloat();
      float n2 = numero2.toFloat();
      float resultado;
    
      switch (operador){
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case '*': resultado = n1 * n2; break;
        case '/': 
          if (n2 != 0){
            resultado = n1 / n2; 
          }else {
            Serial.println("Error, no se puede dividir entre 0");
            return;
          }
          break;
      }
      Serial.println("");
      Serial.print("Resultado: ");
      Serial.print(resultado);
      numero1 = resultado;
      numero2 = "";
    }
  }else if (tecla_p == 'c'){
    limpiar();
    Serial.println("");
    Serial.println("Limpio");
  }
}

void limpiar(){
  numero1 = "";
  numero2 = "";
  operador = 0;
  esperandoSegundo = false;
}