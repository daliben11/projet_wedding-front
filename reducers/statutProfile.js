export default function(modifier = '', action) {
    if(action.type == 'savePseudo') {
        return action.modifier;
    } else {
        return modifier;
    }
}