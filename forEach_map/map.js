const names = [ 'Laura' , 'Manoel' , 'Rubens' , 'Well' , 'Marina' , 'Vinicíus', 'Karina'];




console.log( ' ' );
console.log( 'ForEach' );
console.log( '--------------------' );
console.log( ' ' );
const forEachReturn = names.forEach( ( name , i ) => {
	console.log( name , i);
}); 

console.log( forEachReturn );



console.log( ' ' );
console.log( 'Map' );
console.log( '--------------------' );
const mapReturn = names.map( ( name , i ) => {
	console.log( i , name );

	return /* html */ `
		<li> Usuário ${ i + 1 } => ${ name }</li>
	`
});

console.log( mapReturn );



console.log( ' ' );
console.log( 'Map => construção da função' );
console.log( '--------------------' );
function ourMap( arr , func ) {
	const newArray = [];
	for( let i = 0 ; i < arr.length ; i = i + 1) {
		const arrayItem = arr[ i ];
		newArray.push( func( arrayItem , i));
	}

	return newArray;
}

ourMap( names , function( name , i ) {
	console.log( name , i );
});

const ourMapReturn = ourMap( names , function( name , i ) {
	return /* html */ `
		<div>
			<p>${ i }</p>
			<span>${ name }</span>
		</div>
	`
});

console.log( ourMapReturn );
