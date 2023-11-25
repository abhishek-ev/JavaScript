function print(){
if (true){
    var a=10; //function scoped
    let b=20; // block scoped
    const c=30; //block scoped
    console.log(a);
    console.log(b);
    console.log(c);

}
}
print();