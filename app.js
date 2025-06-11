let student = ['hafiz', '01884286288', 'class10'];
 student [3] = 'Dhaka';
 let student2 = ['hafiz', '01884286288', 'class10, Dhaka'];

function print_value(element){
    console.log(`Hi I am from Bangladesh ${element}`);
    
}
print_value('kazi nazrul');
print_value('FAISAL AHMED');
print_value('MASHRUPA BINTE BASHIR');
print_value('MARIYANA TRANGE');
print_value('SEXY MASHRUPA');
print_value('MAGI CUDA');

console.log(`name           : `  +student[0]);
console.log(`phone number   : ${student[1]}`);
console.log(`Class          : ${student[2]}`);
console.log(`District       : ${student[3]}`);

console.log('');
console.log(`name           : `  +student2[0]);
console.log(`phone number   : ${student2[1]}`);
console.log(`Class          : ${student2[2]}`);
console.log(`District       : ${student2[3]}`);



function print_array(params)