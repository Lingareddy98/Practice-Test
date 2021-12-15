import { api, LightningElement, wire } from 'lwc';
import getAllAccountWithContact from '@salesforce/apex/AccountContactWrapper.getAllAccountWithContact';

export default class AccountConactDisplay extends LightningElement {

    @api accountsWithContact;
    @api error;
    @wire(getAllAccountWithContact)
    wiredAccountsWithContacts({error, data}){

        if(data){
            this.accountsWithContact = data;
        }
        else if(error){

            console.log(error);
            this.error = error;
        }
    }
}