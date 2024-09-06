/*Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов: */

let washingMashine = {
  brand: "Bosch",
  capacityOfTheLoadingDrum: "7",
  numberOfWashingPrograms: 4,
  numberOfRevolutions: 1200,
  programs: {
    quickWash: 30,
    cotton: 63,
    sportsShoes: 90,
    delicateWash: 120,
  },

  currentProgram: null,
  status: false,

  startTime: null,
  remainingTime: null,
  timer: null,

  setProgram: function(program) {
    this.currentProgram = program;
    this.startTime = this.programs[this.currentProgram] * 60 * 1000; // в миллисекундах
    this.timer = setTimeout(() => {
      this.off();
    }, this.startTime)
  },

  showRemainingTime: function() {
    if (!this.status || !this.currentProgram) {
      return "Choose a program";
    };
    this.remainingTime = this.startTime - 
    return this.remainingTime;
  },

  on: function() {
    this.status = true;
    
  },

  off: function() {
    this.status = false;

  },
}
console.log(washingMashine);
