export class User {
  constructor(public name: string, public email: string, public street: string, public zipCode: number) {}

  public static empty(): User {
    return new User('', '', '', 0);
  }
}
