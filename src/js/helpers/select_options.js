import {refs} from '../refs'


export const options = 
    {
        select: refs.select,
        events: {
            error: function (err) {
                console.error(err)
            }
        },
        settings: {
            placeholderText: 'Select the breed',
            contentLocation: refs.selectValues
        },
            
    }



 