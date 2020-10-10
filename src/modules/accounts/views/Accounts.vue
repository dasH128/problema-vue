<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Accounts</h2>

          <ul>
            <li v-for="account in accounts" :key=account.id>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div
                      :key="account.id"
                      class="name"
                    >Number: {{ account.number }}</div>

                  </div>
                   <footer class="card-footer">
                     
                    <button v-if="account.isLocked"  class="link card-footer-item">
                      <i class="fas fa-trash"></i>
                      <span>Desactivar</span>
                    </button>

                    <button v-if="!account.isLocked"  class="link card-footer-item" @click="ActiveAccount(customer)">
                      <i class="fas fa-trash"></i>
                      <span>Activar</span>
                    </button>

                   </footer>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Account } from '@/modules/accounts/models/Account'
import Swal from 'sweetalert2'

const accounts = namespace('accounts')

@Component({})
export default class Accounts extends Vue {
  private message: string = ''

  @accounts.State
  public accounts!: Array<Account>

  
  @accounts.Action
  public getAccountsAction!: () => void

  created() {
    console.log('asdsa')
    this.loadAccounts()
  }

  public loadAccounts(): void {
    this.message = 'getting the accounts, please be patient'
    this.getAccountsAction()
    this.message = ''
  }

  public ActiveAccount(account: Account){
    //   Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })

    console.log('activar')
  }
}
</script>
