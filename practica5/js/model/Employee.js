class Employee extends Person{
    _salary;

    constructor(pDNI,pName,pSurname,pPhone,pBirthdate,pSalary){
        super(pDNI,pName,pSurname,pPhone,pBirthdate);
        this._salary  = pSalary;
    }

    get Salary(){
        return this._salary;
    }

    set Salary(pSalary){
        this._salary = pSalary;
    }
}