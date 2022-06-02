// array
const names = [ 'Laura' , 'Manoel' , 'Rubens' , 'Well' , 'Marina' , 'Vinicíus', 'Karina'];

// for comum
console.log( '--------------------' );
console.log( 'FOR COMUM' );
console.log( '--------------------' );
for( let i = 0 ; i < names.length ; i++ ) {
	console.log( names[ i ] );
}

// forEach
console.log( '--------------------' );
console.log( 'FOR EACH' );
console.log( '--------------------' );
names.forEach( ( name , i ) => {
	console.log( name , i);
}); 



// => dev soutinho
console.log( '--------------------' );
console.log( 'FOREACH DEV SOUTINHO');
console.log( '--------------------' );
names.forEach( function( name , i) {
	console.log( name, i , name);
});



function ourForEach( arr , func ) {
	for( let i = 0 ; i < arr.length ; i = i + 1) {
		const arrayItem = arr[ i ];
		func( arrayItem , i );
	}
}

console.log( '--------------------' );
console.log( 'FOREACH COM O PASSO A PASSO DO FOREACH CRAIDO DEV SOUTINHO');
console.log( '--------------------' );
ourForEach( names , function( names , i) {
	console.log( names , i );
});



// map
console.log( '--------------------' );
console.log( 'MAP');
console.log( '--------------------' );
names.map( ( name , i ) => {
	console.log( i , name , i);
});
