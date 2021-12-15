import { LightningElement,track } from 'lwc';
import  houseimg1 from '@salesforce/resourceUrl/houseimg';
export default class HouseTile extends LightningElement {

    house = {
        
        "Address__c": "48 Brattle st",
        "City__c"   :"Cambridge",
        "State__c"  :"NewYork",
        "Beds__c"   :2,
        "Baths__c"  :2,
    }

    get backgroundImageStyle(){
        return `background-image: url(${houseimg1});
                height: 250px;
                width: 50%;`
 
    }
}