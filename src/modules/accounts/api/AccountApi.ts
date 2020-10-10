import { API } from '@/config'
import axios from 'axios'
import { Account } from '../models/Account'

export async function getAccounts() {
    try {
        const endpoint = `${API}/accounts`
        const response = await axios.get(endpoint)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}