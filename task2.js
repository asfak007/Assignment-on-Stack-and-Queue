function removeDuplicates(s) {
    const stack = [];
    
    for (let char of s) {
        
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            
            stack.push(char);
        }
    }
    
  
    return stack.join('');
}

// Example usage
console.log(removeDuplicates("abbaca")); 
console.log(removeDuplicates("azxxzy"));  

// Time Complexity: O(n) & Space Complexity: O(n)
