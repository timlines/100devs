const memo = {}

function fib(n){
    if ( n < 2 ){
        return n;
    }else if ( memo[n] ){
        return memo[n];
    }else {
        let result = fib( n - 1 ) + ( n - 2 );
        memo[n] = result;
        return result;
    }
}