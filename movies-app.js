// Movies App!

// Build an application that uses jQuery to do the following:
// • contains a form with two inputs for a title and rating along with a button to submit the form.
// • when the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// • when the button to remove is clicked, remove each title and rating from the DOM.

$('form').on('submit', function (event) {
	event.preventDefault();

	const title = $('#title').val();
	const rating = $('#rating').val();
	const data = { title, rating };

	const tr = createTr(data);
	$('tbody').append(tr);
	$('form').trigger('reset');
});

$('tbody').on('click', 'button', function ({ target }) {
	console.log(target);
	$(target).closest('tr').remove();
});

function createTr(obj) {
	return `
	<tr class="row">
		<td class="col-7">${obj.title}</td>
		<td class="col-3">${obj.rating}</td>
		<td class="col-2">
			<button class="btn btn-danger btn-sm" type="button">Delete</button>
		</td>
	</tr>
	`;
}
