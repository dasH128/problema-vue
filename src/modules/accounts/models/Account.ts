export class Account {
    public id: number
    public number: string
    public balance: string
    public isLocked: boolean
    public customerId: string
    public createdAt: string
    public updatedAt: string
  
    public constructor() {
      this.id = 0
      this.number = ''
      this.balance = ''
      this.isLocked = false
      this.customerId = ''
      this.createdAt = ''
      this.updatedAt = ''
    }
  
    public static empty(): Account {
      return new Account()
    }
  
    
  }