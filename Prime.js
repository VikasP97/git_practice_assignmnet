function prime(num){
   let factor=0;
  for(let i=0;i<num;i++){
    if(i%num==0){
      factor++;
    }
  }if(factor==0){
    console.log("Yes")
  }else{
    console.log("No")
  }
}
prime(7);