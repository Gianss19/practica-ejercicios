    /**
     * @param {string[]} words
     * @return {string[]}
     */

    //let input = ["abba","baba","bbaa","cd","cd"];

    function sortWord(words) {
        if(words !== undefined){
            return words.split('').sort().join("");
        } 
        return null;

    }

    function removeAnagrams(words) {
        let array = words.slice();
        for (let index = 0; index < array.length; index++) {
            let current = sortWord(array[index]);
            let next = sortWord(array[index+1]);
            if(current === next){
                array.splice(index+1,1);
                index--;}
        }

        return array;
    };
    removeAnagrams(["abba","baba","bbaa","cd","cd"])

    //                0      1     2      3    4
    //let input = ["abba","baba","bbaa","cd","cd"]; = 5
    //                0      1     2    3    
    //            ["abba","bbaa","cd","cd"]; = 4
    //                0     1     2      
    //            ["abba","cd","cd"]; = 3
    //                0     1        
    //            ["abba","cd"]; = 2    