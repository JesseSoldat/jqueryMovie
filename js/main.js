$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText) {
	axios.get('http://www.omdbapi.com?s='+searchText)
		.then((res) => {
			// console.log(res);
			let movies = res.data.Search;
			let output = '';
			$.each(movies, (i, movie) => {
				output += `
				<div class='col-md-3'>
					<div class='well text-center'>
						<img src='${movie.Poster}'>
						<h5>${movie.Title}</h5>
						<a onclick='movieSelected("${movie.imdbID}")' class='btn btn-primary href='#'>
							Movie Details
						</a>
					</div>
				</div>
				`
				$('#movies').html(output);
			})
		})
		.catch((err) => {
			console.log(err);
		});
}

function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'movie.html';
	return false;
}

function getMovie() {
	let movieId = sessionStorage.getItem('movieId')
	console.log(movieId);

}