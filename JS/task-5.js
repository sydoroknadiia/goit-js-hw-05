class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
  
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor(obj) {
        this.speed = 0;
        this._price = obj.price;
        this.maxSpeed = obj.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    static getSpecs(car) {
        console.log (car);
    }
 
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price () {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    }
  
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0 ;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        // const newSpeed = this.speed + value;
        // if (newSpeed <= this.maxSpeed) {
        //     this.speed = newSpeed;
        // }
        this.speed + value <= this.maxSpeed && (this.speed = this.speed + value);
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        // const decelerateSpeed = this.speed - value;
        // if (decelerateSpeed > 0) {
        //     this.speed = decelerateSpeed;
        // }
        this.speed - value > 0 && (this.speed = this.speed - value);
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        this.isOn && (this.distance = this.distance + hours * this.speed);
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000