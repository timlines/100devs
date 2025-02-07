function webAddress(text){
    
    try{
        const url = new URL(text);
        return url.href;

    }catch (error){
        const regex = /(https?:\/\/[^\s]+)/g;
        const match = text.match(regex);
    
        if (match && match.length > 0 ) {
            return match[0]
        }
        return null;

    }

}


let text1 = '[8/11/2020 8:01 PM] malinche1805 https://www.coursera.org/learn/learning-how-to-learn [8/11/2020 8:01 PM] malinche1805 https://apps.ankiweb.net/ [8/12/2020 5:24 PM] dgefph Wondering if there is any recommended Anki tutorials before I dive in? Thanks'

console.log(webAddress('Visit our website at https://www.example.com for more information.'))
console.log(webAddress(text1))