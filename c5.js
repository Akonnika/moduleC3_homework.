// практика c3.5

// Родительский метод, который определяет включение розетки
class ElectricPower{
    constructor(name,power){
    this.name = name,
    this.power = power,
    this.unPower = false
  
  }
  
  //метод, который определяет, включен ли прибор
  powerOn(){
    console.log(this.name + ' is power')
    this.unPower = true
  }
  
  //метод, который определяет, выключен ли прибор
  powerOff(){
    console.log(this.name + ' is off')
    this.unPower = false
  }
  }
  
  //прибор 1
  class Lamp extends ElectricPower{
    constructor (name, brand, power){
    super(name, power);
    this.brand = brand;
    this.unPower = true
  }
  }
  
  
  //прибор 2
  class Comp extends ElectricPower{
    constructor(name, brand, power, forWhat){
    super(name, power);
    this.brand = brand;
    this.forWhat = forWhat;
    this.unPower = false
  }
  }
  
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