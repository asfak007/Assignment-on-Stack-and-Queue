function isValid(s) {
    const stack = [];
    
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in mapping) {

            const topElement = stack.length ? stack.pop() : '#';
            
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    

    return stack.length === 0;
}

// Example usage
console.log(isValid("()"));      
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));     
console.log(isValid("{()}"));   
console.log(isValid("{(})"));   

// Time Complexity: O(n) & Space Complexity: O(n)