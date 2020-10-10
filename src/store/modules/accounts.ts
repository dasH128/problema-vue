import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as accountApi from '@/modules/accounts/api/AccountApi'
import { StatusCodes } from 'http-status-codes'
import { AxiosResponse } from 'axios'
import { Account } from '@/modules/accounts/models/Account'

@Module({ namespaced: true })
class Accounts extends VuexModule {
    public accounts: Array<Account> = []
    

    @Action
    public async getAccountsAction(): Promise<void> {
      const apiResponse = await accountApi.getAccounts()
      if (apiResponse.status !== StatusCodes.OK) {
        return
      }
      const accounts = apiResponse.data
      this.context.commit('getAccounts', accounts)
    } 

    @Mutation
    public getAccounts(accounts: Array<Account>): void {
        this.accounts = accounts
    }
}

export default Accounts