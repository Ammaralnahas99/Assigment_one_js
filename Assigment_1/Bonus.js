var createCounter = function(init) {
    let OriginValue =init
    return {
        increment(){
            OriginValue++
            return OriginValue;

        },
        decrement(){
           OriginValue--
           return OriginValue;
        },
        reset(){
            OriginValue=init
            return OriginValue;
        }
        
    };
}
const counter = createCounter(10)
console.log(counter.increment()); 
console.log(counter.reset()); 
console.log(counter.decrement()); 