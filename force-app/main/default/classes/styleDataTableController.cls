public with sharing class styleDataTableController {
    @AuraEnabled(cacheable = true)
public static list<Account>getAccounts(){
      return[select id, AnnualRevenue, Name, Industry, Phone From Account];
    }
}