// практика c3.4

// Родительский метод, который определяет включение розетки
function ElectricPower(name, power){
  this.name = name,
  this.power = power,
  this.unPower = false
}

//метод, который определяет, включен ли прибор
ElectricPower.prototype.powerOn = function(){
  console.log(this.name + ' is power')
  this.unPower = true
}
//метод, который определяет, выключен ли прибор
ElectricPower.prototype.powerOff = function(){
  console.log(this.name + ' is off')
  this.unPower = false
}

//прибор 1
function Lamp(name, brand, power){
  this.name = name;
  this.brand = brand;
  this. power = power;
}

Lamp.prototype = new ElectricPower();

//прибор 2
function Comp(name, brand, power, forWhat){
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.forWhat = forWhat
}

Comp.prototype = new ElectricPower();

//экземпляр лампы
const tableLamp = new Lamp ("Table lamp", "Ikea", 220);

//экземпляр  компа
const homePc = new Comp ("Table pc", "lenovo", 111, "for study");
// отключить комп из розетки и включить лампу
tableLamp.powerOn();
homePc.powerOff();
// результат
console.log(homePc)
console.log(tableLamp)

