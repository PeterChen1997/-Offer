// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方

function Power(base, exponent)
{
    // return Math.pow(base, exponent)
    var res=1;
    var flag=false;
    if(exponent==0)
        return 1;
    if(exponent<0){
        exponent=-exponent;
        flag=true;
    }
    while(exponent>0){
        if(exponent & 1 == 1){
             res*=base;
        }
        base*=base;
        
        exponent>>=1;
    }
    return flag?(1/res):res;
}