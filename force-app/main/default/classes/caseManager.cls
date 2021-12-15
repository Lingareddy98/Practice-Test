public with sharing class caseManager {
    @AuraEnabled
    public static list<case> fetchCaseDetails(string caseNumber){
        if(string.isNotBlank(caseNumber)){
            string searchCase ='%'+caseNumber+'%';
            return [SELECT Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status
                    FROM CASE
                    where caseNumber like :searchCase];
        } 
        else{
            return NULL;
        }   
    }
    @AuraEnabled
    public static string closeCase(string caseId){
        string message;
        try{
            case cs = new case(Id=caseId);
            cs.status='Closed';
            update cs;
            message = 'Success';
        }   
        catch(Exception ex){
            message = ex.getMessage();
        } 
        return message;
    }
}