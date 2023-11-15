"use strict";
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
class Person {
    job;
    name;
    constructor(name) {
        this.name = name;
        this.job = undefined;
    }
    setJob(job) {
        this.job = job;
    }
    getSalary() {
        if (this.job) {
            return this.job.getSalary();
        }
        return 0; // Или можно вернуть другое значение по умолчанию
    }
    work() {
        if (this.job) {
            this.job.work(this.name);
        }
        else {
            console.log(`${this.name} не имеет назначенной работы`);
        }
    }
}
const job1 = new Job("Тянуть", 500);
const job2 = new Job("Толкать", 600);
const job3 = new Job("Копать", 700);
const person1 = new Person("Иван");
const person2 = new Person("Петр");
const person3 = new Person("Анна");
person1.setJob(job1);
person2.setJob(job2);
person3.setJob(job3);
person1.work();
person2.work();
person3.work();
person1.setJob(job3);
person2.setJob(job1);
person3.setJob(job2);
person1.work();
person2.work();
person3.work();
